toDoApp.controller('ToDoController', ['ToDoFactory', function(ToDoFactory) {
  
  var self = this;

  self.todos = [new ToDoFactory('Make a to do list'), new ToDoFactory('Check facebook'), new ToDoFactory('The washing up')];

  self.addToDo = function(newtask) {
    self.todos.push(new ToDoFactory(newtask));
  };

  self.removeLastTask = function() {
    self.todos.pop();
  };

}]);
