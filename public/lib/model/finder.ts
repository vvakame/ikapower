"use strict";

import {Gear, GearPower} from "./model";
import * as gears from "../data/gear";
import * as powers from "../data/gearpower";

export interface Options {
    debug?: boolean;
    required: PowerSpec[];
}

export interface PowerSpec {
    id: string;
    value?: number;
}

interface GearSet {
    headgear: Gear;
    clothing: Gear;
    shoes: Gear;
}

class Pattern {
    sets: GearSet[] = [];

    mainPowerIds: string[] = [];
    subBrandIds: string[] = []; // 1ギア=3ブランド(スロット)
    _id: string;

    constructor(headgear: Gear, clothing: Gear, shoes: Gear) {
        this.addGearSet(headgear, clothing, shoes);

        this.mainPowerIds = [headgear, clothing, shoes].map(g => g.main.id);
        [headgear, clothing, shoes].forEach(p => {
            this.subBrandIds.push(p.brand.id);
            this.subBrandIds.push(p.brand.id);
            this.subBrandIds.push(p.brand.id);
        });

        this.mainPowerIds = this.mainPowerIds.sort();
        this.subBrandIds = this.subBrandIds.sort();
    }

    get id(): string {
        if (this._id) {
            return this._id;
        }
        this._id = "";
        this.mainPowerIds.forEach(id => {
            this._id += `|m:${id}`;
        });
        this.subBrandIds.forEach(id => {
            this._id += `|b:${id}`;
        });
        this._id = this._id.substr(1);
        return this._id;
    }

    addGearSet(headgear: Gear, clothing: Gear, shoes: Gear) {
        this.sets.push({
            headgear,
            clothing,
            shoes
        });
    }

    /**
     * 要求されたメインギアパワーを満たすかチェック
     * メインの組み合わせが満たさない場合は弾く
     */
    isSatisfySpec(totalSpec: TotalSpec): boolean {
        let gearpowerIds = Object.keys(totalSpec.specMap);
        return gearpowerIds.every(gearpowerId => {
            let spec = totalSpec.specMap[gearpowerId];
            if (0 < spec.main) {
                let mainCount = this.mainPowerIds
                    .filter(pId => pId === gearpowerId).length;
                if (spec.main <= mainCount) {
                    return true;
                }
                return false;
            }
            // サブは確率が低いだけでどんなBrandでも条件を満たしうる
            return true;
        });
    }
}

export class TotalSpec {

    static generate(opts: Options): TotalSpec[] {
        let variationMap: {
            [gearpowerId: string]: {
                main: number;
                sub: number;
            }[];
        } = {};
        opts.required.forEach(ps => {
            let p = powers.getById(ps.id);
            if (p.stackable) {
                let result: {
                    main: number;
                    sub: number;
                }[] = [];
                // バリエーション生成
                // 攻撃Up26なら
                // メイン*3
                // メイン*2 サブ*2
                // メイン*1 サブ*6
                // メイン*0 サブ*9 
                let value = ps.value;
                if (!value) {
                    return;
                }
                result.push({
                    main: Math.ceil(value / 10),
                    sub: 0
                });
                let main = Math.floor(value / 10);
                while (true) {
                    let sub = Math.ceil((value - main * 10) / 3);
                    result.push({
                        main,
                        sub
                    });
                    if (main === 0) {
                        break;
                    }
                    main--;
                }
                variationMap[ps.id] = result;
            } else {
                // 1個で終わり 
                variationMap[ps.id] = [{
                    main: 1,
                    sub: 0
                }];
            }
        });

        // 全てのギアパワーの組み合わせを求める
        let result = generate(Object.keys(variationMap));

        // 実現不可能なものを除く
        result = result.filter(r => {
            let main = 0;
            let sub = 0;
            Object.keys(r.specMap).forEach(gearpowerId => {
                let spec = r.specMap[gearpowerId];
                main += spec.main;
                sub += spec.sub;
            });

            if (3 < main) {
                return false;
            }
            if (3 * 3 < sub) {
                return false;
            }

            return true;
        });

        return result;

        function generate(gearpowerIds: string[], resultList: TotalSpec[] = []): TotalSpec[] {
            if (gearpowerIds.length === 0) {
                return resultList;
            }
            let gearpowerId = gearpowerIds[0];
            let variation = variationMap[gearpowerId];
            let nextResult: TotalSpec[] = [];
            if (resultList.length === 0) {
                variation.forEach(v => {
                    let newResult = new TotalSpec();
                    newResult.specMap[gearpowerId] = v;
                    nextResult.push(newResult);
                });
            } else {
                variation.forEach(v => {
                    resultList.forEach(r => {
                        let newResult = r.clone();
                        newResult.specMap[gearpowerId] = v;
                        nextResult.push(newResult);
                    });
                });
            }
            return generate(gearpowerIds.slice(1), nextResult);
        }
    }

