Products = new Mongo.Collection('products');

if (Meteor.isClient) {
	Template.products.helpers({
		data : function(){
			return "products";	
		},
		products : function(){
			return Products.find({}, { sort : { createdAt : -1 } });
		}
	});

	Template.products.events({
    'submit .products-form': function (event) {
    	console.log('save data');
    	event.preventDefault();
    	var text = event.target.name.value;

    	Products.insert({
    		title : text,
    		createdAt : new Date()
    	});

    	event.target.name.value = '';
      // collect form values
      // store in database
    }
  });
}