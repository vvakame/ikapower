"use strict";

import {Brand} from "../model/model";
import {getById as getGearPowerById} from "./gearpower";

const data: Brand[] = [
    {
        id: "firefin",
        name: {
            ja: "ホッコリー",
            en: "Firefin"
        },
        strength: getGearPowerById("inkSaverSub"),
        weakness: getGearPowerById("inkRecoveryUp")
    },
    {
        id: "forge",
        name: {
            ja: "フォーリマ",
            en: "Forge"
        },
        strength: getGearPowerById("specialDurationUp"),
        weakness: getGearPowerById("inkSaverSub")
    },
    {
        id: "inkline",
        name: {
            ja: "シグレニ",
            en: "Inkline"
        },
        strength: getGearPowerById("defenseUp"),
        weakness: getGearPowerById("damageUp")
    },
    {
        id: "krakOn",
        name: {
            ja: "クラーゲス",
            en: "Krak-On"
        },
        strength: getGearPowerById("swimSpeedUp"),
        weakness: getGearPowerById("defenseUp")
    },
    {
        id: "rockenberg",
        name: {
            ja: "ロッケンベルグ",
            en: "Rockenberg"
        },
        strength: getGearPowerById("runSpeedUp"),
        weakness: getGearPowerById("swimSpeedUp")
    },
    {
        id: "skalop",
        name: {
            ja: "ホタックス",
            en: "Skalop"
        },
        strength: getGearPowerById("quickRespawn"),
        weakness: getGearPowerById("specialSaver")
    },
    {
        id: "splashMob",
        name: {
            ja: "ジモン",
            en: "Splash Mob"
        },
        strength: getGearPowerById("inkSaverMain"),
        weakness: getGearPowerById("runSpeedUp")
    },
    {
        id: "squidforce",
        name: {
            ja: "バトロイカ",
            en: "Squidforce"
        },
        strength: getGearPowerById("damageUp"),
        weakness: getGearPowerById("inkSaverMain")
    },
    {
        id: "takoroka",
        name: {
            ja: "ヤコ",
            en: "Takoroka"
        },
        strength: getGearPowerById("specialChargeUp"),
        weakness: getGearPowerById("specialDurationUp")
    },
    {
        id: "tentatek",
        name: {
            ja: "アロメ",
            en: "Tentatek"
        },
        strength: getGearPowerById("inkRecoveryUp"),
        weakness: getGearPowerById("quickSuperJump")
    },
    {
        id: "zekko",
        name: {
            ja: "エゾッコ",
            en: "Zekko"
        },
        strength: getGearPowerById("specialSaver"),
        weakness: getGearPowerById("specialChargeUp")
    },
    {
        id: "zink",
        name: {
            ja: "アイロニック",
            en: "Zink"
        },
        strength: getGearPowerById("quickSuperJump"),
        weakness: getGearPowerById("quickRespawn")
    },
    {
        id: "amiibo",
        name: {
            ja: "アミーボ",
            en: "Amiibo"
        },
    },
    {
        id: "cuttlegear",
        name: {
            ja: "アタリメイド",
            en: "Cuttlegear"
        },
    },
    {
        id: "famitsu",
        name: {
            ja: "ファミ通",
            en: "Famitsu"
        },
    },
    {
        id: "kog",
        name: {
            ja: "KOG",
            en: "KOG"
        },
    },
    {
        id: "squidGirl",
        name: {
            ja: "侵略！イカ娘",
            en: "SQUID GIRL"
        },
    },
];

export default data;

export function getById(id: string): Brand {
    let found = data.filter(v => v.id === id)[0];
    if (!found) {
        throw new Error(`brand: ${id} is not found`);
        return null;
    }
    return found
}
