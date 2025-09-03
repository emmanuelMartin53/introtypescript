"use strict";
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
