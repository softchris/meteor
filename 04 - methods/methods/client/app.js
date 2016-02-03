Template.hello.helpers({
	message : function(){
		return 'a message';
	}
});

Template.hello.events({
	'submit .todo-form' : function(ev){
		var name = ev.target.name.value;
		Meteor.call('addTodo',name);
	}
})