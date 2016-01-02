"use strict";

export interface I18nString {
    ja: string;
    en: string;
}

// en: Gear Abillities
export interface GearPower {
    id: string;
    name: I18nString;
    description?: I18nString;
    limitation?: GearType;
    stackable: boolean;
    mainOnly: boolean;
}

export interface Brand {
    id: string;
    name: I18nString;
    strength?: GearPower;
    weakness?: GearPower;
}

export interface GearType {
    id: string; // headgear or clothing or shoes
    name: I18nString;
}

export interface Gear {
    id: string;
    name: I18nString;
    type: GearType;
    main: GearPower;
    brand: Brand;
    stars?: number;
}
