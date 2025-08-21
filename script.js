var form = document.getElementById("signup");
var firstName = document.getElementById("firstName");
var age = document.getElementById("age");
var gift = function (age) {
    age = age + 3;
    return age;
};
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
// Création de variables et types
var heros = 'superman';
var pseudo = heros;
console.log(pseudo);
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
var sum = function (nbre) {
    var total = nbre * nbre;
    return total;
};
var add = sum(3);
console.log(add);
// ARRAY
var colors = ["red", "blue", "green", "orange"];
console.log(colors);
