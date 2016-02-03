Meteor.startup(function () {
	if(Meteor.users.find({}).fetch().length === 0){
		var users = [
			{name:"Normal User",email:"normal@example.com",roles:['normal']},
			{name:"Admin User",email:"admin@example.com",roles:['administrator']}
		];

		_.each(users, function (user) {
		  var id;

		  id = Accounts.createUser({
		    email: user.email,
		    password: "password",
		    profile: { name: user.name }
		  });

		  if (user.roles.length > 0) {
		    // Need _id of existing user record so this call must come
		    // after `Accounts.createUser` or `Accounts.onCreate`
		    Roles.addUsersToRoles(id, user.roles, 'default-group');
		  }

		});	
	}
});