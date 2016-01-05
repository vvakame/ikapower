"use strict";

import {Component, Input} from 'angular2/core';
import {CORE_DIRECTIVES} from "angular2/common";

import {Result} from "../lib/model/finder";
import SearchResultRow from "./searchResultRow";

@Component({
    selector: 'search-result',
    template: `
        <div>
            {{result.length}}件
            <search-result-row
                *ngFor="#r of result"
                [result]="r">
            </search-result-row>
        </div>
    `,
    directives: [CORE_DIRECTIVES, SearchResultRow]
})
export default class SearchResult {
    @Input() result: Result[] = [];
}
