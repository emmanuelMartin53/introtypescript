// // TYPE FUNCTION
// const greet = (name: string) => {
//   // methode permettant d'écrire string avec le 1er caractère en majuscule: ex "emmanuel" => "Emmanuel"
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
// const buildName = (firstName: string, ...restOfName: string[]) => {
//   return firstName + " " + restOfName.join(" ");
// }
// let buildNameFun: (fname: string, ...rest: string[]) => string = buildName;
// console.log(buildNameFun);
function gift3(age, sum) {
    var ageMember = age + 3;
    sum(ageMember);
}
gift3(40, function (num) {
    console.log(num);
});
