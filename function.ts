// TYPE FUNCTION


const greet = (name: string) => {
  // methode permettant d'écrire string avec le 1er caractère en majuscule: ex "emmanuel" => "Emmanuel"
  console.log("Hello, " + name.charAt(0).toUpperCase() + name.slice(1).toLowerCase() + "!!");
}
console.log(greet("emmanuel"));



//

const gift2 = (number: number) => {
  return number + 3
}


// // const kdo = gift2(10)
// // console.log("le résultat est: ", kdo);

const displayClg = (param: number) => {
  return param

}

let age: (number: number) => number;
age = gift2
console.log("age 1 ",age(20));

age = displayClg;
console.log("age 2 ",age(20));


const buildName = (firstName: string, lastName = "Smith") => {

  if (lastName) {
    return firstName + " " + lastName;
  }
  return firstName

}

let result1 = buildName("Bob", "Adams");
console.log(result1);


let result2 = buildName("Bob", "Adams", "Salut");
console.log(result2);


let result3 = buildName("Bob", "Adams")
console.log(result3);


const buildName = (firstName = "Will", lastName: string) => {
      return firstName + " " + lastName;

}

let result4 = buildName("Bob", "Smith")
console.log(result4);

let result5 = buildName("bob")
console.log(result5);

let result6 = buildName( undefined,"bob")
console.log(result6);

const divColors = document.querySelector("#colors");

let colors = function (arg1: string, ...restOfColors: string[]) {
  console.log(restOfColors);

  const h1 = document.createElement("h1");
  h1.innerHTML = `Titre ${arg1}`
  divColors.appendChild(h1);

  const ul = document.createElement("ul");

  for (let index in restOfColors) {
    let li = document.createElement("li");
    li.innerHTML = restOfColors[index]
    ul.appendChild(li)
  }

  divColors.appendChild(ul)
}


colors("List 1: ", "green", "blue", "red"); // arg1:list 1, REST ["green", "blue", "red"]
colors("List 2: ", "black","pink", "orange");


const buildName = (firstName: string, ...restOfName: string[]) => {
  return firstName + " " + restOfName.join(" ");
}

let buildNameFun: (fname: string, ...rest: string[]) => string = buildName;
console.log(buildNameFun);


function gift3 (age: number, callback: (number: number) => void ) {
  const ageMember = age + 3
  callback(ageMember)
}
gift3(40, (num) => {
  console.log(num);

})


function commanderPizza(callback: (message: string) => void) {
  console.log("Pizza en préparation...");

  // Après un moment, la pizza est prête
  callback("Ta pizza est prête 🍕 !");
}

// J'appelle la fonction et je donne un "callback" (une fonction)
commanderPizza((msg) => {
  console.log("Message reçu :", msg);
});


UNIONS TYPE

let firstName: string | number | boolean = "Roger"
firstName = true;

let names: (string | number)[] = [];
names = ["test", 29, true]

const concat = (arg1: number | string, arg2: number | string) => {
  let result: string | number;
  if (typeof arg1 === "number" && typeof arg2 === "number") {
    result = arg1 + arg2
  } else if (typeof arg1 === "string" && typeof arg2 === "string") {
    result = arg1 + arg2
  } else {
    result = arg1.toString() + arg2.toString()
  }
  return result
}

console.log(concat(20, 40));
console.log(concat("Hello", 40));
console.log(concat("Hello", "World"));

TYPE ALIASES

type NumStr = number | string;

let data: NumStr;
let userId: NumStr;

data = 40
userId = "40"




type NumStr = number | string
type ObjIdUser = {id: number, userName: NumStr};
type ObjNamePrice = {name: string, price: number};

const welcome = (userName: NumStr) => {
  console.log(`Bienvenue ${userName}`)
}
welcome("Emmanuel");



const getProfileData = (user: ObjIdUser) => {
  console.log(`id:${user.id} username ${user.userName}`);

}
getProfileData({id: 2, userName: "Emmanuel"})

// fonction indépendante par rapport à la fonction getProfileData
const invoice = (productName: ObjNamePrice, user: ObjIdUser ) => {
  console.log(`
      Produit: ${productName.name}
      Prix: ${productName.price}
      Id client: ${user.id}
      Nom du client: ${user.userName}
    `);

}
let productDetails = {
  name: "Formation typescript",
  price: 99
}

invoice(productDetails, {id: 12345, userName:"Elodie"});


TYPE LITERAL

let
let PI1 = 3.14 // type number

const
const PI: = 3.14 // 3.14
const API_KEY = 'FRDFDGDGF4254' // FRDFDGDGF4254
const count = 200; // 200
const booleanValue = false; // false


literal Type

let PI1: 3.14;

type GetResultFormat=  "getStringValue" | "getSquare";

function total (arg1: number, arg2: number, totalversion: GetResultFormat) {
  let result;
    if (totalversion === "getStringValue") {
      result = arg1.toString() + arg2.toString(); // string

    } else if (totalversion === "getSquare") {
      const val = arg1 + arg2;
      result = val ** 2 // valeur au carré

    } else {
      result = arg1 + arg2 // number
    }
    return result
}
const totalOne = total(20, 10, 'getStringValue');
console.log(totalOne); //2010


const totalTwo = total(20, 10, 'getSquare') // TS Error
console.log(totalTwo);


TYPE NEVER

type AcceptedValues = string | number | boolean;

function format(value: AcceptedValues) {
  if (typeof value === "string") {
    return value.length;

  } else if (typeof value === "number") {
    return value.toString()

  } else {
    const verifyCases: never = value; // TS error
  }
}

const throwError = (message): never =>  {
  throw new Error(message) // STOP
}

const getTotal = (arg: number) => {
  if (arg < 5) {
    return throwError("Attention le total < 5!!! ")
  } else if (arg === 5) {
    console.log(arg); // Pas de return , TS Never => undefined
  } else {
    return arg + 10;  // TS getTotal => Number
  }
}


const sayHello = (message) => {
  let index = 0
  while (index < 5) {
    console.log(message)
    index++
  }
}
sayHello("Boucle infinie")


TYPE UNDEFINED

let myName;
myName = null;
console.log(myName); // dans la console => null

Undefined VS Null
console.log(undefined === null); // => false
console.log(undefined == null); // => true
console.log(undefined = null); // => null

// typeof

console.log(typeof undefined); // => undefined
console.log(typeof null); // => object

// !

console.log(null); // => null
console.log(!null); // => true! car la valeur existe
console.log(!!null); // => false


// return undefined | null

const myFunction = (arg: string): string|null|undefined => {
  return arg
}

const result = myFunction("Hello");

if (result != null) {
  console.log(typeof result);
}

console.log(null + 200); // 200

const element = document .querySelector("elementFictif");
console.log(element); // Null

console.log(undefined + 200); // NaN (Not A Number)

const users: any = {}
console.log(users.age); // => object vide

let value: number; // TS number
console.log(value); // undefined

let value1: undefined; // undefined
console.log(value1);

let value2: null = null; // null
console.log(value2);

let value3: unknown | any;
value3 = null;
value3 = undefined;
