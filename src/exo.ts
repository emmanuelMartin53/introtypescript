

class Person {
  userName: string;

  constructor (userName: string) {
    this.userName = userName;
  }

  getName() {
    console.log(this.userName);
  }
}

const button = document.querySelector("button") as HTMLButtonElement;
const john = new Person("John Doe");
button.addEventListener("click", () => john.getName());
