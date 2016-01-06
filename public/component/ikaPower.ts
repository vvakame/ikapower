"use strict";

import {Component} from "angular2/core";

import IkaPowerService from "../service/ikaPowerService";
import {GearPower} from "../lib/model/model";
import {PowerSpec, Result} from "../lib/model/finder";

import GearPowerSelect from "./gearPowerSelect";
import PowerSetting from "./powerSetting";
import SearchResult from "./searchResult";

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
export default class IkaPower {
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
