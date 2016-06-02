toDoApp.controller('ToDoController', ['ToDoService', 'ToDoFactory', function(ToDoService, ToDoFactory){
  var self = this;

  ToDoService.getAll().then(function(todos){
    self.todos = todos;
  })

  self.addToDo = function(todoText){
    this.todos.push(new ToDoFactory(todoText))
  }

  this.removeToDo = function(){
    this.todos.pop();
  }
}])
