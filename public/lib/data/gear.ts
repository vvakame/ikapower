"use strict";

import {Gear} from "../model/model";
import {getById as getGearPowerById} from "./gearpower";
import {getById as getGearTypeById} from "./geartype";
import {getById as getBrandById} from "./brand";

// from http://splatoon.wikia.com/wiki/Splatoon_Wiki
// from http://wikiwiki.jp/splatoon2ch/?%A5%AE%A5%A2%A5%D1%A5%EF%A1%BC%CA%CC%A5%EA%A5%B9%A5%C8
const data: Gear[] = [
    {
        id: "classicStrawBoater",
        name: {
            ja: "イカンカン クラシック",
            en: "Classic Straw Boater"
        },
        type: getGearTypeById("headgear"),
        main: getGearPowerById("specialDurationUp"),
        brand: getBrandById("skalop"),
        stars: 2
    },
    {
        id: "fullMoonGlasses",
        name: {
            ja: "マルベッコー",
            en: "Full Moon Glasses"
        },
        type: getGearTypeById("headgear"),
        main: getGearPowerById("quickSuperJump"),
        brand: getBrandById("krakOn"),
        stars: 1
    },
    {
        id: "noiseCancelers",
        name: {
            ja: "イヤーマフ",
            en: "Noise Cancelers"
        },
        type: getGearTypeById("headgear"),
        main: getGearPowerById("quickRespawn"),
        brand: getBrandById("forge"),
        stars: 2
    },
    {
        id: "octoglasses",
        name: {
            ja: "オクタグラス",
            en: "Octoglasses"
        },
        type: getGearTypeById("headgear"),
        main: getGearPowerById("lastDitchEffort"),
        brand: getBrandById("firefin"),
        stars: 3
    },
    {
        id: "paisleyBandana",
        name: {
            ja: "エイズリーバンダナ",
            en: "Paisley Bandana"
        },
        type: getGearTypeById("headgear"),
        main: getGearPowerById("inkSaverSub"),
        brand: getBrandById("krakOn"),
        stars: 1
    },
    {
        id: "skullBandana",
        name: {
            ja: "イカスカルマスク",
            en: "Skull Bandana"
        },
        type: getGearTypeById("headgear"),
        main: getGearPowerById("specialSaver"),
        brand: getBrandById("forge"),
        stars: 2
    },
    {
        id: "soccerHeadband",
        name: {
            ja: "サッカーバンド",
            en: "Soccer Headband"
        },
        type: getGearTypeById("headgear"),
        main: getGearPowerById("tenacity"),
        brand: getBrandById("tentatek"),
        stars: 3
    },
    {
        id: "specialForcesBeret",
        name: {
            ja: "モンゴウベレー",
            en: "Special Forces Beret"
        },
        type: getGearTypeById("headgear"),
        main: getGearPowerById("openingGambit"),
        brand: getBrandById("forge"),
        stars: 3
    },
    {
        id: "treasureHunter",
        name: {
            ja: "トレジャーメット",
            en: "Treasure Hunter"
        },
        type: getGearTypeById("headgear"),
        main: getGearPowerById("inkRecoveryUp"),
        brand: getBrandById("forge"),
        stars: 2
    },
    {
        id: "18kAviators",
        name: {
            ja: "タレサン18K",
            en: "18K Aviators"
        },
        type: getGearTypeById("headgear"),
        main: getGearPowerById("lastDitchEffort"),
        brand: getBrandById("rockenberg"),
        stars: 3
    },
    {
        id: "armorHelmetReplica",
        name: {
            ja: "アーマーメット　レプリカ",
            en: "Armor Helmet Replica"
        },
        type: getGearTypeById("headgear"),
        main: getGearPowerById("tenacity"),
        brand: getBrandById("cuttlegear"),
        stars: 3
    },
    {
        id: "bBallHeadband",
        name: {
            ja: "バスケバンド",
            en: "B-ball Headband"
        },
        type: getGearTypeById("headgear"),
        main: getGearPowerById("openingGambit"),
        brand: getBrandById("zink"),
        stars: 1
    },
    {
        id: "backwardsCap",
        name: {
            ja: "バックワードキャップ",
            en: "Backwards Cap"
        },
        type: getGearTypeById("headgear"),
        main: getGearPowerById("quickRespawn"),
        brand: getBrandById("zekko"),
        stars: 1
    },
    {
        id: "bambooHat",
        name: {
            ja: "スゲ",
            en: "Bamboo Hat"
        },
        type: getGearTypeById("headgear"),
        main: getGearPowerById("inkSaverMain"),
        brand: getBrandById("inkline"),
        stars: 2
    },
    {
        id: "bikeHelmet",
        name: {
            ja: "サイクルメット",
            en: "Bike Helmet"
        },
        type: getGearTypeById("headgear"),
        main: getGearPowerById("inkRecoveryUp"),
        brand: getBrandById("skalop"),
        stars: 3
    },
    {
        id: "blackArrowbands",
        name: {
            ja: "アローバンド ブラック",
            en: "Black Arrowbands"
        },
        type: getGearTypeById("headgear"),
        main: getGearPowerById("tenacity"),
        brand: getBrandById("zekko"),
        stars: 2
    },
    {
        id: "blowfishBellHat",
        name: {
            ja: "フグベルハット",
            en: "Blowfish Bell Hat"
        },
        type: getGearTypeById("headgear"),
        main: getGearPowerById("inkRecoveryUp"),
        brand: getBrandById("firefin"),
        stars: 1
    },
    {
        id: "bobbleHat",
        name: {
            ja: "ボンボンニット",
            en: "Bobble Hat"
        },
        type: getGearTypeById("headgear"),
        main: getGearPowerById("quickSuperJump"),
        brand: getBrandById("splashMob"),
        stars: 2
    },
    {
        id: "camoMesh",
        name: {
            ja: "カモメッシュ",
            en: "Camo Mesh"
        },
        type: getGearTypeById("headgear"),
        main: getGearPowerById("swimSpeedUp"),
        brand: getBrandById("firefin"),
        stars: 2
    },
    {
        id: "campingHat",
        name: {
            ja: "キャンプハット",
            en: "Camping Hat"
        },
        type: getGearTypeById("headgear"),
        main: getGearPowerById("specialDurationUp"),
        brand: getBrandById("inkline"),
        stars: 1
    },
    {
        id: "classicStrawBoater",
        name: {
            ja: "イカンカン クラシック",
            en: "Classic Straw Boater"
        },
        type: getGearTypeById("headgear"),
        main: getGearPowerById("specialDurationUp"),
        brand: getBrandById("skalop"),
        stars: 2
    },
    {
        id: "cycleKingCap",
        name: {
            ja: "チャリキング帽",
            en: "Cycle King Cap"
        },
        type: getGearTypeById("headgear"),
        main: getGearPowerById("defenseUp"),
        brand: getBrandById("tentatek"),
        stars: 2
    },
    {
        id: "cyclingCap",
        name: {
            ja: "テッカサイクルキャップ",
            en: "Cycling Cap"
        },
        type: getGearTypeById("headgear"),
        main: getGearPowerById("bombRangeUp"),
        brand: getBrandById("zink"),
        stars: 1
    },
    {
        id: "designerHeadphones",
        name: {
            ja: "オーロラヘッドホン",
            en: "Designer Headphones"
        },
        type: getGearTypeById("headgear"),
        main: getGearPowerById("inkSaverSub"),
        brand: getBrandById("forge"),
        stars: 2
    },
    {
        id: "fakeContacts",
        name: {
            ja: "ダテコンタクト",
            en: "Fake Contacts"
        },
        type: getGearTypeById("headgear"),
        main: getGearPowerById("specialChargeUp"),
        brand: getBrandById("tentatek"),
        stars: 2
    },
    {
        id: "fishfryVisor",
        name: {
            ja: "ヤキフグ サンバイザー",
            en: "FishFry Visor"
        },
        type: getGearTypeById("headgear"),
        main: getGearPowerById("specialChargeUp"),
        brand: getBrandById("firefin"),
        stars: 1
    },
    {
        id: "fivePanelCap",
        name: {
            ja: "5パネルキャップ",
            en: "Five-Panel Cap"
        },
        type: getGearTypeById("headgear"),
        main: getGearPowerById("comeback"),
        brand: getBrandById("zekko"),
        stars: 2
    },
    {
        id: "fullMoonGlasses",
        name: {
            ja: "マルベッコー",
            en: "Full Moon Glasses"
        },
        type: getGearTypeById("headgear"),
        main: getGearPowerById("quickSuperJump"),
        brand: getBrandById("krakOn"),
        stars: 1
    },
    {
        id: "gasMask",
        name: {
            ja: "タコマスク",
            en: "Gas Mask"
        },
        type: getGearTypeById("headgear"),
        main: getGearPowerById("tenacity"),
        brand: getBrandById("forge"),
        stars: 3
    },
    {
        id: "golfVisor",
        name: {
            ja: "キャディ サンバイザー",
            en: "Golf Visor"
        },
        type: getGearTypeById("headgear"),
        main: getGearPowerById("runSpeedUp"),
        brand: getBrandById("zink"),
        stars: 1
    },
    {
        id: "heroHeadsetReplica",
        name: {
            ja: "ヒーローヘッズ レプリカ",
            en: "Hero Headset Replica"
        },
        type: getGearTypeById("headgear"),
        main: getGearPowerById("runSpeedUp"),
        brand: getBrandById("cuttlegear"),
        stars: 2
    },
    {
        id: "jetCap",
        name: {
            ja: "ジェットキャップ",
            en: "Jet Cap"
        },
        type: getGearTypeById("headgear"),
        main: getGearPowerById("specialSaver"),
        brand: getBrandById("firefin"),
        stars: 1
    },
    {
        id: "joggingHeadband",
        name: {
            ja: "ランニングバンド",
            en: "Jogging Headband"
        },
        type: getGearTypeById("headgear"),
        main: getGearPowerById("inkSaverSub"),
        brand: getBrandById("zekko"),
        stars: 1
    },
    {
        id: "jungleHat",
        name: {
            ja: "サファリハット",
            en: "Jungle Hat"
        },
        type: getGearTypeById("headgear"),
        main: getGearPowerById("inkSaverMain"),
        brand: getBrandById("firefin"),
        stars: 3
    },
    {
        id: "legendaryCap",
        name: {
            ja: "でんせつのぼうし",
            en: "Legendary Cap"
        },
        type: getGearTypeById("headgear"),
        main: getGearPowerById("damageUp"),
        brand: getBrandById("cuttlegear"),
        stars: 3
    },
    {
        id: "lightweightCap",
        name: {
            ja: "キャンプキャップ",
            en: "Lightweight Cap"
        },
        type: getGearTypeById("headgear"),
        main: getGearPowerById("swimSpeedUp"),
        brand: getBrandById("inkline"),
        stars: 1
    },
    {
        id: "noiseCancelers",
        name: {
            ja: "イヤーマフ",
            en: "Noise Cancelers"
        },
        type: getGearTypeById("headgear"),
        main: getGearPowerById("quickRespawn"),
        brand: getBrandById("forge"),
        stars: 2
    },
    {
        id: "octoglasses",
        name: {
            ja: "オクタグラス",
            en: "Octoglasses"
        },
        type: getGearTypeById("headgear"),
        main: getGearPowerById("lastDitchEffort"),
        brand: getBrandById("firefin"),
        stars: 3
    },
    {
        id: "octolingGoggles",
        name: {
            ja: "タコゾネススコープ",
            en: "Octoling Goggles"
        },
        type: getGearTypeById("headgear"),
        main: getGearPowerById("bombRangeUp"),
        brand: getBrandById("cuttlegear"),
        stars: 2
    },
    {
        id: "paintballMask",
        name: {
            ja: "フェイスゴーグル",
            en: "Paintball Mask"
        },
        type: getGearTypeById("headgear"),
        main: getGearPowerById("comeback"),
        brand: getBrandById("forge"),
        stars: 3
    },
    {
        id: "paisleyBandana",
        name: {
            ja: "エイズリーバンダナ",
            en: "Paisley Bandana"
        },
        type: getGearTypeById("headgear"),
        main: getGearPowerById("inkSaverSub"),
        brand: getBrandById("krakOn"),
        stars: 1
    },
    {
        id: "pilotGoggles",
        name: {
            ja: "パイロットゴーグル",
            en: "Pilot Goggles"
        },
        type: getGearTypeById("headgear"),
        main: getGearPowerById("bombRangeUp"),
        brand: getBrandById("forge"),
        stars: 3
    },
    {
        id: "powerMask",
        name: {
            ja: "パワードマスク",
            en: "Power Mask"
        },
        type: getGearTypeById("headgear"),
        main: getGearPowerById("defenseUp"),
        brand: getBrandById("amiibo"),
        stars: 2
    },
    {
        id: "retroSpecs",
        name: {
            ja: "クロブチ レトロ",
            en: "Retro Specs"
        },
        type: getGearTypeById("headgear"),
        main: getGearPowerById("quickRespawn"),
        brand: getBrandById("splashMob"),
        stars: 1
    },
    {
        id: "safariHat",
        name: {
            ja: "ロブスターブーニー",
            en: "Safari Hat"
        },
        type: getGearTypeById("headgear"),
        main: getGearPowerById("lastDitchEffort"),
        brand: getBrandById("forge"),
        stars: 2
    },
    {
        id: "samuraiHelmet",
        name: {
            ja: "サムライヘルメット",
            en: "Samurai Helmet"
        },
        type: getGearTypeById("headgear"),
        main: getGearPowerById("damageUp"),
        brand: getBrandById("amiibo"),
        stars: 2
    },
    {
        id: "shortBeanie",
        name: {
            ja: "ショートビーニー",
            en: "Short Beanie"
        },
        type: getGearTypeById("headgear"),
        main: getGearPowerById("inkSaverMain"),
        brand: getBrandById("inkline"),
        stars: 1
    },
    {
        id: "skateHelmet",
        name: {
            ja: "スケボーメット",
            en: "Skate Helmet"
        },
        type: getGearTypeById("headgear"),
        main: getGearPowerById("specialSaver"),
        brand: getBrandById("skalop"),
        stars: 2
    },
    {
        id: "skullBandana",
        name: {
            ja: "イカスカルマスク",
            en: "Skull Bandana"
        },
        type: getGearTypeById("headgear"),
        main: getGearPowerById("specialSaver"),
        brand: getBrandById("forge"),
        stars: 2
    },
    {
        id: "soccerHeadband",
        name: {
            ja: "サッカーバンド",
            en: "Soccer Headband"
        },
        type: getGearTypeById("headgear"),
        main: getGearPowerById("tenacity"),
        brand: getBrandById("tentatek"),
        stars: 3
    },
    {
        id: "snorkelMask",
        name: {
            ja: "ダイバーゴーグル",
            en: "Snorkel Mask"
        },
        type: getGearTypeById("headgear"),
        main: getGearPowerById("damageUp"),
        brand: getBrandById("forge"),
        stars: 2
    },
    {
        id: "specialForcesBeret",
        name: {
            ja: "モンゴウベレー",
            en: "Special Forces Beret"
        },
        type: getGearTypeById("headgear"),
        main: getGearPowerById("openingGambit"),
        brand: getBrandById("forge"),
        stars: 3
    },
    {
        id: "splashGoggles",
        name: {
            ja: "スプラッシュゴーグル",
            en: "Splash Goggles"
        },
        type: getGearTypeById("headgear"),
        main: getGearPowerById("defenseUp"),
        brand: getBrandById("forge"),
        stars: 2
    },
    {
        id: "sportyBobbleHat",
        name: {
            ja: "ウインターボンボン",
            en: "Sporty Bobble Hat"
        },
        type: getGearTypeById("headgear"),
        main: getGearPowerById("tenacity"),
        brand: getBrandById("skalop"),
        stars: 1
    },
    {
        id: "squashHeadband",
        name: {
            ja: "スカッシュバンド",
            en: "Squash Headband"
        },
        type: getGearTypeById("headgear"),
        main: getGearPowerById("damageUp"),
        brand: getBrandById("zink"),
        stars: 1
    },
    {
        id: "squidGIRLHat",
        name: {
            ja: "イカ娘ずきん",
            en: "SQUID GIRL Hat"
        },
        type: getGearTypeById("headgear"),
        main: getGearPowerById("openingGambit"),
        brand: getBrandById("squidGirl"),
        stars: 2
    },
    {
        id: "squidNordic",
        name: {
            ja: "イカノルディック",
            en: "Squid Nordic"
        },
        type: getGearTypeById("headgear"),
        main: getGearPowerById("comeback"),
        brand: getBrandById("skalop"),
        stars: 3
    },
    {
        id: "squidHairclip",
        name: {
            ja: "イカパッチン",
            en: "Squid Hairclip"
        },
        type: getGearTypeById("headgear"),
        main: getGearPowerById("swimSpeedUp"),
        brand: getBrandById("amiibo"),
        stars: 2
    },
    {
        id: "squidStitchCap",
        name: {
            ja: "チドリキャップ",
            en: "Squid-Stitch Cap"
        },
        type: getGearTypeById("headgear"),
        main: getGearPowerById("openingGambit"),
        brand: getBrandById("skalop"),
        stars: 3
    },
    {
        id: "squidvaderCap",
        name: {
            ja: "イカベーダーキャップ",
            en: "Squidvader Cap"
        },
        type: getGearTypeById("headgear"),
        main: getGearPowerById("specialChargeUp"),
        brand: getBrandById("skalop"),
        stars: 2
    },
    {
        id: "stealthGoggles",
        name: {
            ja: "ナイトビジョン",
            en: "Stealth Goggles"
        },
        type: getGearTypeById("headgear"),
        main: getGearPowerById("swimSpeedUp"),
        brand: getBrandById("forge"),
        stars: 3
    },
    {
        id: "strawBoater",
        name: {
            ja: "イカンカン",
            en: "Straw Boater"
        },
        type: getGearTypeById("headgear"),
        main: getGearPowerById("quickSuperJump"),
        brand: getBrandById("skalop"),
        stars: 1
    },
    {
        id: "streetstyleCap",
        name: {
            ja: "ビバレッジキャップ",
            en: "Streetstyle Cap"
        },
        type: getGearTypeById("headgear"),
        main: getGearPowerById("inkSaverSub"),
        brand: getBrandById("skalop"),
        stars: 1
    },
    {
        id: "stripedBeanie",
        name: {
            ja: "ボーダービーニー",
            en: "Striped Beanie"
        },
        type: getGearTypeById("headgear"),
        main: getGearPowerById("openingGambit"),
        brand: getBrandById("splashMob"),
        stars: 2
    },
    {
        id: "studioHeadphones",
        name: {
            ja: "スタジオヘッドホン",
            en: "Studio Headphones"
        },
        type: getGearTypeById("headgear"),
        main: getGearPowerById("inkSaverMain"),
        brand: getBrandById("forge"),
        stars: 2
    },
    {
        id: "sunVisor",
        name: {
            ja: "サンサンサンバイザー",
            en: "Sun Visor"
        },
        type: getGearTypeById("headgear"),
        main: getGearPowerById("bombRangeUp"),
        brand: getBrandById("tentatek"),
        stars: 2
    },
    {
        id: "takorokaMesh",
        name: {
            ja: "ヤコメッシュ",
            en: "Takoroka Mesh"
        },
        type: getGearTypeById("headgear"),
        main: getGearPowerById("defenseUp"),
        brand: getBrandById("takoroka"),
        stars: 1
    },
    {
        id: "tennisHeadband",
        name: {
            ja: "テニスバンド",
            en: "Tennis Headband"
        },
        type: getGearTypeById("headgear"),
        main: getGearPowerById("comeback"),
        brand: getBrandById("tentatek"),
        stars: 1
    },
    {
        id: "tentaclesHelmet",
        name: {
            ja: "テンタクルズメット",
            en: "Tentacles Helmet"
        },
        type: getGearTypeById("headgear"),
        main: getGearPowerById("runSpeedUp"),
        brand: getBrandById("forge"),
        stars: 3
    },
    {
        id: "tintedShades",
        name: {
            ja: "イロメガネ",
            en: "Tinted Shades"
        },
        type: getGearTypeById("headgear"),
        main: getGearPowerById("lastDitchEffort"),
        brand: getBrandById("zekko"),
        stars: 1
    },
    {
        id: "traditionalHeadband",
        name: {
            ja: "タイショウのはちまき",
            en: "Traditional Headband"
        },
        type: getGearTypeById("headgear"),
        main: getGearPowerById("comeback"),
        brand: getBrandById("famitsu"),
        stars: 2
    },
    {
        id: "treasureHunter",
        name: {
            ja: "トレジャーメット",
            en: "Treasure Hunter"
        },
        type: getGearTypeById("headgear"),
        main: getGearPowerById("inkRecoveryUp"),
        brand: getBrandById("forge"),
        stars: 2
    },
    {
        id: "twoStripeMesh",
        name: {
            ja: "2ラインメッシュ",
            en: "Two-Stripe Mesh"
        },
        type: getGearTypeById("headgear"),
        main: getGearPowerById("specialSaver"),
        brand: getBrandById("krakOn"),
        stars: 1
    },
    {
        id: "urchinsCap",
        name: {
            ja: "ウーニーズBBキャップ",
            en: "Urchins Cap"
        },
        type: getGearTypeById("headgear"),
        main: getGearPowerById("bombRangeUp"),
        brand: getBrandById("skalop"),
        stars: 1
    },
    {
        id: "visorSkateHelmet",
        name: {
            ja: "バイザーメット",
            en: "Visor Skate Helmet"
        },
        type: getGearTypeById("headgear"),
        main: getGearPowerById("lastDitchEffort"),
        brand: getBrandById("skalop"),
        stars: 3
    },
    {
        id: "whiteArrowbands",
        name: {
            ja: "アローバンド ホワイト",
            en: "White Arrowbands"
        },
        type: getGearTypeById("headgear"),
        main: getGearPowerById("specialDurationUp"),
        brand: getBrandById("zekko"),
        stars: 3
    },
    {
        id: "whiteHeadband",
        name: {
            ja: "ヘッドバンド ホワイト",
            en: "White Headband"
        },
        type: getGearTypeById("headgear"),
        main: getGearPowerById("inkRecoveryUp"),
        brand: getBrandById("squidforce"),
        stars: 1
    },
    {
        id: "zekkoMesh",
        name: {
            ja: "エゾッコメッシュ",
            en: "Zekko Mesh"
        },
        type: getGearTypeById("headgear"),
        main: getGearPowerById("quickSuperJump"),
        brand: getBrandById("zekko"),
        stars: 1
    },
    {
        id: "blackPolo",
        name: {
            ja: "ピンポンポロ",
            en: "Black Polo"
        },
        type: getGearTypeById("clothing"),
        main: getGearPowerById("recon"),
        brand: getBrandById("zekko"),
        stars: 1
    },
    {
        id: "blueSailorSuit",
        name: {
            ja: "イカセーラー ブルー",
            en: "Blue Sailor Suit"
        },
        type: getGearTypeById("clothing"),
        main: getGearPowerById("bombRangeUp"),
        brand: getBrandById("forge"),
        stars: 3
    },
    {
        id: "fcAlbacore",
        name: {
            ja: "アオサドーレ",
            en: "FC Albacore"
        },
        type: getGearTypeById("clothing"),
        main: getGearPowerById("damageUp"),
        brand: getBrandById("takoroka"),
        stars: 1
    },
    {
        id: "forestVest",
        name: {
            ja: "フォレストダウン",
            en: "Forest Vest"
        },
        type: getGearTypeById("clothing"),
        main: getGearPowerById("inkRecoveryUp"),
        brand: getBrandById("inkline"),
        stars: 3
    },
    {
        id: "forgeInklingParka",
        name: {
            ja: "F-190",
            en: "Forge Inkling Parka"
        },
        type: getGearTypeById("clothing"),
        main: getGearPowerById("runSpeedUp"),
        brand: getBrandById("forge"),
        stars: 2
    },
    {
        id: "forgeOctarianJacket",
        name: {
            ja: "F-010",
            en: "Forge Octarian Jacket"
        },
        type: getGearTypeById("clothing"),
        main: getGearPowerById("haunt"),
        brand: getBrandById("forge"),
        stars: 2
    },
    {
        id: "herbivoreTee",
        name: {
            ja: "ソウショクT",
            en: "Herbivore Tee"
        },
        type: getGearTypeById("clothing"),
        main: getGearPowerById("ninjaSquid"),
        brand: getBrandById("firefin"),
        stars: 1
    },
    {
        id: "krakOn528",
        name: {
            ja: "クラーゲス528",
            en: "Krak-On 528"
        },
        type: getGearTypeById("clothing"),
        main: getGearPowerById("runSpeedUp"),
        brand: getBrandById("krakOn"),
        stars: 1
    },
    {
        id: "lumberjackShirt",
        name: {
            ja: "オータムネル",
            en: "Lumberjack Shirt"
        },
        type: getGearTypeById("clothing"),
        main: getGearPowerById("inkSaverMain"),
        brand: getBrandById("rockenberg"),
        stars: 1
    },
    {
        id: "pearlTee",
        name: {
            ja: "パールドットT",
            en: "Pearl Tee"
        },
        type: getGearTypeById("clothing"),
        main: getGearPowerById("inkSaverSub"),
        brand: getBrandById("skalop"),
        stars: 1
    },
    {
        id: "purpleCamoLS",
        name: {
            ja: "カモフラパープル",
            en: "Purple Camo LS"
        },
        type: getGearTypeById("clothing"),
        main: getGearPowerById("bombRangeUp"),
        brand: getBrandById("takoroka"),
        stars: 1
    },
    {
        id: "reelSweat",
        name: {
            ja: "リールロールスウェット",
            en: "Reel Sweat"
        },
        type: getGearTypeById("clothing"),
        main: getGearPowerById("specialDurationUp"),
        brand: getBrandById("zekko"),
        stars: 1
    },
    {
        id: "reggaeTee",
        name: {
            ja: "イカジャマイカ",
            en: "Reggae Tee"
        },
        type: getGearTypeById("clothing"),
        main: getGearPowerById("specialSaver"),
        brand: getBrandById("skalop"),
        stars: 3
    },
    {
        id: "rodeoShirt",
        name: {
            ja: "イカスタンシャツ",
            en: "Rodeo Shirt"
        },
        type: getGearTypeById("clothing"),
        main: getGearPowerById("quickSuperJump"),
        brand: getBrandById("krakOn"),
        stars: 1
    },
    {
        id: "slipstreamUnited",
        name: {
            ja: "FCカラスミ",
            en: "Slipstream United"
        },
        type: getGearTypeById("clothing"),
        main: getGearPowerById("defenseUp"),
        brand: getBrandById("takoroka"),
        stars: 2
    },
    {
        id: "squidSatinJacket",
        name: {
            ja: "イカスカジャン",
            en: "Squid Satin Jacket"
        },
        type: getGearTypeById("clothing"),
        main: getGearPowerById("quickRespawn"),
        brand: getBrandById("zekko"),
        stars: 3
    },
    {
        id: "squidstarWaistcoat",
        name: {
            ja: "イカノボリベスト",
            en: "Squidstar Waistcoat"
        },
        type: getGearTypeById("clothing"),
        main: getGearPowerById("coldBlooded"),
        brand: getBrandById("krakOn"),
        stars: 1
    },
    {
        id: "stripedPeaksLS",
        name: {
            ja: "ヤマビコボーダー",
            en: "Striped Peaks LS"
        },
        type: getGearTypeById("clothing"),
        main: getGearPowerById("quickSuperJump"),
        brand: getBrandById("inkline"),
        stars: 1
    },
    {
        id: "whiteLS",
        name: {
            ja: "バトロングホワイト",
            en: "White LS"
        },
        type: getGearTypeById("clothing"),
        main: getGearPowerById("inkRecoveryUp"),
        brand: getBrandById("squidforce"),
        stars: 1
    },
    {
        id: "whiteSailorSuit",
        name: {
            ja: "イカセーラー ホワイト",
            en: "White Sailor Suit"
        },
        type: getGearTypeById("clothing"),
        main: getGearPowerById("inkSaverMain"),
        brand: getBrandById("forge"),
        stars: 2
    },
    {
        id: "zapfishSatinJacket",
        name: {
            ja: "ウラスカジャン",
            en: "Zapfish Satin Jacket"
        },
        type: getGearTypeById("clothing"),
        main: getGearPowerById("specialChargeUp"),
        brand: getBrandById("zekko"),
        stars: 2
    },
    {
        id: "alohaShirt",
        name: {
            ja: "おどるイカアロハ",
            en: "Aloha Shirt"
        },
        type: getGearTypeById("clothing"),
        main: getGearPowerById("inkRecoveryUp"),
        brand: getBrandById("forge"),
        stars: 1
    },
    {
        id: "anchorSweat",
        name: {
            ja: "イカリスウェット",
            en: "Anchor Sweat"
        },
        type: getGearTypeById("clothing"),
        main: getGearPowerById("coldBlooded"),
        brand: getBrandById("squidforce"),
        stars: 2
    },
    {
        id: "armorJacketReplica",
        name: {
            ja: "アーマージャケット レプリカ",
            en: "Armor Jacket Replica"
        },
        type: getGearTypeById("clothing"),
        main: getGearPowerById("specialChargeUp"),
        brand: getBrandById("cuttlegear"),
        stars: 3
    },
    {
        id: "bBallJersey(Away)",
        name: {
            ja: "バスケジャージ アウェイ",
            en: "B-ball Jersey (Away)"
        },
        type: getGearTypeById("clothing"),
        main: getGearPowerById("inkSaverSub"),
        brand: getBrandById("zink"),
        stars: 1
    },
    {
        id: "bBallJersey(Home)",
        name: {
            ja: "バスケジャージ ホーム",
            en: "B-ball Jersey (Home)"
        },
        type: getGearTypeById("clothing"),
        main: getGearPowerById("specialSaver"),
        brand: getBrandById("zink"),
        stars: 2
    },
    {
        id: "babyJellyShirt",
        name: {
            ja: "ベイビークラゲシャツ",
            en: "Baby-Jelly Shirt"
        },
        type: getGearTypeById("clothing"),
        main: getGearPowerById("defenseUp"),
        brand: getBrandById("splashMob"),
        stars: 2
    },
    {
        id: "baseballJersey",
        name: {
            ja: "ミスターベースボール",
            en: "Baseball Jersey"
        },
        type: getGearTypeById("clothing"),
        main: getGearPowerById("specialChargeUp"),
        brand: getBrandById("firefin"),
        stars: 3
    },
    {
        id: "basicTee",
        name: {
            ja: "わかばイカT",
            en: "Basic Tee"
        },
        type: getGearTypeById("clothing"),
        main: getGearPowerById("quickRespawn"),
        brand: getBrandById("squidforce"),
        stars: 1
    },
    {
        id: "berrySkiJacket",
        name: {
            ja: "マウンテンベリー",
            en: "Berry Ski Jacket"
        },
        type: getGearTypeById("clothing"),
        main: getGearPowerById("specialDurationUp"),
        brand: getBrandById("inkline"),
        stars: 2
    },
    {
        id: "black8BitFishFry",
        name: {
            ja: "ヤキフグ8bit ブラック",
            en: "Black 8-Bit FishFry"
        },
        type: getGearTypeById("clothing"),
        main: getGearPowerById("defenseUp"),
        brand: getBrandById("firefin"),
        stars: 1
    },
    {
        id: "blackAnchorTee",
        name: {
            ja: "ガチブラック",
            en: "Black Anchor Tee"
        },
        type: getGearTypeById("clothing"),
        main: getGearPowerById("recon"),
        brand: getBrandById("squidforce"),
        stars: 2
    },
    {
        id: "blackBaseballLS",
        name: {
            ja: "ハラグロラグラン",
            en: "Black Baseball LS"
        },
        type: getGearTypeById("clothing"),
        main: getGearPowerById("swimSpeedUp"),
        brand: getBrandById("rockenberg"),
        stars: 1
    },
    {
        id: "blackInkyRider",
        name: {
            ja: "イカライダーBLACK",
            en: "Black Inky Rider"
        },
        type: getGearTypeById("clothing"),
        main: getGearPowerById("bombRangeUp"),
        brand: getBrandById("rockenberg"),
        stars: 3
    },
    {
        id: "blackLayeredLS",
        name: {
            ja: "レイヤード ブラック",
            en: "Black Layered LS"
        },
        type: getGearTypeById("clothing"),
        main: getGearPowerById("inkSaverMain"),
        brand: getBrandById("squidforce"),
        stars: 1
    },
    {
        id: "blackLS",
        name: {
            ja: "バニーポップ ブラック",
            en: "Black LS"
        },
        type: getGearTypeById("clothing"),
        main: getGearPowerById("quickSuperJump"),
        brand: getBrandById("zekko"),
        stars: 2
    },
    {
        id: "blackPipeTee",
        name: {
            ja: "ドカンT ブラック",
            en: "Black Pipe Tee"
        },
        type: getGearTypeById("clothing"),
        main: getGearPowerById("specialSaver"),
        brand: getBrandById("kog"),
        stars: 1
    },
    {
        id: "blackPolo",
        name: {
            ja: "ピンポンポロ",
            en: "Black Polo"
        },
        type: getGearTypeById("clothing"),
        main: getGearPowerById("recon"),
        brand: getBrandById("zekko"),
        stars: 1
    },
    {
        id: "blackSquideye",
        name: {
            ja: "イカノメT ブラック",
            en: "Black Squideye"
        },
        type: getGearTypeById("clothing"),
        main: getGearPowerById("runSpeedUp"),
        brand: getBrandById("tentatek"),
        stars: 1
    },
    {
        id: "blackTee",
        name: {
            ja: "イカブラック",
            en: "Black Tee"
        },
        type: getGearTypeById("clothing"),
        main: getGearPowerById("specialDurationUp"),
        brand: getBrandById("squidforce"),
        stars: 1
    },
    {
        id: "bluePeaksTee",
        name: {
            ja: "ヤマビコT ブルー",
            en: "Blue Peaks Tee"
        },
        type: getGearTypeById("clothing"),
        main: getGearPowerById("inkSaverSub"),
        brand: getBrandById("inkline"),
        stars: 1
    },
    {
        id: "blueSailorSuit",
        name: {
            ja: "イカセーラー ブルー",
            en: "Blue Sailor Suit"
        },
        type: getGearTypeById("clothing"),
        main: getGearPowerById("bombRangeUp"),
        brand: getBrandById("forge"),
        stars: 3
    },
    {
        id: "camoLayeredLS",
        name: {
            ja: "カモガサネ",
            en: "Camo Layered LS"
        },
        type: getGearTypeById("clothing"),
        main: getGearPowerById("specialChargeUp"),
        brand: getBrandById("squidforce"),
        stars: 1
    },
    {
        id: "camoZipHoodie",
        name: {
            ja: "ジップアップ カモ",
            en: "Camo Zip Hoodie"
        },
        type: getGearTypeById("clothing"),
        main: getGearPowerById("quickRespawn"),
        brand: getBrandById("firefin"),
        stars: 3
    },
    {
        id: "carnivoreTee",
        name: {
            ja: "ニクショクT",
            en: "Carnivore Tee"
        },
        type: getGearTypeById("clothing"),
        main: getGearPowerById("defenseUp"),
        brand: getBrandById("firefin"),
        stars: 1
    },
    {
        id: "chocoLayeredLS",
        name: {
            ja: "チョコガサネ",
            en: "Choco Layered LS"
        },
        type: getGearTypeById("clothing"),
        main: getGearPowerById("inkSaverSub"),
        brand: getBrandById("takoroka"),
        stars: 2
    },
    {
        id: "cycleKingJersey",
        name: {
            ja: "チャリキングジャージ",
            en: "Cycle King Jersey"
        },
        type: getGearTypeById("clothing"),
        main: getGearPowerById("defenseUp"),
        brand: getBrandById("tentatek"),
        stars: 3
    },
    {
        id: "cyclingShirt",
        name: {
            ja: "テッカサイクルシャツ",
            en: "Cycling Shirt"
        },
        type: getGearTypeById("clothing"),
        main: getGearPowerById("coldBlooded"),
        brand: getBrandById("zink"),
        stars: 2
    },
    {
        id: "darkUrbanVest",
        name: {
            ja: "アーバンベスト ナイト",
            en: "Dark Urban Vest"
        },
        type: getGearTypeById("clothing"),
        main: getGearPowerById("coldBlooded"),
        brand: getBrandById("firefin"),
        stars: 3
    },
    {
        id: "fcAlbacore",
        name: {
            ja: "アオサドーレ",
            en: "FC Albacore"
        },
        type: getGearTypeById("clothing"),
        main: getGearPowerById("damageUp"),
        brand: getBrandById("takoroka"),
        stars: 1
    },
    {
        id: "firefinNavySweat",
        name: {
            ja: "ホッコリー ネイビー",
            en: "Firefin Navy Sweat"
        },
        type: getGearTypeById("clothing"),
        main: getGearPowerById("bombRangeUp"),
        brand: getBrandById("firefin"),
        stars: 2
    },
    {
        id: "forestVest",
        name: {
            ja: "フォレストダウン",
            en: "Forest Vest"
        },
        type: getGearTypeById("clothing"),
        main: getGearPowerById("inkRecoveryUp"),
        brand: getBrandById("inkline"),
        stars: 3
    },
    {
        id: "forgeInklingParka",
        name: {
            ja: "F-190",
            en: "Forge Inkling Parka"
        },
        type: getGearTypeById("clothing"),
        main: getGearPowerById("runSpeedUp"),
        brand: getBrandById("forge"),
        stars: 2
    },
    {
        id: "forgeOctarianJacket",
        name: {
            ja: "F-010",
            en: "Forge Octarian Jacket"
        },
        type: getGearTypeById("clothing"),
        main: getGearPowerById("haunt"),
        brand: getBrandById("forge"),
        stars: 2
    },
    {
        id: "fuguTee",
        name: {
            ja: "マルフグT",
            en: "Fugu Tee"
        },
        type: getGearTypeById("clothing"),
        main: getGearPowerById("swimSpeedUp"),
        brand: getBrandById("firefin"),
        stars: 1
    },
    {
        id: "grapeTee",
        name: {
            ja: "グレープT",
            en: "Grape Tee"
        },
        type: getGearTypeById("clothing"),
        main: getGearPowerById("inkRecoveryUp"),
        brand: getBrandById("skalop"),
        stars: 1
    },
    {
        id: "grayCollegeSweat",
        name: {
            ja: "カレッジスウェット グレー",
            en: "Gray College Sweat"
        },
        type: getGearTypeById("clothing"),
        main: getGearPowerById("swimSpeedUp"),
        brand: getBrandById("splashMob"),
        stars: 1
    },
    {
        id: "grayMixedShirt",
        name: {
            ja: "ミックスシャツ グレー",
            en: "Gray Mixed Shirt"
        },
        type: getGearTypeById("clothing"),
        main: getGearPowerById("quickSuperJump"),
        brand: getBrandById("zekko"),
        stars: 2
    },
    {
        id: "grayVectorTee",
        name: {
            ja: "ベクトルパターン グレー",
            en: "Gray Vector Tee"
        },
        type: getGearTypeById("clothing"),
        main: getGearPowerById("quickSuperJump"),
        brand: getBrandById("takoroka"),
        stars: 1
    },
    {
        id: "greenCardigan",
        name: {
            ja: "レタード グリーン",
            en: "Green Cardigan"
        },
        type: getGearTypeById("clothing"),
        main: getGearPowerById("recon"),
        brand: getBrandById("splashMob"),
        stars: 2
    },
    {
        id: "greenStripedLS",
        name: {
            ja: "ボーダーモスグリーン",
            en: "Green Striped LS"
        },
        type: getGearTypeById("clothing"),
        main: getGearPowerById("ninjaSquid"),
        brand: getBrandById("inkline"),
        stars: 1
    },
    {
        id: "greenTee",
        name: {
            ja: "グリーンT",
            en: "Green Tee"
        },
        type: getGearTypeById("clothing"),
        main: getGearPowerById("specialSaver"),
        brand: getBrandById("forge"),
        stars: 2
    },
    {
        id: "greenZipHoodie",
        name: {
            ja: "ジップアップ グリーン",
            en: "Green Zip Hoodie"
        },
        type: getGearTypeById("clothing"),
        main: getGearPowerById("specialDurationUp"),
        brand: getBrandById("firefin"),
        stars: 2
    },
    {
        id: "greenCheckShirt",
        name: {
            ja: "ギンガムチェック ミドリ",
            en: "Green-Check Shirt"
        },
        type: getGearTypeById("clothing"),
        main: getGearPowerById("bombRangeUp"),
        brand: getBrandById("zekko"),
        stars: 2
    },
    {
        id: "herbivoreTee",
        name: {
            ja: "ソウショクT",
            en: "Herbivore Tee"
        },
        type: getGearTypeById("clothing"),
        main: getGearPowerById("ninjaSquid"),
        brand: getBrandById("firefin"),
        stars: 1
    },
    {
        id: "heroJacketReplica",
        name: {
            ja: "ヒーロージャケット レプリカ",
            en: "Hero Jacket Replica"
        },
        type: getGearTypeById("clothing"),
        main: getGearPowerById("swimSpeedUp"),
        brand: getBrandById("cuttlegear"),
        stars: 2
    },
    {
        id: "ivoryPeaksTee",
        name: {
            ja: "ヤマビコT アイボリー",
            en: "Ivory Peaks Tee"
        },
        type: getGearTypeById("clothing"),
        main: getGearPowerById("haunt"),
        brand: getBrandById("inkline"),
        stars: 1
    },
    {
        id: "krakOn528",
        name: {
            ja: "クラーゲス528",
            en: "Krak-On 528"
        },
        type: getGearTypeById("clothing"),
        main: getGearPowerById("runSpeedUp"),
        brand: getBrandById("krakOn"),
        stars: 1
    },
    {
        id: "layeredAnchorLS",
        name: {
            ja: "ガチガサネ",
            en: "Layered Anchor LS"
        },
        type: getGearTypeById("clothing"),
        main: getGearPowerById("runSpeedUp"),
        brand: getBrandById("squidforce"),
        stars: 3
    },
    {
        id: "layeredVectorLS",
        name: {
            ja: "ベクトルラインガサネ",
            en: "Layered Vector LS"
        },
        type: getGearTypeById("clothing"),
        main: getGearPowerById("specialSaver"),
        brand: getBrandById("takoroka"),
        stars: 2
    },
    {
        id: "linenShirt",
        name: {
            ja: "シャンブレーシャツ",
            en: "Linen Shirt"
        },
        type: getGearTypeById("clothing"),
        main: getGearPowerById("bombRangeUp"),
        brand: getBrandById("splashMob"),
        stars: 1
    },
    {
        id: "logoAlohaShirt",
        name: {
            ja: "ロゴマシマシアロハ",
            en: "Logo Aloha Shirt"
        },
        type: getGearTypeById("clothing"),
        main: getGearPowerById("inkRecoveryUp"),
        brand: getBrandById("zekko"),
        stars: 2
    },
    {
        id: "lumberjackShirt",
        name: {
            ja: "オータムネル",
            en: "Lumberjack Shirt"
        },
        type: getGearTypeById("clothing"),
        main: getGearPowerById("inkSaverMain"),
        brand: getBrandById("rockenberg"),
        stars: 1
    },
    {
        id: "mintTee",
        name: {
            ja: "ミントT",
            en: "Mint Tee"
        },
        type: getGearTypeById("clothing"),
        main: getGearPowerById("defenseUp"),
        brand: getBrandById("skalop"),
        stars: 1
    },
    {
        id: "mountainVest",
        name: {
            ja: "マウンテンダウン",
            en: "Mountain Vest"
        },
        type: getGearTypeById("clothing"),
        main: getGearPowerById("swimSpeedUp"),
        brand: getBrandById("inkline"),
        stars: 3
    },
    {
        id: "navyCollegeSweat",
        name: {
            ja: "カレッジスウェット ネイビー",
            en: "Navy College Sweat"
        },
        type: getGearTypeById("clothing"),
        main: getGearPowerById("damageUp"),
        brand: getBrandById("splashMob"),
        stars: 1
    },
    {
        id: "navyStripedLS",
        name: {
            ja: "ボーダーネイビー",
            en: "Navy Striped LS"
        },
        type: getGearTypeById("clothing"),
        main: getGearPowerById("damageUp"),
        brand: getBrandById("splashMob"),
        stars: 2
    },
    {
        id: "octoTee",
        name: {
            ja: "タコT",
            en: "Octo Tee"
        },
        type: getGearTypeById("clothing"),
        main: getGearPowerById("haunt"),
        brand: getBrandById("cuttlegear"),
        stars: 3
    },
    {
        id: "octolingArmor",
        name: {
            ja: "タコゾネスプロテクター",
            en: "Octoling Armor"
        },
        type: getGearTypeById("clothing"),
        main: getGearPowerById("inkSaverSub"),
        brand: getBrandById("cuttlegear"),
        stars: 2
    },
    {
        id: "oliveSkiJacket",
        name: {
            ja: "マウンテンオリーブ",
            en: "Olive Ski Jacket"
        },
        type: getGearTypeById("clothing"),
        main: getGearPowerById("recon"),
        brand: getBrandById("inkline"),
        stars: 3
    },
    {
        id: "orangeCardigan",
        name: {
            ja: "レタードオレンジ",
            en: "Orange Cardigan"
        },
        type: getGearTypeById("clothing"),
        main: getGearPowerById("specialChargeUp"),
        brand: getBrandById("splashMob"),
        stars: 1
    },
    {
        id: "partTimePirate",
        name: {
            ja: "かくれパイレーツ",
            en: "Part-Time Pirate"
        },
        type: getGearTypeById("clothing"),
        main: getGearPowerById("damageUp"),
        brand: getBrandById("tentatek"),
        stars: 1
    },
    {
        id: "pearlTee",
        name: {
            ja: "パールドットT",
            en: "Pearl Tee"
        },
        type: getGearTypeById("clothing"),
        main: getGearPowerById("inkSaverSub"),
        brand: getBrandById("skalop"),
        stars: 1
    },
    {
        id: "pirateStripeTee",
        name: {
            ja: "パイレーツボーダー",
            en: "Pirate-Stripe Tee"
        },
        type: getGearTypeById("clothing"),
        main: getGearPowerById("specialDurationUp"),
        brand: getBrandById("splashMob"),
        stars: 1
    },
    {
        id: "powerArmor",
        name: {
            ja: "パワードスーツ",
            en: "Power Armor"
        },
        type: getGearTypeById("clothing"),
        main: getGearPowerById("quickRespawn"),
        brand: getBrandById("amiibo"),
        stars: 2
    },
    {
        id: "purpleCamoLS",
        name: {
            ja: "カモフラパープル",
            en: "Purple Camo LS"
        },
        type: getGearTypeById("clothing"),
        main: getGearPowerById("bombRangeUp"),
        brand: getBrandById("takoroka"),
        stars: 1
    },
    {
        id: "rainyDayTee",
        name: {
            ja: "レイニーブルーT",
            en: "Rainy-Day Tee"
        },
        type: getGearTypeById("clothing"),
        main: getGearPowerById("inkSaverMain"),
        brand: getBrandById("krakOn"),
        stars: 1
    },
    {
        id: "redVectorTee",
        name: {
            ja: "ベクトルパターン レッド",
            en: "Red Vector Tee"
        },
        type: getGearTypeById("clothing"),
        main: getGearPowerById("inkSaverMain"),
        brand: getBrandById("takoroka"),
        stars: 1
    },
    {
        id: "redCheckShirt",
        name: {
            ja: "ギンガムチェック アカ",
            en: "Red-Check Shirt"
        },
        type: getGearTypeById("clothing"),
        main: getGearPowerById("inkSaverMain"),
        brand: getBrandById("zekko"),
        stars: 2
    },
    {
        id: "reelSweat",
        name: {
            ja: "リールロールスウェット",
            en: "Reel Sweat"
        },
        type: getGearTypeById("clothing"),
        main: getGearPowerById("specialDurationUp"),
        brand: getBrandById("zekko"),
        stars: 1
    },
    {
        id: "reggaeTee",
        name: {
            ja: "イカジャマイカ",
            en: "Reggae Tee"
        },
        type: getGearTypeById("clothing"),
        main: getGearPowerById("specialSaver"),
        brand: getBrandById("skalop"),
        stars: 3
    },
    {
        id: "retroGamerJersey",
        name: {
            ja: "FCジャージー",
            en: "Retro Gamer Jersey"
        },
        type: getGearTypeById("clothing"),
        main: getGearPowerById("quickRespawn"),
        brand: getBrandById("zink"),
        stars: 3
    },
    {
        id: "retroSweat",
        name: {
            ja: "レトロジャッジ",
            en: "Retro Sweat"
        },
        type: getGearTypeById("clothing"),
        main: getGearPowerById("defenseUp"),
        brand: getBrandById("squidforce"),
        stars: 3
    },
    {
        id: "rockenbergBlack",
        name: {
            ja: "ロッケンベルグT ブラック",
            en: "Rockenberg Black"
        },
        type: getGearTypeById("clothing"),
        main: getGearPowerById("damageUp"),
        brand: getBrandById("rockenberg"),
        stars: 1
    },
    {
        id: "rockenbergWhite",
        name: {
            ja: "ロッケンベルグT ホワイト",
            en: "Rockenberg White"
        },
        type: getGearTypeById("clothing"),
        main: getGearPowerById("inkRecoveryUp"),
        brand: getBrandById("rockenberg"),
        stars: 2
    },
    {
        id: "rodeoShirt",
        name: {
            ja: "イカスタンシャツ",
            en: "Rodeo Shirt"
        },
        type: getGearTypeById("clothing"),
        main: getGearPowerById("quickSuperJump"),
        brand: getBrandById("krakOn"),
        stars: 1
    },
    {
        id: "roundCollarShirt",
        name: {
            ja: "マルエリシャツ",
            en: "Round-Collar Shirt"
        },
        type: getGearTypeById("clothing"),
        main: getGearPowerById("inkSaverSub"),
        brand: getBrandById("rockenberg"),
        stars: 1
    },
    {
        id: "sagePolo",
        name: {
            ja: "よもぎポロ",
            en: "Sage Polo"
        },
        type: getGearTypeById("clothing"),
        main: getGearPowerById("coldBlooded"),
        brand: getBrandById("splashMob"),
        stars: 1
    },
    {
        id: "sailorStripeTee",
        name: {
            ja: "マリンボーダー",
            en: "Sailor-Stripe Tee"
        },
        type: getGearTypeById("clothing"),
        main: getGearPowerById("runSpeedUp"),
        brand: getBrandById("splashMob"),
        stars: 1
    },
    {
        id: "samuraiJacket",
        name: {
            ja: "サムライジャケット",
            en: "Samurai Jacket"
        },
        type: getGearTypeById("clothing"),
        main: getGearPowerById("specialChargeUp"),
        brand: getBrandById("amiibo"),
        stars: 2
    },
    {
        id: "schoolJersey",
        name: {
            ja: "スクールジャージー",
            en: "School Jersey"
        },
        type: getGearTypeById("clothing"),
        main: getGearPowerById("ninjaSquid"),
        brand: getBrandById("zink"),
        stars: 2
    },
    {
        id: "schoolUniform",
        name: {
            ja: "スクールブレザー",
            en: "School Uniform"
        },
        type: getGearTypeById("clothing"),
        main: getGearPowerById("inkRecoveryUp"),
        brand: getBrandById("amiibo"),
        stars: 2
    },
    {
        id: "shirt&Tie",
        name: {
            ja: "タイシャツ",
            en: "Shirt & Tie"
        },
        type: getGearTypeById("clothing"),
        main: getGearPowerById("specialSaver"),
        brand: getBrandById("splashMob"),
        stars: 3
    },
    {
        id: "shrimpPinkPolo",
        name: {
            ja: "さくらエビポロ",
            en: "Shrimp-Pink Polo"
        },
        type: getGearTypeById("clothing"),
        main: getGearPowerById("ninjaSquid"),
        brand: getBrandById("splashMob"),
        stars: 1
    },
    {
        id: "skyBlueSquideye",
        name: {
            ja: "イカノメT ライトブルー",
            en: "Sky-Blue Squideye"
        },
        type: getGearTypeById("clothing"),
        main: getGearPowerById("coldBlooded"),
        brand: getBrandById("tentatek"),
        stars: 1
    },
    {
        id: "slipstreamUnited",
        name: {
            ja: "FCカラスミ",
            en: "Slipstream United"
        },
        type: getGearTypeById("clothing"),
        main: getGearPowerById("defenseUp"),
        brand: getBrandById("takoroka"),
        stars: 2
    },
    {
        id: "splatfestTee",
        name: {
            ja: "フェスT",
            en: "Splatfest Tee"
        },
        type: getGearTypeById("clothing"),
        main: getGearPowerById("specialSaver"),
        brand: getBrandById("squidforce"),
        stars: 3
    },
    {
        id: "squidGIRLTunic",
        name: {
            ja: "イカ娘ノースリーブ",
            en: "SQUID GIRL Tunic"
        },
        type: getGearTypeById("clothing"),
        main: getGearPowerById("damageUp"),
        brand: getBrandById("squidGirl"),
        stars: 2
    },
    {
        id: "squidSatinJacket",
        name: {
            ja: "イカスカジャン",
            en: "Squid Satin Jacket"
        },
        type: getGearTypeById("clothing"),
        main: getGearPowerById("quickRespawn"),
        brand: getBrandById("zekko"),
        stars: 3
    },
    {
        id: "squidPatternWaistcoat",
        name: {
            ja: "イカゴッチンベスト",
            en: "Squid-Pattern Waistcoat"
        },
        type: getGearTypeById("clothing"),
        main: getGearPowerById("specialDurationUp"),
        brand: getBrandById("krakOn"),
        stars: 1
    },
    {
        id: "squidStitchTee",
        name: {
            ja: "チドリメロンT",
            en: "Squid-Stitch Tee"
        },
        type: getGearTypeById("clothing"),
        main: getGearPowerById("swimSpeedUp"),
        brand: getBrandById("skalop"),
        stars: 1
    },
    {
        id: "squidmarkLS",
        name: {
            ja: "イカバッテンロング",
            en: "Squidmark LS"
        },
        type: getGearTypeById("clothing"),
        main: getGearPowerById("haunt"),
        brand: getBrandById("squidforce"),
        stars: 1
    },
    {
        id: "squidmarkSweat",
        name: {
            ja: "イカバッテン マスタード",
            en: "Squidmark Sweat"
        },
        type: getGearTypeById("clothing"),
        main: getGearPowerById("bombRangeUp"),
        brand: getBrandById("squidforce"),
        stars: 1
    },
    {
        id: "squidstarWaistcoat",
        name: {
            ja: "イカノボリベスト",
            en: "Squidstar Waistcoat"
        },
        type: getGearTypeById("clothing"),
        main: getGearPowerById("coldBlooded"),
        brand: getBrandById("krakOn"),
        stars: 1
    },
    {
        id: "stripedPeaksLS",
        name: {
            ja: "ヤマビコボーダー",
            en: "Striped Peaks LS"
        },
        type: getGearTypeById("clothing"),
        main: getGearPowerById("quickSuperJump"),
        brand: getBrandById("inkline"),
        stars: 1
    },
    {
        id: "stripedRugby",
        name: {
            ja: "オレンジボーダーラガー",
            en: "Striped Rugby"
        },
        type: getGearTypeById("clothing"),
        main: getGearPowerById("runSpeedUp"),
        brand: getBrandById("takoroka"),
        stars: 2
    },
    {
        id: "stripedShirt",
        name: {
            ja: "ブロックストライプシャツ",
            en: "Striped Shirt"
        },
        type: getGearTypeById("clothing"),
        main: getGearPowerById("quickSuperJump"),
        brand: getBrandById("splashMob"),
        stars: 2
    },
    {
        id: "sunnyDayTee",
        name: {
            ja: "サニーオレンジT",
            en: "Sunny-Day Tee"
        },
        type: getGearTypeById("clothing"),
        main: getGearPowerById("specialChargeUp"),
        brand: getBrandById("krakOn"),
        stars: 1
    },
    {
        id: "traditionalApron",
        name: {
            ja: "タイショウのまえかけ",
            en: "Traditional Apron"
        },
        type: getGearTypeById("clothing"),
        main: getGearPowerById("quickRespawn"),
        brand: getBrandById("famitsu"),
        stars: 2
    },
    {
        id: "tricolorRugby",
        name: {
            ja: "トリコロールラガー",
            en: "Tricolor Rugby"
        },
        type: getGearTypeById("clothing"),
        main: getGearPowerById("quickRespawn"),
        brand: getBrandById("takoroka"),
        stars: 1
    },
    {
        id: "urchinsJersey",
        name: {
            ja: "ウーニーズBBシャツ",
            en: "Urchins Jersey"
        },
        type: getGearTypeById("clothing"),
        main: getGearPowerById("runSpeedUp"),
        brand: getBrandById("zink"),
        stars: 1
    },
    {
        id: "varsityBaseballLS",
        name: {
            ja: "カレッジラグラン",
            en: "Varsity Baseball LS"
        },
        type: getGearTypeById("clothing"),
        main: getGearPowerById("recon"),
        brand: getBrandById("splashMob"),
        stars: 1
    },
    {
        id: "varsityJacket",
        name: {
            ja: "スタジャンロゴマシ",
            en: "Varsity Jacket"
        },
        type: getGearTypeById("clothing"),
        main: getGearPowerById("damageUp"),
        brand: getBrandById("zekko"),
        stars: 3
    },
    {
        id: "vintageCheckShirt",
        name: {
            ja: "ヴィンテージチェック",
            en: "Vintage Check Shirt"
        },
        type: getGearTypeById("clothing"),
        main: getGearPowerById("haunt"),
        brand: getBrandById("rockenberg"),
        stars: 3
    },
    {
        id: "white8BitFishFry",
        name: {
            ja: "ヤキフグ8bit ホワイト",
            en: "White 8-Bit FishFry"
        },
        type: getGearTypeById("clothing"),
        main: getGearPowerById("recon"),
        brand: getBrandById("firefin"),
        stars: 1
    },
    {
        id: "whiteAnchorTee",
        name: {
            ja: "ガチホワイト",
            en: "White Anchor Tee"
        },
        type: getGearTypeById("clothing"),
        main: getGearPowerById("ninjaSquid"),
        brand: getBrandById("squidforce"),
        stars: 3
    },
    {
        id: "whiteBaseballLS",
        name: {
            ja: "ハラシロラグラン",
            en: "White Baseball LS"
        },
        type: getGearTypeById("clothing"),
        main: getGearPowerById("quickSuperJump"),
        brand: getBrandById("rockenberg"),
        stars: 1
    },
    {
        id: "whiteInkyRider",
        name: {
            ja: "イカライダーWHITE",
            en: "White Inky Rider"
        },
        type: getGearTypeById("clothing"),
        main: getGearPowerById("specialDurationUp"),
        brand: getBrandById("rockenberg"),
        stars: 3
    },
    {
        id: "whiteLayeredLS",
        name: {
            ja: "レイヤード ホワイト",
            en: "White Layered LS"
        },
        type: getGearTypeById("clothing"),
        main: getGearPowerById("specialSaver"),
        brand: getBrandById("squidforce"),
        stars: 1
    },
    {
        id: "whiteLineTee",
        name: {
            ja: "ラインT ホワイト",
            en: "White Line Tee"
        },
        type: getGearTypeById("clothing"),
        main: getGearPowerById("swimSpeedUp"),
        brand: getBrandById("kog"),
        stars: 1
    },
    {
        id: "whiteLS",
        name: {
            ja: "バトロングホワイト",
            en: "White LS"
        },
        type: getGearTypeById("clothing"),
        main: getGearPowerById("inkRecoveryUp"),
        brand: getBrandById("squidforce"),
        stars: 1
    },
    {
        id: "whiteSailorSuit",
        name: {
            ja: "イカセーラー ホワイト",
            en: "White Sailor Suit"
        },
        type: getGearTypeById("clothing"),
        main: getGearPowerById("inkSaverMain"),
        brand: getBrandById("forge"),
        stars: 2
    },
    {
        id: "whiteShirt",
        name: {
            ja: "シロシャツ",
            en: "White Shirt"
        },
        type: getGearTypeById("clothing"),
        main: getGearPowerById("inkRecoveryUp"),
        brand: getBrandById("splashMob"),
        stars: 2
    },
    {
        id: "whiteStripedLS",
        name: {
            ja: "ボーダーホワイト",
            en: "White Striped LS"
        },
        type: getGearTypeById("clothing"),
        main: getGearPowerById("quickRespawn"),
        brand: getBrandById("splashMob"),
        stars: 2
    },
    {
        id: "whiteTee",
        name: {
            ja: "イカホワイト",
            en: "White Tee"
        },
        type: getGearTypeById("clothing"),
        main: getGearPowerById("inkSaverSub"),
        brand: getBrandById("squidforce"),
        stars: 1
    },
    {
        id: "yellowLayeredLS",
        name: {
            ja: "マスタードガサネ",
            en: "Yellow Layered LS"
        },
        type: getGearTypeById("clothing"),
        main: getGearPowerById("quickSuperJump"),
        brand: getBrandById("squidforce"),
        stars: 1
    },
    {
        id: "yellowUrbanVest",
        name: {
            ja: "アーバンベスト イエロー",
            en: "Yellow Urban Vest"
        },
        type: getGearTypeById("clothing"),
        main: getGearPowerById("haunt"),
        brand: getBrandById("firefin"),
        stars: 2
    },
    {
        id: "zapfishSatinJacket",
        name: {
            ja: "ウラスカジャン",
            en: "Zapfish Satin Jacket"
        },
        type: getGearTypeById("clothing"),
        main: getGearPowerById("specialChargeUp"),
        brand: getBrandById("zekko"),
        stars: 2
    },
    {
        id: "zekkoBaseballLS",
        name: {
            ja: "エゾッコラグラン",
            en: "Zekko Baseball LS"
        },
        type: getGearTypeById("clothing"),
        main: getGearPowerById("defenseUp"),
        brand: getBrandById("zekko"),
        stars: 1
    },
    {
        id: "zekkoHoodie",
        name: {
            ja: "エゾッコパーカー アズキ",
            en: "Zekko Hoodie"
        },
        type: getGearTypeById("clothing"),
        main: getGearPowerById("ninjaSquid"),
        brand: getBrandById("zekko"),
        stars: 2
    },
    {
        id: "zinkLayeredLS",
        name: {
            ja: "アイロニックレイヤード",
            en: "Zink Layered LS"
        },
        type: getGearTypeById("clothing"),
        main: getGearPowerById("damageUp"),
        brand: getBrandById("zink"),
        stars: 1
    },
    {
        id: "zinkLS",
        name: {
            ja: "アイロニックロング",
            en: "Zink LS"
        },
        type: getGearTypeById("clothing"),
        main: getGearPowerById("specialDurationUp"),
        brand: getBrandById("zink"),
        stars: 1
    },
    {
        id: "blueSeaSlugs",
        name: {
            ja: "ウミウシブルー",
            en: "Blue Sea Slugs"
        },
        type: getGearTypeById("shoes"),
        main: getGearPowerById("specialChargeUp"),
        brand: getBrandById("tentatek"),
        stars: 1
    },
    {
        id: "bubbleRainBoots",
        name: {
            ja: "レイニーシャボン",
            en: "Bubble Rain Boots"
        },
        type: getGearTypeById("shoes"),
        main: getGearPowerById("damageUp"),
        brand: getBrandById("inkline"),
        stars: 1
    },
    {
        id: "icyDownBoots",
        name: {
            ja: "アイスダウンブーツ",
            en: "Icy Down Boots"
        },
        type: getGearTypeById("shoes"),
        main: getGearPowerById("stealthJump"),
        brand: getBrandById("tentatek"),
        stars: 3
    },
    {
        id: "leSoccerCleats",
        name: {
            ja: "レアスパイカ",
            en: "LE Soccer Cleats"
        },
        type: getGearTypeById("shoes"),
        main: getGearPowerById("inkResistanceUp"),
        brand: getBrandById("takoroka"),
        stars: 2
    },
    {
        id: "mawcasins",
        name: {
            ja: "ジョーズモカシン",
            en: "Mawcasins"
        },
        type: getGearTypeById("shoes"),
        main: getGearPowerById("inkRecoveryUp"),
        brand: getBrandById("splashMob"),
        stars: 1
    },
    {
        id: "punkCherries",
        name: {
            ja: "ロッキンチェリー",
            en: "Punk Cherries"
        },
        type: getGearTypeById("shoes"),
        main: getGearPowerById("bombSniffer"),
        brand: getBrandById("rockenberg"),
        stars: 3
    },
    {
        id: "punkYellows",
        name: {
            ja: "ロッキンイエロー",
            en: "Punk Yellows"
        },
        type: getGearTypeById("shoes"),
        main: getGearPowerById("specialSaver"),
        brand: getBrandById("rockenberg"),
        stars: 2
    },
    {
        id: "roastedBrogues",
        name: {
            ja: "イカヤキチップ",
            en: "Roasted Brogues"
        },
        type: getGearTypeById("shoes"),
        main: getGearPowerById("defenseUp"),
        brand: getBrandById("rockenberg"),
        stars: 1
    },
    {
        id: "sharkMoccasins",
        name: {
            ja: "シャークモカシン",
            en: "Shark Moccasins"
        },
        type: getGearTypeById("shoes"),
        main: getGearPowerById("bombRangeUp"),
        brand: getBrandById("splashMob"),
        stars: 1
    },
    {
        id: "snowyDownBoots",
        name: {
            ja: "ミルキーダウンブーツ",
            en: "Snowy Down Boots"
        },
        type: getGearTypeById("shoes"),
        main: getGearPowerById("quickSuperJump"),
        brand: getBrandById("tentatek"),
        stars: 3
    },
    {
        id: "acerolaRainBoots",
        name: {
            ja: "レイニーアセロラ",
            en: "Acerola Rain Boots"
        },
        type: getGearTypeById("shoes"),
        main: getGearPowerById("runSpeedUp"),
        brand: getBrandById("inkline"),
        stars: 1
    },
    {
        id: "armorBootReplicas",
        name: {
            ja: "アーマーブーツ レプリカ",
            en: "Armor Boot Replicas"
        },
        type: getGearTypeById("shoes"),
        main: getGearPowerById("inkSaverMain"),
        brand: getBrandById("cuttlegear"),
        stars: 3
    },
    {
        id: "bananaBasics",
        name: {
            ja: "キャンバス バナナ",
            en: "Banana Basics"
        },
        type: getGearTypeById("shoes"),
        main: getGearPowerById("bombSniffer"),
        brand: getBrandById("krakOn"),
        stars: 1
    },
    {
        id: "blackSeahorses",
        name: {
            ja: "シーホース ブラックレザー",
            en: "Black Seahorses"
        },
        type: getGearTypeById("shoes"),
        main: getGearPowerById("swimSpeedUp"),
        brand: getBrandById("zink"),
        stars: 2
    },
    {
        id: "blackTrainers",
        name: {
            ja: "ブラックビーンズ",
            en: "Black Trainers"
        },
        type: getGearTypeById("shoes"),
        main: getGearPowerById("quickRespawn"),
        brand: getBrandById("tentatek"),
        stars: 1
    },
    {
        id: "blueLoTops",
        name: {
            ja: "グリッチョ ブルー",
            en: "Blue Lo-Tops"
        },
        type: getGearTypeById("shoes"),
        main: getGearPowerById("defenseUp"),
        brand: getBrandById("zekko"),
        stars: 1
    },
    {
        id: "blueMotoBoots",
        name: {
            ja: "モトクロス ソリッドブルー",
            en: "Blue Moto Boots"
        },
        type: getGearTypeById("shoes"),
        main: getGearPowerById("inkResistanceUp"),
        brand: getBrandById("rockenberg"),
        stars: 3
    },
    {
        id: "blueSeaSlugs",
        name: {
            ja: "ウミウシブルー",
            en: "Blue Sea Slugs"
        },
        type: getGearTypeById("shoes"),
        main: getGearPowerById("specialChargeUp"),
        brand: getBrandById("tentatek"),
        stars: 1
    },
    {
        id: "blueSlipOns",
        name: {
            ja: "スリッポン ブルー",
            en: "Blue Slip-Ons"
        },
        type: getGearTypeById("shoes"),
        main: getGearPowerById("bombRangeUp"),
        brand: getBrandById("krakOn"),
        stars: 1
    },
    {
        id: "blueberryCasuals",
        name: {
            ja: "ブルーベリーコンフォート",
            en: "Blueberry Casuals"
        },
        type: getGearTypeById("shoes"),
        main: getGearPowerById("inkSaverSub"),
        brand: getBrandById("krakOn"),
        stars: 1
    },
    {
        id: "bubbleRainBoots",
        name: {
            ja: "レイニーシャボン",
            en: "Bubble Rain Boots"
        },
        type: getGearTypeById("shoes"),
        main: getGearPowerById("damageUp"),
        brand: getBrandById("inkline"),
        stars: 1
    },
    {
        id: "cherryKicks",
        name: {
            ja: "ラバーソール チェリー",
            en: "Cherry Kicks"
        },
        type: getGearTypeById("shoes"),
        main: getGearPowerById("stealthJump"),
        brand: getBrandById("rockenberg"),
        stars: 2
    },
    {
        id: "chocoClogs",
        name: {
            ja: "チョコクロッグ",
            en: "Choco Clogs"
        },
        type: getGearTypeById("shoes"),
        main: getGearPowerById("quickRespawn"),
        brand: getBrandById("krakOn"),
        stars: 2
    },
    {
        id: "clownfishBasics",
        name: {
            ja: "キャンバス クマノミ",
            en: "Clownfish Basics"
        },
        type: getGearTypeById("shoes"),
        main: getGearPowerById("specialChargeUp"),
        brand: getBrandById("krakOn"),
        stars: 1
    },
    {
        id: "crazyArrows",
        name: {
            ja: "クレイジーアローズ",
            en: "Crazy Arrows"
        },
        type: getGearTypeById("shoes"),
        main: getGearPowerById("stealthJump"),
        brand: getBrandById("takoroka"),
        stars: 3
    },
    {
        id: "creamBasics",
        name: {
            ja: "キャンバス ホワイト",
            en: "Cream Basics"
        },
        type: getGearTypeById("shoes"),
        main: getGearPowerById("specialSaver"),
        brand: getBrandById("krakOn"),
        stars: 1
    },
    {
        id: "creamHiTops",
        name: {
            ja: "キャンバスHi マッシュルーム",
            en: "Cream Hi-Tops"
        },
        type: getGearTypeById("shoes"),
        main: getGearPowerById("stealthJump"),
        brand: getBrandById("krakOn"),
        stars: 1
    },
    {
        id: "customTrailBoots",
        name: {
            ja: "トレッキングカスタム",
            en: "Custom Trail Boots"
        },
        type: getGearTypeById("shoes"),
        main: getGearPowerById("specialDurationUp"),
        brand: getBrandById("inkline"),
        stars: 2
    },
    {
        id: "cyanTrainers",
        name: {
            ja: "シアンビーンズ",
            en: "Cyan Trainers"
        },
        type: getGearTypeById("shoes"),
        main: getGearPowerById("damageUp"),
        brand: getBrandById("tentatek"),
        stars: 1
    },
    {
        id: "goldHiHorses",
        name: {
            ja: "シーホースHi ゴールド",
            en: "Gold Hi-Horses"
        },
        type: getGearTypeById("shoes"),
        main: getGearPowerById("runSpeedUp"),
        brand: getBrandById("zink"),
        stars: 2
    },
    {
        id: "greenRainBoots",
        name: {
            ja: "レイニーモスグリーン",
            en: "Green Rain Boots"
        },
        type: getGearTypeById("shoes"),
        main: getGearPowerById("stealthJump"),
        brand: getBrandById("inkline"),
        stars: 2
    },
    {
        id: "heroRunnerReplicas",
        name: {
            ja: "ヒーローキックス レプリカ",
            en: "Hero Runner Replicas"
        },
        type: getGearTypeById("shoes"),
        main: getGearPowerById("quickSuperJump"),
        brand: getBrandById("cuttlegear"),
        stars: 2
    },
    {
        id: "hunterHiTops",
        name: {
            ja: "キャンバスHi モロヘイヤ",
            en: "Hunter Hi-Tops"
        },
        type: getGearTypeById("shoes"),
        main: getGearPowerById("inkRecoveryUp"),
        brand: getBrandById("krakOn"),
        stars: 1
    },
    {
        id: "icyDownBoots",
        name: {
            ja: "アイスダウンブーツ",
            en: "Icy Down Boots"
        },
        type: getGearTypeById("shoes"),
        main: getGearPowerById("stealthJump"),
        brand: getBrandById("tentatek"),
        stars: 3
    },
    {
        id: "leLoTops",
        name: {
            ja: "グリッチョ グリーン 限定版",
            en: "LE Lo-Tops"
        },
        type: getGearTypeById("shoes"),
        main: getGearPowerById("inkSaverSub"),
        brand: getBrandById("zekko"),
        stars: 3
    },
    {
        id: "mawcasins",
        name: {
            ja: "ジョーズモカシン",
            en: "Mawcasins"
        },
        type: getGearTypeById("shoes"),
        main: getGearPowerById("inkRecoveryUp"),
        brand: getBrandById("splashMob"),
        stars: 1
    },
    {
        id: "motoBoots",
        name: {
            ja: "モトクロスブーツ",
            en: "Moto Boots"
        },
        type: getGearTypeById("shoes"),
        main: getGearPowerById("quickRespawn"),
        brand: getBrandById("rockenberg"),
        stars: 2
    },
    {
        id: "neonSeaSlugs",
        name: {
            ja: "ウミウシイエロー",
            en: "Neon Sea Slugs"
        },
        type: getGearTypeById("shoes"),
        main: getGearPowerById("inkResistanceUp"),
        brand: getBrandById("tentatek"),
        stars: 1
    },
    {
        id: "octolingBoots",
        name: {
            ja: "タコゾネスブーツ",
            en: "Octoling Boots"
        },
        type: getGearTypeById("shoes"),
        main: getGearPowerById("specialSaver"),
        brand: getBrandById("cuttlegear"),
        stars: 2
    },
    {
        id: "orangeArrows",
        name: {
            ja: "オレンジアローズ",
            en: "Orange Arrows"
        },
        type: getGearTypeById("shoes"),
        main: getGearPowerById("inkSaverMain"),
        brand: getBrandById("takoroka"),
        stars: 1
    },
    {
        id: "orangeLoTops",
        name: {
            ja: "グリッチョ オレンジ",
            en: "Orange Lo-Tops"
        },
        type: getGearTypeById("shoes"),
        main: getGearPowerById("swimSpeedUp"),
        brand: getBrandById("zekko"),
        stars: 1
    },
    {
        id: "oysterClogs",
        name: {
            ja: "オイスタークロッグ",
            en: "Oyster Clogs"
        },
        type: getGearTypeById("shoes"),
        main: getGearPowerById("runSpeedUp"),
        brand: getBrandById("krakOn"),
        stars: 1
    },
    {
        id: "pinkTrainers",
        name: {
            ja: "ピンクビーンズ",
            en: "Pink Trainers"
        },
        type: getGearTypeById("shoes"),
        main: getGearPowerById("bombRangeUp"),
        brand: getBrandById("tentatek"),
        stars: 1
    },
    {
        id: "plumCasuals",
        name: {
            ja: "アケビコンフォート",
            en: "Plum Casuals"
        },
        type: getGearTypeById("shoes"),
        main: getGearPowerById("damageUp"),
        brand: getBrandById("krakOn"),
        stars: 2
    },
    {
        id: "powerBoots",
        name: {
            ja: "パワードレッグス",
            en: "Power Boots"
        },
        type: getGearTypeById("shoes"),
        main: getGearPowerById("inkSaverMain"),
        brand: getBrandById("amiibo"),
        stars: 2
    },
    {
        id: "proTrailBoots",
        name: {
            ja: "トレッキングプロ",
            en: "Pro Trail Boots"
        },
        type: getGearTypeById("shoes"),
        main: getGearPowerById("bombSniffer"),
        brand: getBrandById("inkline"),
        stars: 3
    },
    {
        id: "punkCherries",
        name: {
            ja: "ロッキンチェリー",
            en: "Punk Cherries"
        },
        type: getGearTypeById("shoes"),
        main: getGearPowerById("bombSniffer"),
        brand: getBrandById("rockenberg"),
        stars: 3
    },
    {
        id: "punkWhites",
        name: {
            ja: "ロッキンホワイト",
            en: "Punk Whites"
        },
        type: getGearTypeById("shoes"),
        main: getGearPowerById("specialChargeUp"),
        brand: getBrandById("rockenberg"),
        stars: 2
    },
    {
        id: "punkYellows",
        name: {
            ja: "ロッキンイエロー",
            en: "Punk Yellows"
        },
        type: getGearTypeById("shoes"),
        main: getGearPowerById("specialSaver"),
        brand: getBrandById("rockenberg"),
        stars: 2
    },
    {
        id: "purpleHiHorses",
        name: {
            ja: "シーホースHi パープル",
            en: "Purple Hi-Horses"
        },
        type: getGearTypeById("shoes"),
        main: getGearPowerById("specialDurationUp"),
        brand: getBrandById("zink"),
        stars: 1
    },
    {
        id: "purpleSeaSlugs",
        name: {
            ja: "ウミウシパープル",
            en: "Purple Sea Slugs"
        },
        type: getGearTypeById("shoes"),
        main: getGearPowerById("runSpeedUp"),
        brand: getBrandById("tentatek"),
        stars: 1
    },
    {
        id: "redHiHorses",
        name: {
            ja: "シーホースHi レッド",
            en: "Red Hi-Horses"
        },
        type: getGearTypeById("shoes"),
        main: getGearPowerById("inkSaverMain"),
        brand: getBrandById("zink"),
        stars: 1
    },
    {
        id: "redHiTops",
        name: {
            ja: "キャンバスHi トマト",
            en: "Red Hi-Tops"
        },
        type: getGearTypeById("shoes"),
        main: getGearPowerById("inkResistanceUp"),
        brand: getBrandById("krakOn"),
        stars: 2
    },
    {
        id: "redSeaSlugs",
        name: {
            ja: "ウミウシレッド",
            en: "Red Sea Slugs"
        },
        type: getGearTypeById("shoes"),
        main: getGearPowerById("specialSaver"),
        brand: getBrandById("tentatek"),
        stars: 3
    },
    {
        id: "redSlipOns",
        name: {
            ja: "スリッポン レッド",
            en: "Red Slip-Ons"
        },
        type: getGearTypeById("shoes"),
        main: getGearPowerById("quickSuperJump"),
        brand: getBrandById("krakOn"),
        stars: 1
    },
    {
        id: "redWorkBoots",
        name: {
            ja: "ヌバックブーツ レッド",
            en: "Red Work Boots"
        },
        type: getGearTypeById("shoes"),
        main: getGearPowerById("quickSuperJump"),
        brand: getBrandById("rockenberg"),
        stars: 3
    },
    {
        id: "roastedBrogues",
        name: {
            ja: "イカヤキチップ",
            en: "Roasted Brogues"
        },
        type: getGearTypeById("shoes"),
        main: getGearPowerById("defenseUp"),
        brand: getBrandById("rockenberg"),
        stars: 1
    },
    {
        id: "samuraiShoes",
        name: {
            ja: "サムライシューズ",
            en: "Samurai Shoes"
        },
        type: getGearTypeById("shoes"),
        main: getGearPowerById("specialDurationUp"),
        brand: getBrandById("amiibo"),
        stars: 2
    },
    {
        id: "schoolShoes",
        name: {
            ja: "スクールローファー",
            en: "School Shoes"
        },
        type: getGearTypeById("shoes"),
        main: getGearPowerById("inkSaverSub"),
        brand: getBrandById("amiibo"),
        stars: 2
    },
    {
        id: "sharkMoccasins",
        name: {
            ja: "シャークモカシン",
            en: "Shark Moccasins"
        },
        type: getGearTypeById("shoes"),
        main: getGearPowerById("bombRangeUp"),
        brand: getBrandById("splashMob"),
        stars: 1
    },
    {
        id: "snowyDownBoots",
        name: {
            ja: "ミルキーダウンブーツ",
            en: "Snowy Down Boots"
        },
        type: getGearTypeById("shoes"),
        main: getGearPowerById("quickSuperJump"),
        brand: getBrandById("tentatek"),
        stars: 3
    },
    {
        id: "soccerCleats",
        name: {
            ja: "ユデスパイカ",
            en: "Soccer Cleats"
        },
        type: getGearTypeById("shoes"),
        main: getGearPowerById("bombSniffer"),
        brand: getBrandById("takoroka"),
        stars: 3
    },
    {
        id: "squidGirlShoes",
        name: {
            ja: "イカ娘シューズ",
            en: "SQUID GIRL Shoes"
        },
        type: getGearTypeById("shoes"),
        main: getGearPowerById("swimSpeedUp"),
        brand: getBrandById("squidGirl"),
        stars: 2
    },
    {
        id: "squidStitchSlipOns",
        name: {
            ja: "スリッポン チドリ",
            en: "Squid-Stitch Slip-Ons"
        },
        type: getGearTypeById("shoes"),
        main: getGearPowerById("defenseUp"),
        brand: getBrandById("krakOn"),
        stars: 2
    },
    {
        id: "squinkWingtips",
        name: {
            ja: "イカスミチップ",
            en: "Squink Wingtips"
        },
        type: getGearTypeById("shoes"),
        main: getGearPowerById("quickRespawn"),
        brand: getBrandById("rockenberg"),
        stars: 1
    },
    {
        id: "strappingReds",
        name: {
            ja: "ベリベリレッド",
            en: "Strapping Reds"
        },
        type: getGearTypeById("shoes"),
        main: getGearPowerById("inkResistanceUp"),
        brand: getBrandById("splashMob"),
        stars: 1
    },
    {
        id: "strappingWhites",
        name: {
            ja: "ベリベリホワイト",
            en: "Strapping Whites"
        },
        type: getGearTypeById("shoes"),
        main: getGearPowerById("inkSaverSub"),
        brand: getBrandById("splashMob"),
        stars: 3
    },
    {
        id: "tanWorkBoots",
        name: {
            ja: "ヌバックブーツ イエロー",
            en: "Tan Work Boots"
        },
        type: getGearTypeById("shoes"),
        main: getGearPowerById("bombRangeUp"),
        brand: getBrandById("rockenberg"),
        stars: 2
    },
    {
        id: "traditionalSandals",
        name: {
            ja: "タイショウのゲタ",
            en: "Traditional Sandals"
        },
        type: getGearTypeById("shoes"),
        main: getGearPowerById("runSpeedUp"),
        brand: getBrandById("famitsu"),
        stars: 2
    },
    {
        id: "trailBoots",
        name: {
            ja: "トレッキングライト",
            en: "Trail Boots"
        },
        type: getGearTypeById("shoes"),
        main: getGearPowerById("inkRecoveryUp"),
        brand: getBrandById("inkline"),
        stars: 2
    },
    {
        id: "turquoiseKicks",
        name: {
            ja: "ラバーソール ターコイズ",
            en: "Turquoise Kicks"
        },
        type: getGearTypeById("shoes"),
        main: getGearPowerById("specialChargeUp"),
        brand: getBrandById("rockenberg"),
        stars: 2
    },
    {
        id: "whiteArrows",
        name: {
            ja: "ホワイトアローズ",
            en: "White Arrows"
        },
        type: getGearTypeById("shoes"),
        main: getGearPowerById("specialDurationUp"),
        brand: getBrandById("takoroka"),
        stars: 2
    },
    {
        id: "whiteKicks",
        name: {
            ja: "ラバーソール ホワイト",
            en: "White Kicks"
        },
        type: getGearTypeById("shoes"),
        main: getGearPowerById("swimSpeedUp"),
        brand: getBrandById("rockenberg"),
        stars: 1
    },
    {
        id: "whiteSeahorses",
        name: {
            ja: "シーホース ホワイト",
            en: "White Seahorses"
        },
        type: getGearTypeById("shoes"),
        main: getGearPowerById("inkRecoveryUp"),
        brand: getBrandById("zink"),
        stars: 1
    },
    {
        id: "yellowSeahorses",
        name: {
            ja: "シーホース イエロー",
            en: "Yellow Seahorses"
        },
        type: getGearTypeById("shoes"),
        main: getGearPowerById("bombSniffer"),
        brand: getBrandById("zink"),
        stars: 2
    },
    {
        id: "zombieHiHorses",
        name: {
            ja: "シーホースHi ゾンビ",
            en: "Zombie Hi-Horses"
        },
        type: getGearTypeById("shoes"),
        main: getGearPowerById("specialChargeUp"),
        brand: getBrandById("zink"),
        stars: 1
    },
];

export default data;

export const headgears = data.filter(d => d.type.id === "headgear");
export const clothing = data.filter(d => d.type.id === "clothing");
export const shoes = data.filter(d => d.type.id === "shoes");

export function getById(id: string): Gear {
    let found = data.filter(v => v.id === id)[0];
    if (!found) {
        throw new Error(`gear: ${id} is not found`);
        return null;
    }
    return found
}
