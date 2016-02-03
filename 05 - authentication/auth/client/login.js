  Template.login.helpers({
    user : function(){
      // use this one to save a post to a certain user
      var id = Meteor.user().id;
      return Meteor.user().emails[0].address;
    }
  });

  Template.login.events({
    'click button': function () {
      // increment the counter when button is clicked
  
    }
  });