    specMap: {
        [gearpowerId: string]: {
            main: number;
            sub: number;
        };
    } = {};

    clone(): TotalSpec {
        let result = new TotalSpec();
        Object.keys(this.specMap).forEach(gearpowerId => {
            result.specMap[gearpowerId] = this.specMap[gearpowerId];
        });
        return result;
    }
}

class ResultUnit {
    static generate(pattern: Pattern, spec: TotalSpec, resultUnitList: ResultUnit[]): void {
        pattern.sets.forEach(s => {
            let resultUnit = new ResultUnit(s.headgear, s.clothing, s.shoes, spec);
            resultUnitList.push(resultUnit);
        });
    }

    _id: string;
    _odds: number;

    constructor(public headgear: Gear, public clothing: Gear, public shoes: Gear, public spec: TotalSpec) {
    }

    get id(): string {
        if (this._id) {
            return this._id;
        }
        this._id = `${this.headgear.id}|${this.clothing.id}|${this.shoes.id}|${this.odds}`;
        return this._id;
    }

    get odds(): number {
        if (typeof this._odds !== "undefined") {
            return this._odds;
        }
        
        // NOTE http://wikiwiki.jp/splatoon2ch/?%A5%AE%A5%A2%A5%D1%A5%EF%A1%BC%B8%B7%C1%AA%BB%D8%C6%EE%BD%F1#s112cb27
        // brand = strength の場合 10/33
        // brand = other    の場合 2/33
        // brand = weakness の場合 1/33
        // brand = none     の場合 1/13
        // 優ブランド＞不得手なしブランド＞無関係ブランド＞劣ブランド
        
        let result = 1.00;
        const strength = 10 / 33;
        const other = 2 / 33;
        const weakness = 1 / 33;
        const none = 1 / 13;
        
        // Pattern#isSatisfySpec でメインギアパワーが満たされていることはチェック済
        // サブギアパワーの代わりにメインギアパワーを使うのはパターン探索でフォローされてるので考えない
        
        let specMap: {
            [gearpowerId: string]: {
                sub: number;
            };
        } = {};
        Object.keys(this.spec.specMap).forEach(gearpowerId => {
            specMap[gearpowerId] = {
                sub: this.spec.specMap[gearpowerId].sub
            };
        });
        let usedMarker = {
            headgear: {
                sub: 0
            },
            clothing: {
                sub: 0
            },
            shoes: {
                sub: 0
            },
        };
        

        // 優ブランドから優先探索
        Object.keys(specMap).forEach(gearpowerId => {
            function cond(gearpowerId: string, gear: Gear): boolean {
                return gear.brand.strength && gear.brand.strength.id === gearpowerId;
            }
            calc(gearpowerId, usedMarker.headgear, this.headgear, strength, cond);
            calc(gearpowerId, usedMarker.clothing, this.clothing, strength, cond);
            calc(gearpowerId, usedMarker.shoes, this.shoes, strength, cond);
        });

        // 不得手なしブランドを探索
        Object.keys(specMap).forEach(gearpowerId => {
            function cond(gearpowerId: string, gear: Gear): boolean {
                return !gear.brand.strength; // strength無し=得意不得意無しブランド
            }
            calc(gearpowerId, usedMarker.headgear, this.headgear, none, cond);
            calc(gearpowerId, usedMarker.clothing, this.clothing, none, cond);
            calc(gearpowerId, usedMarker.shoes, this.shoes, none, cond);
        });

        // 無関係ブランドを探索
        Object.keys(specMap).forEach(gearpowerId => {
            function cond(gearpowerId: string, gear: Gear): boolean {
                return gear.brand.strength && gear.brand.strength.id !== gearpowerId && gear.brand.weakness.id !== gearpowerId;
            }
            calc(gearpowerId, usedMarker.headgear, this.headgear, other, cond);
            calc(gearpowerId, usedMarker.clothing, this.clothing, other, cond);
            calc(gearpowerId, usedMarker.shoes, this.shoes, other, cond);
        });

        // 劣ブランド探索
        Object.keys(specMap).forEach(gearpowerId => {
            function cond(gearpowerId: string, gear: Gear): boolean {
                return gear.brand.weakness && gear.brand.weakness.id === gearpowerId;
            }
            calc(gearpowerId, usedMarker.headgear, this.headgear, weakness, cond);
            calc(gearpowerId, usedMarker.clothing, this.clothing, weakness, cond);
            calc(gearpowerId, usedMarker.shoes, this.shoes, weakness, cond);
        });

        this._odds = result;

        return result;

        function calc(gearpowerId: string, marker: { sub: number; }, gear: Gear, x: number, cond: (gearpowerId: string, gear: Gear) => boolean) {
            if (cond(gearpowerId, gear)) {
                let spec = specMap[gearpowerId];
                if (spec && spec.sub && marker.sub < 3) {
                    spec.sub--;
                    marker.sub++;
                    result *= x;

                    calc(gearpowerId, marker, gear, x, cond);
                }
            }
        }
    }
}

