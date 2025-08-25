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
