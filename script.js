var form = document.getElementById("form");
var firstName = document.getElementById("firstName");
var age = document.getElementById("age");
var gift = function (age) {
    age = age + 3;
    return age;
};
// let
// const
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
//
var pseudo = 'superman';
var total = 200;
var isLoading = true;
// intellisense vs code
console.log(pseudo.length);
console.log(typeof total);
var totalString = total.toString();
console.log('Total est de type: ', typeof totalString);
//
var welcomeMsg = "\n  Bienvenue ".concat(pseudo, ",\n  tu as ").concat(total, " points\n");
console.log(welcomeMsg);
// Array
var colors = ["red", "blue", "green", "orange"];
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
console.log(values[3]);
// push
var stringNumberArray = ['red', 9, false];
stringNumberArray.push('salut');
console.log(stringNumberArray);
stringNumberArray[1] = "Re-bonjour";
console.log(stringNumberArray);
// TUPLE
var x;
x = ["Hello", 20];
// x.push("Bonjour")
// console.log(x);
console.log(x[0].substring(1));
