"use strict";
// je crée une variable
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// const palyndrome = (phrase: string):string => {
//   phrase = phrase.toLowerCase().replace(/\s+/g, "")
//   let reversed = phrase.split("").reverse().join("")
//     return phrase === reversed ? `C'est un palyndrome` : `Ce n'est pas un palyndrome`
// }
// const result = palyndrome("radar");
// console.log(result);
// /// <reference path="PersonInterface.ts" />
// namespace App {
//   const person = new Person("Emmanuel", 43);
//   console.log(person);
// }
// console.log(App);
// import { Person } from "./PersonInterface.js";
// const person = new Person("Emmanuel", 43);
// console.log(person);
const Test = (hw) => {
    return function (constructor) {
        console.log(constructor);
        console.log(hw);
    };
};
let Car = class Car {
    name;
    color;
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }
    carDetails() {
        return `Marque: ${this.name} | color: ${this.color}`;
    }
};
Car = __decorate([
    Test("Hello world!")
], Car);
const citroen = new Car("DS3", "black");
console.log(citroen.carDetails());
