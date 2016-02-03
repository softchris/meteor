Meteor.subscribe('my_todos');

Template.listtodos.helpers({
	todos : function(){
		return Todos.find({});
	}
});