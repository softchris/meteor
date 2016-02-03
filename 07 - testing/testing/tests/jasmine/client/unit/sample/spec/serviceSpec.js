describe('test a service', function(){
	it('test add', function(){
		var actual = Service.add( 1, 2 );
		var expected = 3;

		expect(actual).toBe( expected );
	})
});