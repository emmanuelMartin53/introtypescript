class Person {
    userName;
    constructor(userName) {
        this.userName = userName;
    }
    getName() {
        console.log(this.userName);
    }
}
const button = document.querySelector("button");
const john = new Person("John Doe");
button.addEventListener("click", () => john.getName());
export {};
