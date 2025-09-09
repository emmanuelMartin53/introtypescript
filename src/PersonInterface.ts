namespace App {
    interface PersonInterface {
      name: string;
      age: number;
    }

    export class Person implements PersonInterface {
    name: string;
    age: number;

    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
  }
}
