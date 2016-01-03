"use strict";

import assert from "power-assert";

import gears from "../../public/lib/data/gear";

import {default as find, gearInitFilter}  from "../../public/lib/model/finder";

describe("finder", () => {
    describe("find", () => {
        it("can find pattern #1", () => {
            let result = find({
                required: [
                    {
                        id: "damageUp",
                        value: 10
                    },
                    {
                        id: "quickSuperJump",
                        value: 3 * 3 * 3 // サブ✕9
                    },
                    {
                        id: "ninjaSquid"
                    },
                    {
                        id: "swimSpeedUp",
                        value: 10
                    },
                ]
            });
            assert(result.length !== 0);

            assert(result[0].headgear.id === "squashHeadband");
            assert(result[0].clothing.id === "schoolJersey");
            assert(result[0].shoes.id === "blackSeahorses");
        });

        it("can find pattern #2", () => {
            let result = find({
                required: [
                    {
                        id: "inkSaverSub",
                        value: 18
                    },
                    {
                        id: "specialChargeUp",
                        value: 18
                    },
                    {
                        id: "runSpeedUp",
                        value: 9
                    },
                    {
                        id: "inkResistanceUp"
                    },
                ]
            });
            const odds = result[0].odds;
            result = result.filter(r => r.odds === odds);

            assert(result.length === 3);
        });
    });

    describe("gearInitFilter", () => {
        it("can filter gear it has required type limited gearpower", () => {
            let filter = gearInitFilter("headgear", {
                required: [
                    {
                        // headgear only
                        id: "comeback"
                    },
                    {
                        // shoes only
                        id: "stealthJump"
                    },
                ]
            });
            let gs = gears.filter(filter);
            assert(gs.length !== 0);
            gs.forEach(gear => {
                assert(gear.type.id === "headgear");
                assert(gear.main.id === "comeback");
            });
        });

        it("can filter gear it has required dup type limited gearpower", () => {
            let filter = gearInitFilter("headgear", {
                required: [
                    {
                        // headgear only
                        id: "comeback"
                    },
                    {
                        // headgear only
                        id: "tenacity"
                    },
                ]
            });
            let gs = gears.filter(filter);
            assert(gs.length === 0);
        });

        it("can filter gear", () => {
            let filter = gearInitFilter("headgear", {
                required: [
                    {
                        id: "inkSaverMain"
                    }
                ]
            });
            let gs = gears.filter(filter);
            assert(gs.length !== 0);
            gs.forEach(gear => {
                assert(gear.type.id === "headgear");
            });
        });
    });
});
