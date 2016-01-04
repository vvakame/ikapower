"use strict";

import {Injectable} from "angular2/core";

import find from "../lib/model/finder";
import brand from "../lib/data/brand";
import gear from "../lib/data/gear";
import gearpower from "../lib/data/gearpower";
import geartype from "../lib/data/geartype";

@Injectable()
export default class IkaPowerService {
    get find() {
        return find;
    }

    get brand() {
        return brand;
    }

    get gear() {
        return gear;
    }

    get gearpower() {
        return gearpower;
    }

    get geartype() {
        return geartype;
    }
}
