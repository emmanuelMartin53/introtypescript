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
var Invoice = /** @class */ (function () {
    function Invoice(client, product, price) {
        this.client = client;
        this.product = product;
        this.price = price;
    }
    return Invoice;
}());
var invoice1 = new Invoice('Dora', 'Template', 45);
var invoice2 = new Invoice('Nora', 'SEO', 200);
var invoiceArray = [];
invoiceArray.push(invoice1, invoice2);
console.log(invoiceArray);
// Héritage et Polymorphisme
var Mother = /** @class */ (function () {
    function Mother(name, color, eyes) {
        this.name = name;
        this.color = color;
        this.eyes = eyes;
    }
    Mother.prototype.speak = function () {
        console.log("je suis ".concat(this.name, " et j'ai les cheveux ").concat(this.color));
    };
    return Mother;
}());
var person1 = new Mother("marie", "Chatain", 2);
// console.log(person1);
// person1.speak();
var Children = /** @class */ (function (_super) {
    __extends(Children, _super);
    function Children() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Children.prototype.speak = function () {
        console.log("I am ".concat(this.name, " and i have  ").concat(this.color, " hair"));
    };
    Children.prototype.speakMotherLang = function () {
        _super.prototype.speak.call(this);
    };
    return Children;
}(Mother));
var person2 = new Children("Déméter", "Brown", 2);
// console.log(person2);
// person2.speakMotherLang();
var Random = /** @class */ (function () {
    function Random(name, color, eyes) {
        this.name = name;
        this.color = color;
        this.eyes = eyes;
    }
    return Random;
}());
var person3 = new Random("Tom", "Marron", 2);
