"use strict";

import {GearType} from "../model/model";

const data: GearType[] = [
    {
        id: "headgear",
        name: {
            ja: "アタマ",
            en: "Headgear"
        }
    },
    {
        id: "clothing",
        name: {
            ja: "フク",
            en: "Clothing"
        }
    },
    {
        id: "shoes",
        name: {
            ja: "クツ",
            en: "Shoes"
        }
    }
];

export default data;

export function getById(id: string): GearType {
    let found = data.filter(v => v.id === id)[0];
    if (!found) {
        throw new Error(`gear type: ${id} is not found`);
    }
    return found
}
