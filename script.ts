const form = document.getElementById("signup");
const firstName = document.getElementById("firstName") as HTMLInputElement;
const age = document.getElementById("age") as HTMLInputElement;

const gift = (age: number) => {
  age = age + 3
  return age
}


if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (+age.value < 18) {
      console.log("tu n'est pas majeur, tu ne peux pas voter!");
    } else {
      console.log(`Bonjour ${firstName.value} tu peux voter car tu as ${age.value} ans, tu aura droit à un cadeau quand tu auras ${gift(+age.value)} ans`);
    }


  })
}




//

let pseudo: string = 'superman';

let total: number = 200;

let isLoading: boolean = true


// intellisense vs code


console.log(pseudo.length);


console.log(typeof total);


let totalString: string = total.toString()
console.log('Total est de type: ', typeof totalString);


//

let welcomeMsg: string = `
  Bienvenue ${pseudo},
  tu as ${total} points
`
console.log(welcomeMsg);
