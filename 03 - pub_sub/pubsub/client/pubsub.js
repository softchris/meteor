Meteor.subscribe('done_todos');
Meteor.subscribe('my_todos');

Template.todos.helpers({
  items : function(){
    return Todos.find({});
  }
});

Template.todos.events({
  'click button': function () {
    // increment the counter when button is clicked
    Session.set('counter', Session.get('counter') + 1);
  }
});