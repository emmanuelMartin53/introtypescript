// TYPE FUNCTION
var greet = function (name) {
    // methode permettant d'écrire string avec le 1er caractère en majuscule: ex "emmanuel" => "Emmanuel"
    console.log("Hello, " + name.charAt(0).toUpperCase() + name.slice(1).toLowerCase() + "!!");
};
console.log(greet("emmanuel"));
//
var gift2 = function (number) {
    return number + 3;
};
// // const kdo = gift2(10)
// // console.log("le résultat est: ", kdo);
var displayClg = function (param) {
    return param;
};
var age;
age = gift2;
console.log("age 1 ", age(20));
age = displayClg;
console.log("age 2 ", age(20));
var buildName = function (firstName, lastName) {
    if (lastName === void 0) { lastName = "Smith"; }
    if (lastName) {
        return firstName + " " + lastName;
    }
    return firstName;
};
var result1 = buildName("Bob", "Adams");
console.log(result1);
var result2 = buildName("Bob", "Adams", "Salut");
console.log(result2);
var result3 = buildName("Bob", "Adams");
console.log(result3);
var buildName = function (firstName, lastName) {
    if (firstName === void 0) { firstName = "Will"; }
    return firstName + " " + lastName;
};
var result4 = buildName("Bob", "Smith");
console.log(result4);
var result5 = buildName("bob");
console.log(result5);
var result6 = buildName(undefined, "bob");
console.log(result6);
var divColors = document.querySelector("#colors");
var colors = function (arg1) {
    var restOfColors = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfColors[_i - 1] = arguments[_i];
    }
    console.log(restOfColors);
    var h1 = document.createElement("h1");
    h1.innerHTML = "Titre ".concat(arg1);
    divColors.appendChild(h1);
    var ul = document.createElement("ul");
    for (var index in restOfColors) {
        var li = document.createElement("li");
        li.innerHTML = restOfColors[index];
        ul.appendChild(li);
    }
    divColors.appendChild(ul);
};
colors("List 1: ", "green", "blue", "red"); // arg1:list 1, REST ["green", "blue", "red"]
colors("List 2: ", "black", "pink", "orange");
var buildName = function (firstName) {
    var restOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfName[_i - 1] = arguments[_i];
    }
    return firstName + " " + restOfName.join(" ");
};
var buildNameFun = buildName;
console.log(buildNameFun);
function gift3(age, callback) {
    var ageMember = age + 3;
    callback(ageMember);
}
gift3(40, function (num) {
    console.log(num);
});
function commanderPizza(callback) {
    console.log("Pizza en préparation...");
    // Après un moment, la pizza est prête
    callback("Ta pizza est prête 🍕 !");
}
// J'appelle la fonction et je donne un "callback" (une fonction)
commanderPizza(function (msg) {
    console.log("Message reçu :", msg);
});
UNIONS;
TYPE;
var firstName = "Roger";
firstName = true;
var names = [];
names = ["test", 29, true];
var concat = function (arg1, arg2) {
    var result;
    if (typeof arg1 === "number" && typeof arg2 === "number") {
        result = arg1 + arg2;
    }
    else if (typeof arg1 === "string" && typeof arg2 === "string") {
        result = arg1 + arg2;
    }
    else {
        result = arg1.toString() + arg2.toString();
    }
    return result;
};
console.log(concat(20, 40));
console.log(concat("Hello", 40));
console.log(concat("Hello", "World"));
TYPE;
ALIASES;
var data;
var userId;
data = 40;
userId = "40";
var welcome = function (userName) {
    console.log("Bienvenue ".concat(userName));
};
welcome("Emmanuel");
var getProfileData = function (user) {
    console.log("id:".concat(user.id, " username ").concat(user.userName));
};
getProfileData({ id: 2, userName: "Emmanuel" });
// fonction indépendante par rapport à la fonction getProfileData
var invoice = function (productName, user) {
    console.log("\n      Produit: ".concat(productName.name, "\n      Prix: ").concat(productName.price, "\n      Id client: ").concat(user.id, "\n      Nom du client: ").concat(user.userName, "\n    "));
};
var productDetails = {
    name: "Formation typescript",
    price: 99
};
invoice(productDetails, { id: 12345, userName: "Elodie" });
TYPE;
LITERAL;
var let, PI1 = 3.14; // type number
var ;
var PI = 3.14; // 3.14
var API_KEY = 'FRDFDGDGF4254'; // FRDFDGDGF4254
var count = 200; // 200
var booleanValue = false; // false
literal;
Type;
var PI1;
function total(arg1, arg2, totalversion) {
    var result;
    if (totalversion === "getStringValue") {
        result = arg1.toString() + arg2.toString(); // string
    }
    else if (totalversion === "getSquare") {
        var val = arg1 + arg2;
        result = Math.pow(val, 2); // valeur au carré
    }
    else {
        result = arg1 + arg2; // number
    }
    return result;
}
var totalOne = total(20, 10, 'getStringValue');
console.log(totalOne); //2010
var totalTwo = total(20, 10, 'getSquare'); // TS Error
console.log(totalTwo);
TYPE;
NEVER;
function format(value) {
    if (typeof value === "string") {
        return value.length;
    }
    else if (typeof value === "number") {
        return value.toString();
    }
    else {
        var verifyCases = value; // TS error
    }
}
var throwError = function (message) {
    throw new Error(message); // STOP
};
var getTotal = function (arg) {
    if (arg < 5) {
        return throwError("Attention le total < 5!!! ");
    }
    else if (arg === 5) {
        console.log(arg); // Pas de return , TS Never => undefined
    }
    else {
        return arg + 10; // TS getTotal => Number
    }
};
var sayHello = function (message) {
    var index = 0;
    while (index < 5) {
        console.log(message);
        index++;
    }
};
sayHello("Boucle infinie");
