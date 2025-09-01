// GENERIQUES
// let colors = ["red", "blue", "green"] // : string[]
// let colors2: Array<string> = []; // : string []
// colors2 = ["red", "blue", "green"];
// function identity<T extends {title: string}>(params: T): T {
//   return params
// }
// let output1 = identity<string>("Hello"); // :string
// let output2 = identity<number>(200); // : number
// let output3 = identity<boolean>(true); // :  boolean
// let output4 = identity({title: "Hello World"}); // :object {title: string}
// console.log(typeof output4);
// const objOne = {name: "Ryo"};
// const objTwo = {age: 30};
// function objInArray<N extends {name: string},A extends {age: number}>(name: N, age: A ) {
//   let data: Array<object> = [];
//   data.push(name, age)
//   return data;
// }
// const user = (objInArray(objOne, objTwo));
// console.log(user);
// MISSION: ENREGISTRER TYPE: STRING
// class Database<T extends string | number> {
//   data: Array<T> = [];
//   saveData(value: T) {
//     this.data.push(value)
//   }
//   getAllDatas() {
//     return [...this.data]
//   }
// }
// const stringData = new Database<string>() // type database
// stringData.saveData("Emmanuel");
// stringData.saveData("Caco");
// const result1 = stringData.getAllDatas();
// console.log(result1);
// const numberOrStringData = new Database<number | string>();
// numberOrStringData.saveData(200);
// const result2 = numberOrStringData.getAllDatas();
// console.log(result2);
// const objectData = new Database<object>();
// objectData.saveData({name: "Aérys", game: "FFVII"});
// const result3 = objectData.getAllDatas();
// console.log(result3);
// TYPE PARTIALS
// interface Todo {
//   title: string;
//   description: string;
// }
// const addTodo = (title: string, description: string): Todo => {
//   let myTodo: Todo = {title, description}
//   return myTodo;
// }
// const todo = addTodo("Sport", 'Faire du foot');
// console.log("Todo", todo);
// UTILITY TYPE:  READONLY AVEC GENERIC
// const myTodo: Readonly<Todo> = {
//   title: "Sport",
//   description: "faire du foot"
// }
// console.log(myTodo.title); // => Sport
// myTodo.title = "Coding"
// let colors = ["blue", "green","yellow"];
// colors.push("orange")
// console.log(colors);
// let colors2: Readonly<string[]> = ["blue", "green","yellow"];
// colors2.push("orange")
// console.log(colors2);
// UTILITY TYPE:  RECORD AVEC GENERIC
// Je crée un interface
// interface Superheros {
//   name: string;
//   power: number;
//   marvel: boolean;
//   dcComics: boolean;
// }
// type Name = "Batman" | "Spiderman" | "Superman";
// let heros: Record<Name, Superheros> = {
//   Batman: {
//     name: "Batman",
//     power: 60,
//     marvel: false,
//     dcComics: true
//   },
//   Spiderman: {
//     name: "Spiderman",
//     power: 60,
//     marvel: true,
//     dcComics: false
//   },
//   Superman: {
//     name: "Superman",
//     power: 100,
//     marvel: false,
//     dcComics: true
//   },
// }
// console.log(heros);
// heros.Spiderman.marvel && console.log(`${heros.Spiderman.name} est Marvel`);
// TYPE PICK
// je crée une interface
// interface Todo {
//   title: string;
//   description : string;
//   completed: boolean;
// }
// type TodoPreview = Pick<Todo, "title" | "completed">
// let todo1: TodoPreview = {
//   title: "Sport",
//   // description: "Footing",
//   completed: true
// }
// console.log(todo1);
// TYPE OMIT
// type TodoPreview1 = Omit<Todo, "title" | "completed">
// let todo: TodoPreview1 = {
//   description: "Regarder une vidéo sur le pastel sec",
// }
// console.log(todo);
// TYPE EXCLUDE
// type T0 = Exclude<"a" | "b" | "c" | (() => void), Function >;
// type Easing = "ease-in" | "ease-out" | "ease-in-out"
// type Animate = Exclude<Easing, "ease-out">
// class UIElement {
//   animate (x: number, y:number, easing: Animate) {
//     if (easing === "ease-in") {
//       console.log("ease-in");
//     }
//     // if (easing === "ease-out") {
//     //   console.log("ease-out");
//     // }
//     if (easing === "ease-in-out") {
//       console.log("ease-in-out");
//     }
//   }
// }
// let button = new UIElement()
// button.animate(0, 0, "ease-in")
// console.log(button);
// TYPE EXTRACT
// type Colors = "red" | "bule" | "orange" | "green"
// type MyColors = "red" | "purple" | "green"
// type AcceptedColors = Extract<Colors, MyColors> // Ce type, dans le cas présent compare les type Colors et My Colors
// const clgColors = (param1: AcceptedColors) => {
//   console.log(param1);
// }
// clgColors("blue") // "blue" n'est pas accepté car il n'existe pas dans les type Colors et MyColors
// TYPE NONNULLABLE
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.paint = function (color) {
        console.log(color);
    };
    return Car;
}());
var ford = new Car();
ford.paint("blue");
var firstName = null;
