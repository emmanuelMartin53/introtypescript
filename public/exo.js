var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const bind = (target, name, descriptor) => {
    // console.log(target);
    // console.log(name);
    const originalMethod = descriptor.value;
    let newDescriptor;
    newDescriptor = {
        get() {
            return originalMethod.bind(this);
        }
    };
    return newDescriptor;
};
class Person {
    userName;
    constructor(userName) {
        this.userName = userName;
    }
    getName() {
        console.log(this.userName); // undefined
        console.log(this); // envoie Person
    }
}
__decorate([
    bind // decorator sur une fonction => fonction créée avec 3 arguments en paramètres
], Person.prototype, "getName", null);
const button = document.querySelector("button");
const john = new Person("John Doe");
// button.addEventListener("click", () => john.getName())               // envoie la classe Person si on return john.getName()
// button.addEventListener("click",john.getName.bind(john))             // renvoie la classe person avec sa propriété + sa valeur avec getName()
button.addEventListener("click", john.getName); // renvoie unefined avec  console.log(this.userName);
export {};
