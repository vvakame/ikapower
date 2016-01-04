"use strict";

import "reflect-metadata";
// import "zone.js";
// http://stackoverflow.com/questions/34359303/zone-is-not-defined-for-ngzone-angular22-0-0-beta-0
import "zone.js/lib/browser/zone-microtask";
import 'rxjs/Rx';
// import 'angular2/bundles/angular2-polyfills';

import {bootstrap} from 'angular2/platform/browser'
import {Component, Output, EventEmitter} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from "angular2/common";

import IkaPowerService from "../service/ikaPowerService";
import {GearPower} from "./model/model";
import {PowerSpec, Result} from "./model/finder";

import GearPowerSelect from "../component/gearPowerSelect";
import PowerSetting from "../component/powerSetting";
import SearchResult from "../component/searchResult";

export interface GearPowerSetting {
    gearpower: GearPower;
    spec?: PowerSpec;
}

@Component({
    selector: 'ikapower',
    template: `
        <h1>We gotta IkaPower!</h1>

        <gearpower-select (selected)="onGearPowerAdded($event)">
        </gearpower-select>
        
        <power-setting *ngFor="#p of selectedGearPowers" [target]="p">
        </power-setting>
        
        <button (click)="doSearch()">検索</button>

        <search-result *ngFor="#r of searchResultList" [result]="r">
        </search-result>
    `,
    providers: [IkaPowerService],
    directives: [CORE_DIRECTIVES, GearPowerSelect, PowerSetting, SearchResult]
})
class AppComponent {
    selectedGearPowers: GearPowerSetting[] = [];
    searchResultList: Result[] = [];

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

    doSearch() {
        this.searchResultList = this.ikaPowerService.find({
            required: this.selectedGearPowers.map(v => v.spec)
        });
    }
}

bootstrap(AppComponent);
