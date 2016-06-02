describe('ToDoController', function() {
  beforeEach(module('toDoApp'));

  var ctrl, httpBackend, ToDoFactory;
  var toDoData = [{text: "ToDo1", completed: true}, {text: "ToDo2", completed: false}];

  beforeEach(inject(function($httpBackend, $controller, _ToDoFactory_) {
    ctrl = $controller('ToDoController');
    ToDoFactory = _ToDoFactory_;
    httpBackend = $httpBackend;

    // Mock out our http call
    httpBackend.expectGET("http://quiet-beach-24792.herokuapp.com/todos.json").respond(toDoData);

    // We have to flush straight away here so that by the time we do our tests
    // the ToDos have been set to `self.todos`
    httpBackend.flush();
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