export class Result {
    specs: TotalSpec[] = [];
    constructor(public headgear: Gear, public clothing: Gear, public shoes: Gear, public odds: number) {
    }

    addSpec(spec: TotalSpec) {
        this.specs.push(spec);
    }
}

export default function find(opts: Options): Promise<Result[]> {
    const debug = opts.debug || false;

    function makeTimer(message: string) {
        const start = Date.now();
        return () => debug && console.log(`${message}: ${Date.now() - start}`);
    }

    return Promise.resolve()
        .then(() => {
            let timer = makeTimer("generate gear list x3");
            let result = generateAllGearList(opts);
            timer();
            return result;
        })
        .then(r => {
            const {headgears, clothing, shoes} = r;
            let timer = makeTimer("generate gear cordinate list");
            let result = generateGearCordinatedList(headgears, clothing, shoes);
            timer();
            return result;
        })
        .then(r => {
            const {patternMap} = r;
            let timer = makeTimer("filter gear cordinate");
            let result = filterGearList(opts, patternMap);
            timer();
            return result;
        })
        .then(r => {
            const {resultUnitList} = r;
            let timer = makeTimer("conpaction geat cordinate pattern");
            let resultList = conpactionGearList(resultUnitList);
            timer();
            
            // TODO ギアの名前順で一回整えたい
            resultList = resultList.sort((a, b) => b.odds - a.odds); // oddsの降順

            return resultList;
        });
}

