"use strict";

import "reflect-metadata";
// import "zone.js";
// http://stackoverflow.com/questions/34359303/zone-is-not-defined-for-ngzone-angular22-0-0-beta-0
import "zone.js/lib/browser/zone-microtask";

import {bootstrap} from 'angular2/platform/browser'
import {Component} from 'angular2/core';

@Component({
    selector: 'ikapower',
    template: '<h1>My First Angular 2 App</h1>'
})
class AppComponent {
    constructor() {
    }
}

bootstrap(AppComponent);
