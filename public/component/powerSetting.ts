"use strict";

import {Component, Input, Output, EventEmitter} from 'angular2/core';
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
            <button (click)="onRemove()">☓</button>
        </div>
    `,
    directives: [CORE_DIRECTIVES]
})
export default class PowerSetting {
    @Input() target: GearPowerSetting;
    @Output() removed = new EventEmitter<GearPowerSetting>();

    onRemove() {
        this.removed.emit(this.target);
    }
}
