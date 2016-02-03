if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Meteor.call('add',1,2, function(err, data){
        console.log('client add result ' + data);
      });

    },

  });
}



if (Meteor.isServer) {
  


  Meteor.startup(function () {
    // code to run on server at startup
  });
}
