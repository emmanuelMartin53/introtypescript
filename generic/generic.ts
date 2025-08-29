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

interface Todo {
  title: string;
  description: string;
}

function addTodo(title: string, description: string): Todo {
  let myTodo: Todo = {title, description}
  return myTodo as Todo;

}

const todo = addTodo("Sport", 'Faire du foot');
console.log(todo);
