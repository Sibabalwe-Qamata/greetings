describe('The Greet function', function() 
{
  it('It should Greet the user (Siba) with the proper language and name (i.e Hello, Siba)',
    function() {
      var greetings = greeting({});

      greetings.set_Name("Siba");
      greetings.set_language("English");
      assert.equal(greetings.doGreet(),'Hello, Siba');
     
     });

     it('It should Greet the user(Siphe) with the proper language and name (i.e Molo, Siphe)',
    function() {
      var greetings = greeting({});

      greetings.set_Name("Siphe");
      greetings.set_language("Isixhosa");

      assert.equal(greetings.doGreet(),'Molo, Siphe');
  
     });

     it('It should Greet the user(Siphelo) with the proper language and name (i.e  Hallo,Siphelo)',
    function() {
      var greetings = greeting({});

      greetings.set_Name("Siphelo");
      greetings.set_language("Afrikaans");
      assert.equal(greetings.doGreet(),'Hallo, Siphelo');
     });

     it('It should Increment the counter, if Three users were greeted ',
    function() {
      var greetings = greeting({});

      greetings.set_Name("Siba");
      greetings.set_language("English");

      greetings.set_Name("Siphe");
      greetings.set_language("Isixhosa");

      greetings.set_Name("Siphelo");
      greetings.set_language("Afrikaans");

      assert.equal(greetings.counter(),3);
     
     });

     it('It should not Increment the counter, since only One User is greeted in three different languages',
     function() {
       var greetings = greeting({});
 
       greetings.set_Name("Siba");
       greetings.set_language("English");
 
       greetings.set_Name("Siba");
       greetings.set_language("Isixhosa");
 
       greetings.set_Name("Siba");
       greetings.set_language("Afrikaans");
 
       assert.equal(greetings.counter(),1);
      
      });


  });