function generateGearList(typeId: string, opts: Options): Gear[] {
    let gearList = gears.default.filter(g => g.type.id === typeId);
    let gearpowerList = powers.default;

    const reqGearPowerIds = opts.required.map(r => r.id);
    const hitReqGearPowerId = (gearpowerId: string) => reqGearPowerIds.indexOf(gearpowerId) !== -1;

    let reqLimitedGearpowerList = gearpowerList
        .filter(p => p.limitation && p.limitation.id === typeId)
        .filter(p => hitReqGearPowerId(p.id))

    // 要求された専用ギアパワーが競合してたら検索結果0
    if (1 < reqLimitedGearpowerList.length) {
        return [];
    }
    
    // 専用ギアパワーが指定されていたら該当を全て返す
    if (reqLimitedGearpowerList.length !== 0) {
        let reqGearPower = reqLimitedGearpowerList[0];
        return gearList.filter(g => g.main.id === reqGearPower.id);
    }

    // 以下の条件で検索対象ギアを絞る
    //   要求されたギアパワーのいずれかをメインギアパワーに持つ
    //   要求されたギアパワーのいずれかを得意なギアパワーに持つブランドを持つ
    //   得意なギアパワー無しのブランドを持つ（メインギアパワー+ブランド得意にマッチするギアがない場合最適解になりうる）
    //     ただし、メインギアパワーが一致する得意なしブランドがあった場合、メインが一致しないものは除外する
    const hasMainGears = gearList.filter(g => hitReqGearPowerId(g.main.id));
    const hasStrengthBrandGears = gearList.filter(g => g.brand.strength && hitReqGearPowerId(g.brand.strength.id));
    const quietBrandWithMainGears = gearList.filter(g => !g.brand.strength && hitReqGearPowerId(g.main.id));
    let quitBrandGears: Gear[] = [];
    if (quietBrandWithMainGears.length === 0) {
        quitBrandGears = gearList.filter(g => !g.brand.strength);
    }

    let resultList: Gear[] = hasMainGears;
    hasStrengthBrandGears.forEach(gear => {
        if (resultList.indexOf(gear) === -1) {
            resultList.push(gear);
        }
    });
    quietBrandWithMainGears.forEach(gear => {
        if (resultList.indexOf(gear) === -1) {
            resultList.push(gear);
        }
    });
    quitBrandGears.forEach(gear => {
        if (resultList.indexOf(gear) === -1) {
            resultList.push(gear);
        }
    });

    return resultList;
}

function generateAllGearList(opts: Options) {
    // 検索対象ギア一覧を作る
    //   部位限定ギアパワー
    // アタマ✕フク✕クツ の全一覧を生成する
    const headgears = generateGearList("headgear", opts);
    const clothing = generateGearList("clothing", opts);
    const shoes = generateGearList("shoes", opts);

    return {
        headgears,
        clothing,
        shoes
    };
}

function generateGearCordinatedList(headgears: Gear[], clothing: Gear[], shoes: Gear[]) {
    // 探索の手を抜くため、探索パターンをまとめる
    // 例えば、以下の2セットは可換である。
    // アタマ ヤコメッシュ      (Main:防御力アップ, Brand:ヤコ)
    // フク   F-190           (Main:ヒト移動速度アップ, Brand:フォーリマ)
    // アタマ テンタクルズメット (Main:ヒト移動速度アップ, Brand:フォーリマ)
    // フク   FCカラスミ       (Main:防御力アップ, Brand:ヤコ)

    let patternMap = new Map<string, Pattern>();
    headgears.forEach(h => {
        clothing.forEach(c => {
            shoes.forEach(s => {
                let pattern = new Pattern(h, c, s);
                if (patternMap.has(pattern.id)) {
                    patternMap.get(pattern.id).addGearSet(h, c, s);
                } else {
                    patternMap.set(pattern.id, pattern);
                }
            });
        });
    });

    return {
        patternMap
    };
}

function filterGearList(opts: Options, patternMap: Map<string, Pattern>) {
    // ギアの組み合わせパターンから、要件を満たすものだけを抽出する

    let resultUnitList: ResultUnit[] = [];
    let specs = TotalSpec.generate(opts);
    patternMap.forEach(pattern => {
        for (let s of specs) {
            if (!pattern.isSatisfySpec(s)) {
                continue;
            }
            ResultUnit.generate(pattern, s, resultUnitList);
        }
    });

    return {
        resultUnitList
    };
}

function conpactionGearList(resultUnitList: ResultUnit[]) {
    // ギアの組み合わせの重複を排除する
    // 例えば、アオサドーレなら 攻撃力UP10とスペシャル増加量UP9 と 攻撃力UP9とスペシャル増加量UP9 両方を満たすのでダブってしまう
   
    let resultMap: { [resultId: string]: Result } = {};
    resultUnitList.forEach(r => {
        let result = resultMap[r.id];
        if (!result) {
            result = new Result(r.headgear, r.clothing, r.shoes, r.odds);
            resultMap[r.id] = result;
        }
        result.addSpec(r.spec);
    });
    return Object.keys(resultMap).map(resultId => resultMap[resultId]);
}
