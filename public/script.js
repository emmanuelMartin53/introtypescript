// je crée une variable
// const palyndrome = (phrase: string):string => {
//   phrase = phrase.toLowerCase().replace(/\s+/g, "")
//   let reversed = phrase.split("").reverse().join("")
//     return phrase === reversed ? `C'est un palyndrome` : `Ce n'est pas un palyndrome`
// }
// const result = palyndrome("radar");
// console.log(result);
<<<<<<< HEAD
var App;
(function (App) {
    const person = new Person("Emmanuel", 43);
    console.log(person);
})(App || (App = {}));
export {};
=======
import { Person } from "./PersonInterface.js";
const person = new Person("Emmanuel", 43);
console.log(person);
>>>>>>> 5a29cd0f960e85544e3c1138a093bdf69a5a4c55
