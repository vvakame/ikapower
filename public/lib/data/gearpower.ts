"use strict";

import {GearPower} from "../model/model";
import {getById as getClothingById} from "./geartype";

const data: GearPower[] = [
    {
        id: "inkSaverMain",
        name: {
            ja: "インク効率アップ（メイン）",
            en: "Ink Saver (Main)"
        },
        stackable: true,
        mainOnly: false
    },
    {
        id: "inkSaverSub",
        name: {
            ja: "インク効率アップ（サブ）",
            en: "Ink Saver (Sub)"
        },
        stackable: true,
        mainOnly: false
    },
    {
        id: "specialChargeUp",
        name: {
            ja: "スペシャル増加量アップ",
            en: "Special Charge Up"
        },
        stackable: true,
        mainOnly: false
    },
    {
        id: "specialDurationUp",
        name: {
            ja: "スペシャル時間延長",
            en: "Special Duration Up"
        },
        stackable: true,
        mainOnly: false
    },
    {
        id: "inkRecoveryUp",
        name: {
            ja: "インク回復力アップ",
            en: "Ink Recovery Up"
        },
        stackable: true,
        mainOnly: false
    },
    {
        id: "quickRespawn",
        name: {
            ja: "復活時間短縮",
            en: "Quick Respawn"
        },
        stackable: true,
        mainOnly: false
    },
    {
        id: "specialSaver",
        name: {
            ja: "スペシャル減少量ダウン",
            en: "Special Saver"
        },
        stackable: true,
        mainOnly: false
    },
    {
        id: "haunt",
        name: {
            ja: "うらみ",
            en: "Haunt"
        },
        limitation: getClothingById("clothing"),
        stackable: false,
        mainOnly: true
    },
    {
        id: "comeback",
        name: {
            ja: "カムバック",
            en: "Comeback"
        },
        limitation: getClothingById("headgear"),
        stackable: false,
        mainOnly: true
    },
    {
        id: "bombRangeUp",
        name: {
            ja: "ボム飛距離アップ",
            en: "Bomb Range Up"
        },
        stackable: true,
        mainOnly: false
    },
    {
        id: "tenacity",
        name: {
            ja: "逆境強化",
            en: "Tenacity"
        },
        limitation: getClothingById("headgear"),
        stackable: false,
        mainOnly: true
    },
    {
        id: "runSpeedUp",
        name: {
            ja: "ヒト移動速度アップ",
            en: "Run Speed Up"
        },
        stackable: true,
        mainOnly: false
    },
    {
        id: "swimSpeedUp",
        name: {
            ja: "イカダッシュ速度アップ",
            en: "Swim Speed Up"
        },
        stackable: true,
        mainOnly: false
    },
    {
        id: "quickSuperJump",
        name: {
            ja: "スーパージャンプ時間短縮",
            en: "Quick Super Jump"
        },
        stackable: true,
        mainOnly: false
    },
    {
        id: "stealthJump",
        name: {
            ja: "ステルスジャンプ",
            en: "Stealth Jump"
        },
        limitation: getClothingById("shoes"),
        stackable: false,
        mainOnly: true
    },
    {
        id: "ninjaSquid",
        name: {
            ja: "イカニンジャ",
            en: "Ninja Squid"
        },
        limitation: getClothingById("clothing"),
        stackable: false,
        mainOnly: true
    },
    {
        id: "recon",
        name: {
            ja: "スタートレーダー",
            en: "Recon"
        },
        limitation: getClothingById("clothing"),
        stackable: false,
        mainOnly: true
    },
    {
        id: "openingGambit",
        name: {
            ja: "スタートダッシュ",
            en: "Opening Gambit"
        },
        limitation: getClothingById("headgear"),
        stackable: false,
        mainOnly: true
    },
    {
        id: "lastDitchEffort",
        name: {
            ja: "ラストスパート",
            en: "Last-Ditch Effort"
        },
        limitation: getClothingById("headgear"),
        stackable: false,
        mainOnly: true
    },
    {
        id: "inkResistanceUp",
        name: {
            ja: "安全シューズ",
            en: "Ink Resistance Up"
        },
        limitation: getClothingById("shoes"),
        stackable: false,
        mainOnly: true
    },
    {
        id: "defenseUp",
        name: {
            ja: "防御力アップ",
            en: "Defense Up"
        },
        stackable: true,
        mainOnly: false
    },
    {
        id: "damageUp",
        name: {
            ja: "攻撃力アップ",
            en: "Damage Up"
        },
        stackable: true,
        mainOnly: false
    },
    {
        id: "coldBlooded",
        name: {
            ja: "マーキングガード",
            en: "Cold Blooded"
        },
        limitation: getClothingById("clothing"),
        stackable: false,
        mainOnly: true
    },
    {
        id: "bombSniffer",
        name: {
            ja: "ボムサーチ",
            en: "Bomb Sniffer"
        },
        limitation: getClothingById("shoes"),
        stackable: false,
        mainOnly: true
    },
];

export default data;

export function getById(id: string): GearPower {
    let found = data.filter(v => v.id === id)[0];
    if (!found) {
        throw new Error(`gear power: ${id} is not found`);
        return null;
    }
    return found
}
