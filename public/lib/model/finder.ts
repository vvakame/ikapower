"use strict";

import {Gear, GearPower} from "./model";
import * as gears from "../data/gear";
import * as powers from "../data/gearpower";

export interface Options {
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

export class Result {
    static generate(pattern: Pattern, spec: TotalSpec): Result[] {
        return pattern.sets.map(s => new Result(s.headgear, s.clothing, s.shoes, spec));
    }

    _odds: number;

    constructor(public headgear: Gear, public clothing: Gear, public shoes: Gear, public spec: TotalSpec) {
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

export default function find(opts: Options): Promise<Result[]> {
    let startAt = Date.now();
    
    // 検索対象ギア一覧を作る
    //   部位限定ギアパワー
    // アタマ✕フク✕クツ の全一覧を生成する
    const headgears = gears.default.filter(gearInitFilter("headgear", opts));
    const clothing = gears.default.filter(gearInitFilter("clothing", opts));
    const shoes = gears.default.filter(gearInitFilter("shoes", opts));

    // 探索の手を抜くため、探索パターンをまとめる
    // 例えば、以下の2セットは可換である。
    // アタマ ヤコメッシュ      (Main:防御力アップ, Brand:ヤコ)
    // フク   F-190           (Main:ヒト移動速度アップ, Brand:フォーリマ)
    // アタマ テンタクルズメット (Main:ヒト移動速度アップ, Brand:フォーリマ)
    // フク   FCカラスミ       (Main:防御力アップ, Brand:ヤコ)
    let patternMap: {
        [patternId: string]: Pattern;
    } = {};
    headgears.forEach(h => {
        clothing.forEach(c => {
            shoes.forEach(s => {
                let pattern = new Pattern(h, c, s);
                let exists = patternMap[pattern.id];
                if (exists) {
                    exists.addGearSet(h, c, s);
                } else {
                    patternMap[pattern.id] = pattern;
                }
            });
        });
    });

    let resultList: Result[] = [];
    let specs = TotalSpec.generate(opts);
    Object.keys(patternMap)
        .map(patternId => patternMap[patternId])
        .forEach(pattern => {
            specs
                .filter(s => pattern.isSatisfySpec(s))
                .forEach(s => {
                    resultList = resultList.concat(Result.generate(pattern, s));
                });
        });
    // TODO ギアの並び順を一回整えたい
    resultList = resultList.sort((a, b) => b.odds - a.odds); // oddsの降順

    return Promise.resolve(resultList);
}

/**
 * gearInitFilter は専用ギアパワーが要求されていた時にそれに当てはまるGearだけにtrueを返すフィルタを生成する。
 * 専用ギアパワーが含まれない場合は素通しする。
 */
export function gearInitFilter(typeId: string, opts: Options, gs = gears.default, candidates = powers.default): (v: Gear) => boolean {
    gs = gs.filter(g => g.type.id === typeId);
    candidates = candidates.filter(gp => gp.limitation && gp.limitation.id === typeId);

    let req = opts.required.filter(r => candidates.filter(gp => gp.id === r.id).length !== 0);
    if (1 < req.length) {
        // 専用ギアパワーが競合してたら検索結果0
        return (v: Gear): boolean => false;
    }
    if (req.length === 1) {
        let r = req[0];
        gs = gs.filter(g => r.id === g.main.id);
    }

    return (v: Gear): boolean => {
        return gs.filter(g => g.id === v.id).length !== 0;
    };
}
