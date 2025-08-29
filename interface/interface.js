// INTERFACES
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// class Mother {
//   name: string;
//   eyes: number;
//   constructor (name: string, eyes: number) {
//       this.name = name;
//       this.eyes = eyes
//   }
//   speak () {
//     console.log(`je m'appelle ${this.name}`);
//   }
// }
// let marie = new Mother ("Marie", 2);
// console.log(marie);
// interface Person {
//   name: string;
//   readonly eyes: number;
//   speak(arg: string): string; // type: string + return string
// }
// let audrey: Person;
// audrey = {
//   name: "Audrey",
//   eyes: 2,
//   speak(param: string): string {
//     return `${param}  ${this.name}`
//   }
// }
// const talkiingPerson  = (param1: Person, param2: string)  => {
//   return param1.speak(param2)
// }
// const result = talkiingPerson(audrey,"je m'appelle")
// console.log(result);
// let cyclope: Person = {
//   name: "Cyclope",
//   eyes: 1,
//   speak(param: string): string {
//     return `${param}  ${this.name}`
//   }
// }
// cyclope.name = "Gorgone"
// console.log(cyclope);
// INTERFACE AVEC CLASSES
// const form = document.getElementById("signup") as HTMLFormElement;
// const firstname = document.getElementById("firstname") as HTMLInputElement;
// const age = document.querySelector("#age") as HTMLInputElement;
// const species = document.querySelector("#species") as HTMLSelectElement;
// interface HumanSounds {
//   talk(): string;
// }
// interface AlienSounds {
//   telepathy(): string;
// }
// class Person implements HumanSounds {
//   constructor (readonly name: string, private age: number) {}
//   talk () {
//     return `Je m'appelle ${this.name}`
//   }
// }
// class Alien {
//    constructor (readonly name: string, private age: number) {}
//    telepathy () {
//      return `Je m'appelle ${this.name} Je suis un super-heros de ${this.age} ans`
//    }
// }
//   newUser:
// form.addEventListener("submit", (event: Event) => {
//   event.preventDefault();
//   let humanUser: HumanSounds;
//   let alienUser: AlienSounds;
//   if (species.value === "human") {
//     humanUser = new Person (firstname.value, age.valueAsNumber);
//     console.log(humanUser, humanUser.talk());
//   } else {
//     alienUser = new Alien(firstname.value, +age.value);
//     console.log(alienUser, alienUser.telepathy())
//   }
// })
//     alienUser = new Alien(firstname.value, +age.value);
//     console.log(alienUser, alienUser.telepathy())
//   }
// })
// const emmanuel = new Person ("Emmanuel", 47)
// console.log(emmanuel.talk());
// const superman = new Alien ("Clark", 33)
// let humans: HumanSounds; // type interface HumanSounds
// humans = emmanuel // OK
// humans = superman // Error
// let humanMember: HumanSounds[];
// humanMember = []
// humanMember.push(emmanuel)
// console.log(humanMember);
// class Person {
//  static age: number = 30;
//   constructor (private name : string) {}
//   walk() {
//     console.log("Je marche");
//   }
//   static talk() {
//     console.log(`Je suis une personne ${this.age}` );
//   }
// }
// const person1 = new Person("Emmanuel");
// // person1.talk()
// Person.talk() // Je suis une personne
// Person.prototype.talk(); // Je suis une personne
// CLASSE ABSTRAITE
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.walk = function () {
        console.log("Je marche");
    };
    return Person;
}());
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Child.prototype.updateName = function (name) {
        this.name = name;
        console.log(this.name);
    };
    return Child;
}(Person));
var aerys = new Child("Aérys");
console.log(aerys);
aerys.updateName("Tifa");
aerys.walk();
