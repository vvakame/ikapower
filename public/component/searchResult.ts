"use strict";

import {Component, Input, OnChanges, SimpleChange} from 'angular2/core';

import {Result} from "../lib/model/finder";
import SearchResultRow from "./searchResultRow";

@Component({
    selector: 'search-result',
    template: `
        <div>
            {{resultLength}}件
            <search-result-row
                *ngFor="#r of result"
                [result]="r">
            </search-result-row>
        </div>
    `,
    directives: [SearchResultRow]
})
export default class SearchResult implements OnChanges {
    @Input("result") _result: Result[] = [];
    result: Result[] = [];

    resultLength: number;

    ngOnChanges(changes: { [key: string]: SimpleChange; }) {
        let change = changes["result"] || changes["_result"]; // https://github.com/angular/angular/issues/6289
        if (change) {
            let newValue = change.currentValue as Result[];
            this.resultLength = newValue.length;
            this.result = newValue.slice(0, 30);
        }
    }
}
