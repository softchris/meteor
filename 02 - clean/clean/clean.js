Items = new Meteor.Collection('items');

if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.cleanlist.helpers({
    items : function(){
      return Items.find({});
    }
  });

  Template.cleanlist.events({
    'click .item': function(event){
      //var checked = event.target.value === 'on';
      Items.update(this._id, {
        $set: {done: ! this.done}
      });
    },
    'submit .create-item' : function(event){
      var name = event.target.name.value;

      Items.insert({
        name : name,
        done : false 
      });
    }
  })
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
