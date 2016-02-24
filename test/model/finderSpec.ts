"use strict";

import * as assert from "power-assert";

import gears from "../../public/lib/data/gear";

import {default as find}  from "../../public/lib/model/finder";

describe("finder", () => {
    describe("find", () => {
        it("can find pattern #1", () => {
            return find({
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
            })
                .then(result => {
                    assert(result.length !== 0);

                    assert(result[0].headgear.id === "squashHeadband");
                    assert(result[0].clothing.id === "schoolJersey");
                    assert(result[0].shoes.id === "blackSeahorses");
                });
        });

        it("can find pattern #2", () => {
            return find({
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
            })
                .then(result => {
                    const odds = result[0].odds;
                    result = result.filter(r => r.odds === odds);

                    assert(result.length === 3);
                });
        });
    });
});
