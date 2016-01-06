"use strict";

// 'angular2/bundles/angular2-polyfills' をscriptタグで参照するか、以下
import "reflect-metadata";
// import "zone.js";
// http://stackoverflow.com/questions/34359303/zone-is-not-defined-for-ngzone-angular22-0-0-beta-0
import "zone.js/lib/browser/zone-microtask";

import 'rxjs/Rx';

import {bootstrap} from 'angular2/platform/browser';
import {Component, Output, EventEmitter} from 'angular2/core';

import IkaPowerService from "../service/ikaPowerService";
import {GearPower} from "./model/model";
import {PowerSpec, Result} from "./model/finder";

import GearPowerSelect from "../component/gearPowerSelect";
import PowerSetting from "../component/powerSetting";
import SearchResult from "../component/searchResult";

// TODO webpackにする angular2-seed 的な奴見る
// https://github.com/laco0416/angular2-example/blob/master/script/app.ts

export interface GearPowerSetting {
    gearpower: GearPower;
    spec?: PowerSpec;
}

@Component({
    selector: 'ikapower',
    template: `
        <h1>We gotta IkaPower!</h1>

        <gearpower-select
            (selected)="onGearPowerAdded($event)">
        </gearpower-select>
        
        <power-setting
            *ngFor="#p of selectedGearPowers"
            [target]="p"
            (removed)="onGearPowerRemoved($event)">
        </power-setting>
        
        <button
            (click)="doSearch()">
            検索
        </button>

        <search-result
            *ngIf="searchExecuted"
            [result]="searchResultList">
        </search-result>
    `,
    directives: [GearPowerSelect, PowerSetting, SearchResult]
})
class AppComponent {
    selectedGearPowers: GearPowerSetting[] = [];
    searchResultList: Result[] = [];
    searchExecuted = false;

    constructor(public ikaPowerService: IkaPowerService) {
    }

    onGearPowerAdded(selected: GearPower) {
        let setting: GearPowerSetting = {
            gearpower: selected,
            spec: {
                id: selected.id
            }
        };
        if (selected.stackable) {
            setting.spec.value = 3 * 3;
        }
        this.selectedGearPowers.push(setting);
    }

    onGearPowerRemoved(selected: GearPowerSetting) {
        this.selectedGearPowers = this.selectedGearPowers.filter(p => p !== selected);
    }

    doSearch() {
        this.ikaPowerService
            .find({
                required: this.selectedGearPowers.map(v => v.spec)
            })
            .then(resultList => {
                this.searchResultList = resultList;
                this.searchExecuted = true;
            });
    }
}

bootstrap(AppComponent, [IkaPowerService]);
