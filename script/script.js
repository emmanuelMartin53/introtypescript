// RÉCUPERATION DES ÉLÉMENTS HTML
var form = document.getElementById("form");
var firstName = document.getElementById("firstName");
var age = document.getElementById("age");
var gift = function (age) {
    age = age + 3;
    return age;
};
// // let
if (form) {
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        if (+age.value < 18) {
            console.log("tu n'est pas majeur, tu ne peux pas voter!");
        }
        else {
            console.log("Bonjour ".concat(firstName.value, " tu peux voter car tu as ").concat(age.value, " ans, tu aura droit \u00E0 un cadeau quand tu auras ").concat(gift(+age.value), " ans"));
        }
    });
}
// // // Création de variables et types
var heros = 'superman';
var pseudo = heros;
console.log(pseudo);
var total = 200;
var isLoading = true;
// //  intellisense vs code
console.log(pseudo.length);
console.log(typeof total);
var totalString = total.toString();
console.log('Total est de type: ', typeof totalString);
var welcomeMsg = "\n  Bienvenue ".concat(pseudo, ",\n  tu as ").concat(total, " points\n");
console.log(welcomeMsg);
// // Array
// let colors: Array<string> = ["red", "blue", "green", "orange"]
var numbers = [1, 2, 3, 7.5];
numbers.push(9);
console.log(numbers);
var values;
values = [
    'bonjour',
    true,
    500,
    {
        id: 123445,
        true: true,
        hobbies: ['Voyage Japon', 'jeux video']
    }
];
//  // je vais chercher
//  console.log(values[3].hobbies[0]);
//  // push
// let stringNumberArray = ['red', 9, false];
// stringNumberArray.push('salut')
// console.log(stringNumberArray);
var stringNumberArray = ['red', 9, false];
stringNumberArray.push('salut');
console.log(stringNumberArray);
// TUPLE
var x;
x = ["Hello", 30];
x = ["Hello", 30, "Bonjour"];
x.push("Bonjour");
console.log(x);
x[0].substring(1);
console.log(x[1].toString);
console.log(typeof x[1]);
var member = {
    level: ["admin", 1]
};
console.log(member);
member.level[0] = "admin2";
console.log(member);
member.level.push('prof');
console.log(member.level);
// // OBJECTS
var car = {
    color: "red",
    date: 2020,
    speed: 500
};
console.log(car.color);
// // EXERCICES
// // 1
//  let names: string;
// // 2
// let speed: number = 25;
//  // 3
// let isLoading: boolean;
// // 4
// let age: string|number;
//  // 5
// let colors: string[] = [];
// colors.push("red");
// console.log(colors);
// // 6
var infos = [];
infos.push("dupont");
infos.push(true);
infos.push(40);
console.log(infos);
// // 7
var member = {
    firstName: "Dupont",
    age: 40,
    isLogged: true
};
console.log(member.age);
// // 8
var member = {
    firstName: "Dupont",
    age: 20,
    isLogged: true
};
console.log(member.age);
// 9
var member = {
    firstName: "Dupont",
    age: 20,
    isLogged: true
};
console.log('data 1', typeof member);
member = [];
console.log('data 2', typeof member);
// 9
// let member: object = {
//   firstName: "Dupont",
//   age: 20,
//   isLogged: true
// }
// console.log('data 1', typeof member);
// member = [];
// console.log('data 2', typeof member);
// 10
// let infos: [string, number];
// infos = ["hello", 0];
// infos[1] = 200;
// console.log(infos[1]);
// infos.push("bonjour")
// console.log(infos);
// const surname: string = "Emmanuel";
// console.log(surname);
// TYPE ENUM
/*
ADMIN = 0
MODERATOR = 1
SUPPORT = 2
USER_READ_ONLY = 3
 */
