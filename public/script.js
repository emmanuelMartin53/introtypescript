// DECORATORS && DECORATORS
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// 1 Injecter un élément dans un div
const Test = (template, id) => {
    return function (constructor) {
        const title = document.getElementById(id);
        const h1 = document.createElement("h1");
        h1.innerHTML = template;
        title.appendChild(h1);
    };
};
// @Test("Hello world","title")
// Injecter un constructor
const Component = (id) => {
    return function (target) {
        const title = document.getElementById(id);
        const h1 = document.createElement("h1");
        const objCar = new target("DS3", "black");
        h1.innerText = objCar.carDetails();
        title.appendChild(h1);
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
        return `Marque: ${this.name} | Couleur: ${this.color}`;
    }
};
Car = __decorate([
    Component("title")
], Car);
export {};
//  const citroen = new Car("DS3", "noir");
//  console.log(citroen.carDetails());
// DECORATORS FACTORIES
