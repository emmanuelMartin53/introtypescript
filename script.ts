const form = document.getElementById("form");
const firstName = document.getElementById("firstName") as HTMLInputElement;
const age = document.getElementById("age") as HTMLInputElement;


const gift = (age: number) => {
  age = age + 3
  return age
}

// let

// const


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


// Array

let colors: Array<string> = ["red", "blue", "green", "orange"]

let numbers: number[] = [1, 2, 3, 7.5]

numbers.push(9)
console.log(numbers);


let values : any[];
values = [
  'bonjour',
  true,
  500,
  {
    id:123445,
    true: true,
    hobbies: ['Voyage Japon', 'jeux video']
  }
]

console.log(values[3]);


// push
let stringNumberArray = ['red', 9, false];
stringNumberArray.push('salut')
console.log(stringNumberArray);

stringNumberArray[1] = "Re-bonjour";
console.log(stringNumberArray);

// TUPLE

let x: [string, number];
x = ["Hello", 20];

// x.push("Bonjour")
// console.log(x);

console.log(x[0].substring(1));
