console.log('load from babel-loader')
angular.module('todoApp', [])
  .controller('TodoListController', ($scope) => {
    var todoList = $scope;
    $scope.todos = [
      {text:'learn angular skills', done:true},
      {text:'build an angular', done:false}];

    $scope.addTodo = () => {
      $scope.todos.push({text:$scope.todoText, done:false});
      $scope.todoText = '';
    };

    $scope.remaining = () => {
      var count = 0;
      angular.forEach($scope.todos, function(todo) {
        count += todo.done ? 0 : 1;
      });
      return count;
    };

    $scope.archive = () => {
      var oldTodos = $scope.todos;
      $scope.todos = [];
      angular.forEach(oldTodos, function(todo) {
        if (!todo.done) $scope.todos.push(todo);
      });
    };
  });
