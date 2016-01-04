"use strict";

import {Component, Input} from 'angular2/core';
import {CORE_DIRECTIVES} from "angular2/common";

import {Result} from "../lib/model/finder";

@Component({
    selector: 'search-result',
    template: `
        <div>
            アタマ：{{result.headgear.name.ja}}<br>
            フク　：{{result.clothing.name.ja}}<br>
            クツ　：{{result.shoes.name.ja}}<br>
            確率　：{{result.odds}}
        </div>
    `,
    directives: [CORE_DIRECTIVES]
})
export default class SearchResult {
    @Input() result: Result;
}
