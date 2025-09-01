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

class Database {
  data: Array<string | number> = [];

  saveData(value:string | number) {
    this.data.push(value)
  }

  getAllDatas() {
    return [...this.data]
  }
}

const stringData = new Database() // type database
stringData.saveData("Emmanuel");
stringData.saveData("Caco");
stringData.saveData(200);
const result = stringData.getAllDatas();
console.log(result);
