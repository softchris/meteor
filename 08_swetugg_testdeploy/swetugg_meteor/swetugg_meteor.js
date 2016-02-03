Items = new Meteor.Collection('items');

if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.items.helpers({
    counter: function () {
      return Session.get('counter');
    },
    items : function(){
      return Items.find({});
    }
  });

  Template.items.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    },
    'submit .form' : function(event){
      Items.insert({
        name : event.target.item.value,
        checked : false,
        date : new Date()
      })
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    if(Items.find({}).fetch().length === 0){
      Items.insert({
        name : 'listen to this lecture',
        checked : false,
        date : new Date()
      });
    }
    // code to run on server at startup
  });
}
