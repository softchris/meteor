describe('testing meteor layer', function(){
	it('testing add method', function(){
		Meteor.call('add', 1,2, function(err,data){
			expect(data).toBe(3);
			
		});
		
	})
})