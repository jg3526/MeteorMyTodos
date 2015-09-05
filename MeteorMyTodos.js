Todos = new Mongo.Collection('todos');

if (Meteor.isClient) {
  Meteor.subscribe('todos');
  // template helpers
  Template.main.helpers({
    todos: function() {
      return Todos.find({}, {sort: {createdAt: -1}});
    }
  });
  Template.main.events({
    "submit .new-todo": function(event) {
      var text = event.target.text.value;
      Meteor.call('addTodo', text);
      // clear form
      event.target.text.value = '';
      return false;
    },
    "click .toggle-check": function(event) {
      Meteor.call('setChecked', this._id, !this.checked);
    },
    "click .delete-todo": function(event) {
      if (confirm("Are you sure?")){
        Meteor.call('deleteTodo', this._id);
      }
    }
  });

  Accounts.ui.config({
    passwordSignupFields: "USERNAME_ONLY"
  });
    
}

if (Meteor.isServer) {
  Meteor.publish('todos', function(){
    return Todos.find({userId: this.userId});
  });
}

// for security
Meteor.methods({
  addTodo: function(text) {
    if (!Meteor.userId()){
      throw new Meteor.Error('not authorized.');
    }
    Todos.insert({
      text: text,
      createdAt: new Date(),
      userId: Meteor.userId(),
      username: Meteor.user().username
    });
  },
  deleteTodo: function(todoId){
    var todo = Todos.findOne(todoId);
    if (todo.userId !== Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }
    Todos.remove(todoId);
  },
  setChecked: function(todoId, setChecked) {
    var todo = Todos.findOne(todoId);
    if (todo.userId !== Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }
    Todos.update(todoId, {$set:{checked: setChecked}});
  }
});
