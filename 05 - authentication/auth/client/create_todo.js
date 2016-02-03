Template.createtodo.helpers({

});

Template.createtodo.events({
	'submit .form': function(event){
		Todos.insert({
			name : event.target.todo.value,
			user : Meteor.user()._id
		});
	}
});