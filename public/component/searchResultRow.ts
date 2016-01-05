"use strict";

import {Component, Input} from 'angular2/core';
import {CORE_DIRECTIVES} from "angular2/common";

import {Gear} from "../lib/model/model";
import {Result} from "../lib/model/finder";

@Component({
    selector: 'search-result-row',
    template: `
        <div>
            アタマ：{{result.headgear.name.ja}} {{gearpowerMain(result.headgear)}} ブランド：{{brandStrengthString(result.headgear)}}<br>
            フク　：{{result.clothing.name.ja}} {{gearpowerMain(result.clothing)}} ブランド：{{brandStrengthString(result.clothing)}}<br>
            クツ　：{{result.shoes.name.ja}} {{gearpowerMain(result.shoes)}} ブランド：{{brandStrengthString(result.shoes)}}<br>
            確率　：{{result.odds}}
        </div>
    `,
    directives: [CORE_DIRECTIVES]
})
export default class SearchResultRow {
    @Input() result: Result;

    gearpowerMain(gear: Gear) {
        return `⤴${gear.main.name.ja}`;
    }

    brandStrengthString(gear: Gear) {
        if (!gear.brand.strength) {
            return "ブランド適正無し";
        }
        return `⤴${gear.brand.strength.name.ja}`;
    }
}
