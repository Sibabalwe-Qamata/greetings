describe("The greet function", function(){

  it("It should greet with the Inputed Name", function(){
   
      assert.equal(greet("Siba"), "Molo, Siba");
      assert.equal(greet("Siba"), "Hello, Siba");
      assert.equal(greet("Siba"), "Hallo, Siba");  
  });
	
});