"use strict";

import {Component, Input} from 'angular2/core';
import {CORE_DIRECTIVES} from "angular2/common";

import {GearPowerSetting} from "../lib/";

@Component({
    selector: 'power-setting',
    template: `
        <div>
            {{target.gearpower.name.ja}}
            <span *ngIf="target.gearpower.stackable">
                <input type="text" [(ngModel)]="target.spec.value">
            </span>
        </div>
    `,
    directives: [CORE_DIRECTIVES]
})
export default class PowerSetting {
    @Input() target: GearPowerSetting;
}
