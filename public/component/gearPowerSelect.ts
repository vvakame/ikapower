"use strict";

import {Component, Output, EventEmitter} from 'angular2/core';

import IkaPowerService from "../service/ikaPowerService";
import {GearPower} from "../lib/model/model";

@Component({
    selector: 'gearpower-select',
    template: `
        <div>
            <select 
                class="form-control"
                #gearpower
                (change)="onSelected(gearpower.value)">
                <option value="">（未選択）</option>
                <option
                    *ngFor="#p of gearpowers"
                    [value]="p.id">
                    {{p.name.ja}}
                </option>
            </select>
        </div>
    `,
    providers: [IkaPowerService]
})
export default class GearPowerSelect {
    gearpowers: GearPower[] = [];

    @Output() selected = new EventEmitter<GearPower>();

    constructor(public ikaPowerService: IkaPowerService) {
        this.gearpowers = this.ikaPowerService.gearpower;
    }

    onSelected(gearpowerId: string) {
        let gearpower = this.gearpowers.filter(p => p.id === gearpowerId)[0];
        this.selected.emit(gearpower);
    }
}
