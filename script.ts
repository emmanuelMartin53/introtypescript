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

// Création de variables et types

let heros: string = 'superman'

let pseudo: string = heros;
console.log(pseudo);


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


const sum = (nbre: number) => {
  let total = nbre * nbre
  return total
}

const add = sum(3)
console.log(add);


// ARRAY

let colors: string[] = ["red", "blue", "green", "orange"]
console.log(colors);


