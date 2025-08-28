// LES CLASSES

class Invoice {
  client: string;
  product: string;
  price: number;

  constructor (client: string, product: string, price: number) {
    this.client = client;
    this.product = product;
    this.price = price;
  }

}

const invoice1 = new Invoice('Dora', 'Template', 45);
const invoice2 = new Invoice('Nora', 'SEO', 200);

let invoiceArray: Invoice[] = []
invoiceArray.push(invoice1, invoice2)
console.log(invoiceArray);


// Héritage et Polymorphisme


class Mother {
  name: string;
  color: string;
  eyes: number;

  constructor (name: string, color: string, eyes: number) {
    this.name = name;
    this.color = color;
    this.eyes = eyes;
  }

  speak () {
    console.log(`je suis ${this.name} et j'ai les cheveux ${this.color}`);

  }
}
const person1 = new Mother("marie", "Chatain", 2);
// console.log(person1);
// person1.speak();


class Children extends Mother {
   speak () {
    console.log(`I am ${this.name} and i have  ${this.color} hair`);
  }
  speakMotherLang() {
    super.speak()
  }
}
const person2: Mother = new Children("Déméter", "Brown", 2)
// console.log(person2);
// person2.speakMotherLang();


class Random {
    name: string;
    color: string;
    eyes: number;

    constructor (name: string, color: string, eyes: number) {
      this.name = name;
      this.color = color;
      this.eyes = eyes;
    }
}

const person3: Mother = new Random("Tom", "Marron", 2)
