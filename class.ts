 // LES CLASSES

// class Invoice {
//   client: string;
//   product: string;
//   price: number;

//   constructor (client: string, product: string, price: number) {
//     this.client = client;
//     this.product = product;
//     this.price = price;
//   }

// }

// const invoice1 = new Invoice('Dora', 'TEmplate', 45);
// const invoice2 = new Invoice("Nora","SEO", 200);
// console.log(invoice1,invoice2);


// Héritage

class Mother {

  constructor (public name: string, private color: string, protected eyes: number) {}

  private speak () {
    console.log(`Je m'appelle ${this.name} et j'ai les cheveux ${this.color}`);
  }

  //Getter

  getName () {
    return this.name
  }

  getColor () {
    return this.color
  }

  // Setter

  setColor (newColor: string) {
    this.color = newColor
  }

}

class Children extends Mother {
  getData () {
    /*
      Public: propriété accessible partout et en dehors de la classe
      Private: propriété accessible uniquement à l'intérieur de la classe Mother
      Protected: propriété accessible uniquement dans la class Mère ou la class Enfant
    */
    return this.eyes
  }

};

const person1 = new Mother ("Marie", "Chatain", 2)
const person2 = new Children("Audrey", "Chatain", 2)
person2.getData();
console.log(person2.getData());


class Car {
  // readonly color: string
  // public gears: number = 5

  constructor ( readonly color: string, public gears: number) {}
}

let citroen = new Car ("White", 5);
let newColor = citroen.color = "black"
console.log(citroen);
