"use strict";

// 'angular2/bundles/angular2-polyfills' をscriptタグで参照するか、以下
import "reflect-metadata";
// import "zone.js";
// http://stackoverflow.com/questions/34359303/zone-is-not-defined-for-ngzone-angular22-0-0-beta-0
import "zone.js/lib/browser/zone-microtask";

import 'rxjs/Rx';

import {bootstrap} from 'angular2/platform/browser';

import IkaPowerService from "../service/ikaPowerService";
import IkaPower from "../component/ikaPower";

// TODO webpackにする angular2-seed 的な奴見る
// https://github.com/laco0416/angular2-example/blob/master/script/app.ts

bootstrap(IkaPower, [IkaPowerService]);
