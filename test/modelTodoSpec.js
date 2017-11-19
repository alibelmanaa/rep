define(['todoModel'], function(TodoModel)  {
    var todo;

  describe('Todo Model', function() {
      beforeEach(function(){
          todo = new TodoModel();
      });

    it('Test setTitle and getTitle', function() {

          todo.setTitle('Test')
          expect(todo.getTitle()).toEqual('Test');
      });

      it('Test setId and getId', function() {

          todo.setId('TestId')
          expect(todo.getId()).toEqual('TestId');
      });
  });
});
