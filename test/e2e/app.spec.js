describe("app", function() {
  var mock = require('protractor-http-mock');

  beforeEach(function(){
    mock([{
      request: {
        path: 'http://quiet-beach-24792.herokuapp.com/todos.json',
        method: 'GET'
      },
      response: {
        data: [{text: "ToDo1", completed: true}, {text: "ToDo2", completed: false}]
      }
    }]);
  });

  it("should get home page title", function() {
    browser.get('/');
    expect(browser.getTitle()).toEqual("Ollie's Amazing To Do App");
  });

  it("should have a to do item called 'ToDo1'", function() {
    browser.get('/');
    var todo = $('#todo p');
    expect(todo.getText()).toContain("ToDo1")
  })

  it("should have a to do item called 'ToDo2'", function() {
    browser.get('/');
    var todo = $$('#todo p').last().getText();
    expect(todo).toContain("ToDo2")
  })

  it("should be able to add a to do item", function() {
    browser.get('/');
     $('#new-todo-name').sendKeys('Study some Javascript');
     $('#add-todo').click();
     var todo = $$('#todo p').last().getText();
     expect(todo).toContain("Study some Javascript")
  })

  it("should be able to remove a to do item", function() {
    browser.get('/');
    $('#remove-todo').click();
    var todo = $$('#todo p').last().getText();
    expect(todo).toContain("ToDo1: completed")
  })

  it("should be able to mark a to do as complete", function() {
    browser.get('/');
    var todo = $$('#todo p').last();
    todo.element(by.css('.complete')).click();
    expect(todo.getText()).toContain("ToDo2: completed")
  })

  afterEach(function(){
    mock.teardown();
  });

});
