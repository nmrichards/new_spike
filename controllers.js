toDoApp.controller('ToDoController', function() {
  var self = this;

  self.todos = [{task: 'task1', completed: false}, {task: 'task2', completed: true}];

  self.addToDo = function(newtask) {
    self.todos.push({task: newtask, completed: false});
  };
  self.removeLastTask = function() {
    self.todos.pop();
  };
});