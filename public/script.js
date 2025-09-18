// DECORATORS && DECORATORS
// via le conditional type
// type MyConditionalType = MyType extends string ? "string" : null;     // null
// type MyConditionalType2 = MyType extends number ? "string" : null;    // string
// type MyType3<T> = T extends number ? "number" : "random";
// type WithNumber = MyType3<number>; // number
// type WithNumber2 = MyType3<string> // random
// type TypeName<T> =
//   T extends string ? "string" :
//   T extends number ? "number" :
//   T extends boolean ? "boolean" :
//   T extends undefined ? "undefined" :
//   T extends Function ? "function" :
//   T extends null ? "null" :
//   "object";
// function typeName<T>(arg: T): TypeName<T> {
//   if (arg === null) {
//     return "null" as TypeName<T>
//   }
//   return typeof arg as TypeName<T>
// }
// const strVal= typeName("Hello") // string
// console.log(strVal);
// const numVal = typeName(1) // number
// console.log(numVal);
// const boolVal = typeName(true) // boolean
// console.log(boolVal);
// const undefVal = typeName(undefined) // undefined
// console.log(undefVal);
// const funcVal = typeName(() => console.log("Hello")) // fonction
// console.log(funcVal);
// const objVal = typeName(["Hello", 4]) // object
// console.log(objVal);
// const nullVal = typeName(null);
// console.log(nullVal);
// MAPPED TYPES
// type Props = "prop1" | "prop2" | "prop3";
// type MyMappedType<Props extends string | number | symbol > = {
//   [Prop in Props]: Prop;
// }
// type Props = "prop1" | "prop2" | "prop3";
// type MyMappedTypes<T> = {
//   readonly [Prop in keyof T]: T[Prop] | null;
// }
// type MyType = MyMappedTypes<({color: "green", price: 200})>
// type MyPick<T, Props extends keyof T> = {
//   [Prop in Props]: T[Prop]
// }
// type NewType = MyPick<{color: "green", price: 200, name: "pen"}, "price">
// MIXINS
// c'est une fonction qui prend un constructor pour créer une nouvelle classe
// qui hérite de ce constructor, avec des fonctionnalités additionnelles,
// et nous retourne une nouvelle classe
class Person {
    speak() {
        console.log("Je parle");
    }
    walk() {
        console.log("Je marchee");
    }
}
class Alien {
    telepathy() {
        console.log("Je communique");
    }
}
function PersonMixin(base) {
    return class extends base {
        speak() {
            console.log("Je parle");
        }
        walk() {
            console.log("Je marchee");
        }
    };
}
function AlienMixin(base) {
    return class extends base {
        telepathy() {
            console.log(`Je communique sans parler, j'ai ${this.age} ans`);
        }
    };
}
const Paul = PersonMixin(AlienMixin(class {
    age = 5000;
}));
const paul = new Paul();
paul.speak();
paul.walk();
paul.telepathy();
console.log(`Age: ${paul.age} ans`);
export {};
