define("PersonInterface", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var App;
    (function (App) {
        class Person {
            name;
            age;
            constructor(name, age) {
                this.name = name;
                this.age = age;
            }
        }
        App.Person = Person;
    })(App || (App = {}));
});
// je crée une variable
define("script", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /// <reference path="PersonInterface.ts" />
    const person = new App.Person("Emmanuel", 43);
    console.log(person);
});
