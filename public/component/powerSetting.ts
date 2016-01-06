"use strict";

import {Component, Input, Output, EventEmitter} from 'angular2/core';

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
    `
})
export default class PowerSetting {
    @Input() target: GearPowerSetting;
    @Output() removed = new EventEmitter<GearPowerSetting>();

    onRemove() {
        this.removed.emit(this.target);
    }
}