var Level;
(function (Level) {
    Level[Level["ADMIN"] = 0] = "ADMIN";
    Level[Level["MODERATOR"] = 1] = "MODERATOR";
    Level[Level["SUPPORT"] = 2] = "SUPPORT";
    Level[Level["USER_READ_ONLY"] = 3] = "USER_READ_ONLY";
})(Level || (Level = {}));
var users = {
    pseudo: "Batman",
    level: Level.SUPPORT
};
if (users.level === Level.SUPPORT) {
    console.log("Bienvenue ".concat(users.pseudo, ", vous travaillez au service support ").concat(Level.SUPPORT));
}
var Color;
(function (Color) {
    Color[Color["red"] = 1] = "red";
    Color[Color["green"] = 2] = "green";
    Color[Color["blue"] = 6] = "blue";
})(Color || (Color = {}));
var colorName = Color[2];
console.log(colorName);
colorName = Color[6];
console.log(colorName);
// // TYPE ANY
var anyData = "salut";
console.log(anyData);
var anyData = 2;
console.log(anyData);
var anyData = true;
console.log(anyData);
var anyData = [];
console.log(typeof anyData);
var anyData = {
    color: ["blue", "red"]
};
console.log(typeof anyData);
var anyDataArray = [];
anyDataArray = ["hello", 25, true, ['red', 'blue'], { name: "doe" }];
console.log(anyDataArray);
anyDataArray.push("salut");
console.log(anyDataArray);
var userInfos = {
    name: "Hackerman",
    pseudo: 123445
};
console.log("userInfos 1", userInfos);
userInfos.pseudo = "123445fglmhi";
console.log("userInfos 2", userInfos);
// // TYPE UNKNOWN
var inputData;
inputData = 20;
console.log(typeof inputData);
var inputAge;
if (typeof inputData === 'number') {
    inputAge = inputData;
    console.log(typeof inputAge);
}
// console.log(anyDataArray);
// // TYPE VOID
var gift = function (age) {
    return age + 3;
};
var logData = function (param) {
    console.log("R\u00E9sultat ".concat(param));
};
console.log(logData(gift(20)));
//  // TYPE FUNCTION
// const greet = (name: string) => {
// methode permettant d'écrire string avec le 1er caractère en majuscule: ex "emmanuel" => "Emmanuel"
//   console.log("Hello, " + name.charAt(0).toUpperCase() + name.slice(1).toLowerCase() + "!!");
// }
// console.log(greet("emmanuel"));
// //
// const gift2 = (number: number) => {
//   return number + 3
// }
// // // const kdo = gift2(10)
// // // console.log("le résultat est: ", kdo);
// const displayClg = (param: number) => {
//   return param
// }
// let age: (number: number) => number;
// age = gift2
// console.log("age 1 ",age(20));
// age = displayClg;
// console.log("age 2 ",age(20));
// const buildName = (firstName: string, lastName = "Smith") => {
//   if (lastName) {
//     return firstName + " " + lastName;
//   }
//   return firstName
// }
// let result1 = buildName("Bob", "Adams");
// console.log(result1);
// let result2 = buildName("Bob", "Adams", "Salut");
// console.log(result2);
// let result3 = buildName("Bob", "Adams")
// console.log(result3);
// const buildName = (firstName = "Will", lastName: string) => {
//       return firstName + " " + lastName;
// }
// let result4 = buildName("Bob", "Smith")
// console.log(result4);
// let result5 = buildName("bob")
// console.log(result5);
// let result6 = buildName( undefined,"bob")
// console.log(result6);
// const divColors = document.querySelector("#colors");
// let colors = function (arg1: string, ...restOfColors: string[]) {
//   console.log(restOfColors);
//   const h1 = document.createElement("h1");
//   h1.innerHTML = `Titre ${arg1}`
//   divColors.appendChild(h1);
//   const ul = document.createElement("ul");
//   for (let index in restOfColors) {
//     let li = document.createElement("li");
//     li.innerHTML = restOfColors[index]
//     ul.appendChild(li)
//   }
//   divColors.appendChild(ul)
// }
// colors("List 1: ", "green", "blue", "red"); // arg1:list 1, REST ["green", "blue", "red"]
// colors("List 2: ", "black","pink", "orange");
