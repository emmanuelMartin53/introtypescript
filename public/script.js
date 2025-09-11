// DECORATORS && DECORATORS
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// 1 Injecter un élément dans un div
// const Test = (template: string, id: string) => {
//   return function (constructor: Function) {
//     const title = document.getElementById(id)!;
//     const h1 = document.createElement("h1");
//     h1.innerHTML = template;
//     title.appendChild(h1);
//   }
// }
// @Test("Hello world","title")
// 2 Injecter un constructor
// const Component = (id: string) => {
//   console.log("Component");
//   return function (target: any) {
//     console.log("Return function");
//     const title = document.getElementById(id)!;
//     const h1 = document.createElement("h1");
//     const objCar = new target("DS3", "black")
//     h1.innerText = objCar.carDetails()
//     title.appendChild(h1)
//   }
// }
// @Component("title")
// class Car {
//   constructor (private name: string, private color: string) {}
//   carDetails() {
//     return `Marque: ${this.name} | Couleur: ${this.color}`
//   }
// }
//  const citroen = new Car("DS3", "noir");
//  console.log(citroen.carDetails());
// MULTIPLE DECORATORS FACTORIES
// function first() {
//   console.log("first(): factory evaluated"); // en console => 1 (s'affiche en premier)
//   return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
//     console.log("first(): called"); // en console => 4 (s'affiche en dernier)
//   };
// }
// function second() {
//   console.log("second(): factory evaluated"); // en console => 2 (s'affiche en second)
//   return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
//     console.log("second(): called"); // en console => 3 (s'affiche en troisieme)
//   };
// }
// class ExampleClass {
//   @first()
//   @second()
//   method() {}
// }
// CLASS DECORATOR
// const PropertyLog = (target: any, propertyKey: string) => {
// console.log(target);
// console.log(propertyKey);
// }
// class Car {
//   @PropertyLog
//   brand: string;
//   color: string;
//   constructor (brand: string, color: string) {
//     this.brand = brand,
//     this.color = color
//   }
//   getInfos() {
//     return `Marque: ${this.brand} | Color: ${this.color}`
//   }
// }
// const citroen = new Car("DS3", "black")
// console.log(citroen);
// METHOD DECORATORS
// const setterLog = (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
//   console.log(target);            // Prototype de la class
//   console.log(propertyKey);       // setColor
//   console.log(descriptor);        // propriété du descriptor
// }
// const infosLog = (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
//   console.log(target);            // Prototype de la class
//   console.log(propertyKey);       // setColor
//   console.log(descriptor);        // propriété du descriptor
// }
// class Car {
//   brand: string;
//   private color: string;
//   constructor (brand: string, color: string) {
//     this.brand = brand;
//     this.color = color;
//   }
//   //@setterLog
//   setColor(color: string) {
//     this.color = color;
//   }
//   @infosLog
//   infos() {
//     return `Marque ${this.brand} | Couleur ${this.color}`;
//   }
// }
// const peugeot = new Car("3008", "black")
// console.log(peugeot.infos); // infos de Car
// peugeot.infos = function() {
//   return "Hello"
// }
// console.log(peugeot.infos());
const readonly = (value) => {
    return function (target, propertyKey, descriptor) {
        // console.log(descriptor);        // writable
        descriptor.writable = value;
    };
};
const logparam = (target, name, position) => {
    console.log(target); // prototype
    console.log(name); // Nom de la méthode loginMsg
    console.log(position); // position du paramètre sur lequel agit le décorator
};
class Person {
    age;
    eyes;
    hair;
    constructor(age, eyes, hair) {
        this.age = age;
        this.eyes = eyes;
        this.hair = hair;
    }
    getHairColor() {
        return this.hair;
    }
    loginMsg(minAge, textOne, textTwo) {
        if (this.age > 17) {
            return textOne;
        }
        return textTwo;
    }
}
__decorate([
    readonly(true)
], Person.prototype, "getHairColor", null);
__decorate([
    __param(0, logparam)
], Person.prototype, "loginMsg", null);
const person = new Person(30, "marron", "chatain");
console.log(person.getHairColor()); // chatain
person.getHairColor = function () {
    return "Hello";
};
console.log(person); // hello
console.log(person.loginMsg(17, "Inscription autorisé", "Inscription refusée"));
export {};
