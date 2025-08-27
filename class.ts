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

const invoice1 = new Invoice('Dora', 'TEmplate', 45);
const invoice2 : Invoice = {client:"Nora", product: "SEO", price: 200};
console.log(invoice2);
