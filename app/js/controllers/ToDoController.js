toDoApp.controller('ToDoController', ['ToDoFactory', function(ToDoFactory){
  var self = this;

  self.todos = [new ToDoFactory('ToDo1', true), new ToDoFactory('ToDo2', false)];

  self.addToDo = function(todoText){
    this.todos.push(new ToDoFactory(todoText))
  }

  this.removeToDo = function(){
    this.todos.pop();
  }
}])
