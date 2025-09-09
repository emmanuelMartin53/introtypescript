"use strict";
var App;
(function (App) {
    class Person {
        name;
        age;
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
    App.Person = Person;
})(App || (App = {}));
// je crée une variable
// const palyndrome = (phrase: string):string => {
//   phrase = phrase.toLowerCase().replace(/\s+/g, "")
//   let reversed = phrase.split("").reverse().join("")
//     return phrase === reversed ? `C'est un palyndrome` : `Ce n'est pas un palyndrome`
// }
// const result = palyndrome("radar");
// console.log(result);
/// <reference path="PersonInterface.ts" />
var App;
(function (App) {
    const person = new App.Person("Emmanuel", 43);
    console.log(person);
})(App || (App = {}));
console.log(App);
