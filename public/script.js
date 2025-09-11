// DECORATORS && DECORATORS
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
const PropertyLog = (target, propertyKey) => {
    console.log(target);
    console.log(propertyKey);
};
class Car {
    brand;
    color;
    constructor(brand, color) {
        this.brand = brand,
            this.color = color;
    }
    getInfos() {
        return `Marque: ${this.brand} | Color: ${this.color}`;
    }
}
__decorate([
    PropertyLog
], Car.prototype, "brand", void 0);
const citroen = new Car("DS3", "black");
console.log(citroen);
export {};
