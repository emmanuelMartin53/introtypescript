// LES CLASSES
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Mother = /** @class */ (function () {
    function Mother(name, color, eyes) {
        this.name = name;
        this.color = color;
        this.eyes = eyes;
    }
    Mother.prototype.speak = function () {
        console.log("Je m'appelle ".concat(this.name, " et j'ai les cheveux ").concat(this.color));
    };
    //Getter
    Mother.prototype.getName = function () {
        return this.name;
    };
    Mother.prototype.getColor = function () {
        return this.color;
    };
    // Setter
    Mother.prototype.setColor = function (newColor) {
        this.color = newColor;
    };
    return Mother;
}());
var Children = /** @class */ (function (_super) {
    __extends(Children, _super);
    function Children() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Children.prototype.getData = function () {
        /*
          Public: propriété accessible partout et en dehors de la classe
          Private: propriété accessible uniquement à l'intérieur de la classe Mother
          Protected: propriété accessible uniquement dans la class Mère ou la class Enfant
        */
        return this.eyes;
    };
    return Children;
}(Mother));
;
var person1 = new Mother("Marie", "Chatain", 2);
var person2 = new Children("Audrey", "Chatain", 2);
person2.getData();
console.log(person2.getData());
var Car = /** @class */ (function () {
    // readonly color: string
    // public gears: number = 5
    function Car(color, gears) {
        this.color = color;
        this.gears = gears;
    }
    return Car;
}());
var citroen = new Car("White", 5);
var newColor = citroen.color = "black";
console.log(newColor);
