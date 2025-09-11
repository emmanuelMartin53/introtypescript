"use strict";
define("PersonInterface", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Person = void 0;
    class Person {
        name;
        age;
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
    exports.Person = Person;
});
// je crée une variable
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
const Test = (constructor) => {
    console.log(constructor);
};
