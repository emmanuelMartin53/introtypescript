// DECORATORS && DECORATORS

// 1 Injecter un élément dans un div
const Test = (template: string, id: string) => {
  return function (constructor: Function) {
    const title = document.getElementById(id)!;
    const h1 = document.createElement("h1");
    h1.innerHTML = template;
    title.appendChild(h1);
  }
}

// @Test("Hello world","title")

// 2 Injecter un constructor


const Component = (id: string) => {
  console.log("Component");
  return function (target: any) {
    console.log("Return function");
    const title = document.getElementById(id)!;
    const h1 = document.createElement("h1");

    const objCar = new target("DS3", "black")
    h1.innerText = objCar.carDetails()
    title.appendChild(h1)
  }
}

@Component("title")

class Car {
  constructor (private name: string, private color: string) {}
  carDetails() {
    return `Marque: ${this.name} | Couleur: ${this.color}`
  }
}

//  const citroen = new Car("DS3", "noir");
//  console.log(citroen.carDetails());


// MULTIPLE DECORATORS FACTORIES




function first() {
  console.log("first(): factory evaluated"); // en console => 1 (s'affiche en premier)
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log("first(): called"); // en console => 4 (s'affiche en dernier)
  };
}

function second() {
  console.log("second(): factory evaluated"); // en console => 2 (s'affiche en second)
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log("second(): called"); // en console => 3 (s'affiche en troisieme)
  };
}

class ExampleClass {
  @first()
  @second()
  method() {}
}
