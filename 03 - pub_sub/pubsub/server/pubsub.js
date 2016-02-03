Meteor.publish('all_todos', function(){
    return Todos.find({ });
  });

Meteor.publish('done_todos', function(){
  return Todos.find({ done : true });
});

Meteor.publish('my_todos', function(){
  return Todos.find({ user : 'pelle' });
});

Meteor.startup(function () {
  if(Todos.find().fetch().length === 0){
    Todos.insert({ name: 'first todo', done : false });
    Todos.insert({ name: 'first todo2', done : true  });
    Todos.insert({ name: 'first todo3', done : false  });
    Todos.insert({ name: 'first todo4', done : false, user : 'pelle'  });
  }
  // code to run on server at startup
});