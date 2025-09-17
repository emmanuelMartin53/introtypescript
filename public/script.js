// DECORATORS && DECORATORS
function typeName(arg) {
    if (arg === null) {
        return "null";
    }
    return typeof arg;
}
const strVal = typeName("Hello"); // string
console.log(strVal);
const numVal = typeName(1); // number
console.log(numVal);
const boolVal = typeName(true); // boolean
console.log(boolVal);
const undefVal = typeName(undefined); // undefined
console.log(undefVal);
const funcVal = typeName(() => console.log("Hello")); // fonction
console.log(funcVal);
const objVal = typeName(["Hello", 4]); // object
console.log(objVal);
const nullVal = typeName(null);
console.log(nullVal);
export {};
