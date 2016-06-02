describe('ToDoController', function(){
  beforeEach(module('toDoApp'));

  var ctrl, ToDoFactory;

  beforeEach(inject(function($controller, _ToDoFactory_){
    ctrl = $controller('ToDoController');
    ToDoFactory = _ToDoFactory_;
  }));

  it('initialises with two toDos', function() {
    var todo1 = new ToDoFactory("ToDo1", true)
    var todo2 = new ToDoFactory("ToDo2", false)
    expect(ctrl.todos).toEqual([todo1, todo2]);
  });

  it('can add a todo', function() {
    ctrl.addToDo("Study Javascript");
    var todo = new ToDoFactory("Study Javascript")
    expect(ctrl.todos).toContain(todo)
  })

  it('can remove a todo', function() {
    var todosLength = ctrl.todos.length
    ctrl.removeToDo();
    expect(ctrl.todos).not.toContain("ToDo2")
    expect(ctrl.todos.length).toEqual(todosLength - 1)
  })
});
