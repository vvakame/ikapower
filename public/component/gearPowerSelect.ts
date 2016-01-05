"use strict";

import {Component, Output, EventEmitter} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from "angular2/common";

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
                <option
                    *ngFor="#p of gearpowers"
                    [value]="p.id">
                    {{p.name.ja}}
                </option>
            </select>
        </div>
    `,
    providers: [IkaPowerService],
    directives: [CORE_DIRECTIVES]
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
