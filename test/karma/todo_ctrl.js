describe('TodoCtrl', function () {
    var controller,
        scope;

    // load the module for our app
    beforeEach(module('todoApp'));

    // instantiate the Controller and Mocks
    beforeEach(inject(function ($controller, $rootScope, $q) {
        scope = $rootScope.$new(true);

        controller = $controller('TodoListController', {
            $scope: scope
        });
    }));

    describe('todos', function() {
        it('should have 3 tasks', function() {
            expect(scope.todos.length).toBe(2);
        });
    });

    describe('new todo', function() {
        it('should create another todo', function() {
            var title;
            expect(scope.todoText).toBeUndefined();
            scope.todoText = title = "test";
            scope.addTodo();
            expect(scope.todos.length).toBe(3);
            expect(scope.todos[2].text).toBe(title);
            expect(scope.todos[2].done).toBe(false);
        });
    });

    describe('remaining todos', function () {
        it('should count all remaining', function () {
            expect(scope.remaining()).toBe(1);
        })
        it('should increase', function (){
            scope.addTodo();
            expect(scope.remaining()).toBe(2);
        })

    })

});