// GENERIQUES
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
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
var Database = /** @class */ (function () {
    function Database() {
        this.data = [];
    }
    Database.prototype.saveData = function (value) {
        this.data.push(value);
    };
    Database.prototype.getAllDatas = function () {
        return __spreadArray([], this.data, true);
    };
    return Database;
}());
var stringData = new Database(); // type database
stringData.saveData("Emmanuel");
stringData.saveData("Caco");
stringData.saveData(200);
var result = stringData.getAllDatas();
console.log(result);
