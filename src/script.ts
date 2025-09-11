
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


const Test = (hw: string) => {
  return function(constructor: Function) {
    console.log(constructor);
    console.log(hw);
  }
}

@Test("Hello world!")


class Car {

  constructor(private name: string, private color: string) {}

  carDetails() {
    return `Marque: ${this.name} | color: ${this.color}`
  }

}

const citroen = new Car("DS3", "black")
console.log(citroen.carDetails());
