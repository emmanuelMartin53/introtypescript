// DECORATORS && DECORATORS

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

function readonly (value: boolean) {
  return function(target: any, propertyKey: string, descriptor: PropertyDescriptor)  {
  console.log(target);
  console.log(propertyKey);
  console.log(descriptor);        // writable
  descriptor.writable = value;
  }
}

function logparm(target: any, name: string, position: number) {
    console.log(target);          // prototype
    console.log(name);            // nom de la méthode loginMsg
    console.log(position);        // position du parametre sur lequel agit le décorator 0
}

class Person {

  constructor(public age: number, public eyes: string, private hair: string) {}

  @readonly(false)
  getHairColor() {
    return this.hair;
  }

  loginMsg(@logparm minAge: number, textOne: string, textTwo: string) {
    if (this.age > 17) {
      return textOne;
    }
    return textTwo;

  } 
}

const person = new Person(17,"marron", "chatain")
console.log(person.getHairColor()); // chatain
console.log(person.loginMsg(17, "inscription autorisé", "inscription refusé"));




// DECORATORS SUR LES PARAMETRES
