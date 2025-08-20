var form = document.getElementById("signup");
var firstName = document.getElementById("firstName");
var age = document.getElementById("age");
var gift = function (age) {
    age = age + 3;
    return age;
};
form.addEventListener('submit', function (event) {
    event.preventDefault();
    if (+age.value < 18) {
        console.log("tu n'est pas majeur, tu ne peux pas voter!");
    }
    else {
        console.log("Bonjour ".concat(firstName.value, " tu peux voter car tu as ").concat(age.value, " ans, tu aura droit \u00E0 un cadeau quand tu auras ").concat(gift(+age.value), " ans"));
    }
});
