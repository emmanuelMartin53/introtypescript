// GENERIQUES
function addTodo(title, description) {
    var myTodo = {};
    myTodo.title = title;
    myTodo.description = description;
    return myTodo;
}
var todo = addTodo("Sport", 'Faire du foot');
console.log(todo);
