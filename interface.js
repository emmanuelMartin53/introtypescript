// INTERFACES
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
var form = document.getElementById("signup");
var firstname = document.getElementById("firstname");
var age = document.querySelector("#age");
var species = document.querySelector("#species");
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.talk = function () {
        return "Je m'appelle ".concat(this.name);
    };
    return Person;
}());
var Alien = /** @class */ (function () {
    function Alien(name, age) {
        this.name = name;
        this.age = age;
    }
    Alien.prototype.telepathy = function () {
        return "Je m'appelle ".concat(this.name, " Je suis un super-heros de ").concat(this.age, " ans");
    };
    return Alien;
}());
form.addEventListener("submit", function (event) {
    event.preventDefault();
    var humanUser;
    var alienUser;
    if (species.value === "human") {
        humanUser = new Person(firstname.value, +age.value);
        console.log(humanUser, humanUser.talk());
    }
    else {
        alienUser = new Alien(firstname.value, +age.value);
        console.log(alienUser, alienUser.telepathy());
    }
});
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
