Meteor.publish('my_todos', function(){
  if (Roles.userIsInRole(this.userId, ['administrator'],'default-group')) {
    return Todos.find({});
  } else {
  	return Todos.find({ user : this.userId });	
  }
});


