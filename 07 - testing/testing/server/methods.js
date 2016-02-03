Meteor.methods({
    add : function(lhs, rhs){
      return lhs + rhs;
      console.log('calling add on serverside');
    }
});