// GENERIQUES
function addTodo(title, description) {
    var myTodo = { title: title, description: description };
    return myTodo;
}
var todo = addTodo("Sport", 'Faire du foot');
console.log(todo);
