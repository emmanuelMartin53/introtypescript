
// je crée une variable

// const palyndrome = (phrase: string):string => {
//   phrase = phrase.toLowerCase().replace(/\s+/g, "")
//   let reversed = phrase.split("").reverse().join("")
//     return phrase === reversed ? `C'est un palyndrome` : `Ce n'est pas un palyndrome`
// }

// const result = palyndrome("radar");
// console.log(result);


/// <reference path="PersonInterface.ts" />
namespace App {
  const person = new Person("Emmanuel", 43);
  console.log(person);
}

console.log(App);
