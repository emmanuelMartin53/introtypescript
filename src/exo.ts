
const bind = (target: any, name: string, descriptor: PropertyDescriptor) => {
// console.log(target);
// console.log(name);
    const originalMethod = descriptor.value;
    let newDescriptor: PropertyDescriptor;
    newDescriptor = {
      get() {
        return originalMethod.bind(this)
      }
    }
    return newDescriptor;
}

class Person {
   userName: string;

  constructor ( userName: string) {
    this.userName = userName

  }
  @bind                         // decorator sur une fonction => fonction créée avec 3 arguments en paramètres
  getName() {
    console.log(this.userName);         // undefined
    console.log(this) // envoie Person
  }
}
const button = document.querySelector("button") as HTMLButtonElement;
const john = new Person("John Doe")
// button.addEventListener("click", () => john.getName())               // envoie la classe Person si on return john.getName()
// button.addEventListener("click",john.getName.bind(john))             // renvoie la classe person avec sa propriété + sa valeur avec getName()
button.addEventListener("click", john.getName)                          // renvoie unefined avec  console.log(this.userName);
