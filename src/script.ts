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

// Injecter un constructor


const Component = (id: string) => {
  return function (target: any) {
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


// DECORATORS FACTORIES
