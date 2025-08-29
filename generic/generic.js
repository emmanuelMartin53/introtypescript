// GENERIQUES
// let colors = ["red", "blue", "green"] // : string[]
// let colors2: Array<string> = []; // : string []
// colors2 = ["red", "blue", "green"];
function identity(params) {
    return params;
}
// let output1 = identity<string>("Hello"); // :string
// let output2 = identity<number>(200); // : number
// let output3 = identity<boolean>(true); // :  boolean
var output4 = identity({ title: "Hello World" }); // :object {title: string}
console.log(typeof output4);
var objOne = { name: "Ryo" };
var objTwo = { age: 30 };
function objInArray(name, age) {
    var data = [];
    data.push(name, age);
    return data;
}
var user = (objInArray(objOne, objTwo));
console.log(user);
