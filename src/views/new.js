define([
    'todoModel',
    'text!templates/todo/new.html',
], function(TodoModel, NewTemplate) {

    //new TodoNewView({el: '#form',  'collection': new TodosCollection(), 'vent': vent })
    var TodoNewView = Backbone.View.extend({
        events: {
            'submit form': 'addTodo',
        },

        initialize: function(options){
            console.log("new - init");
            this.vent = options.vent;
        },

        addTodo: function(e) {
            console.log("new - add");
            e.preventDefault();

            this.collection.fetch();
            var todoModel = new TodoModel();

            todoModel.setTitle(this.$('#title').val());
            this.collection.add(todoModel);
            todoModel.save();

            this.$('#title').val('');
            this.vent.trigger("addModel");
        }, 

        render: function() {
            this.$el.html(NewTemplate);
        },
    });

    return TodoNewView;
});
