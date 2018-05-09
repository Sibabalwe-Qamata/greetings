describe('The Greet function', function() {
  it('It should Greet with the proper language',
    function() {
      var greet = greeting();
      greet.isixhosa('Siba');
       greet.english('Siba');
       greet.afrikaans('Siba');
       
      assert.equal(greet.isixhosa(), "Molo, Siba");
      assert.equal(greet.english(), "Hello, Siba");
      assert.equal(greet.afrikaans(),"Hallo, Siba");

    });

  });+