
function greeting(){

	var counter =0;

	function greetIsixhosa(isixhosaGreet){
		var greetOne = "Molo, "+ isixhosaGreet;
            counter++;
		return greetOne;
	}


	function greetEnglish(englishGreet){
		var greetTwo = "Hello, "+ englishGreet;
            counter++;
		return greetTwo;
	}
	

	function greetAfrikaans(afrikaansGreet){

		var greetThree = "Hallo, "+ afrikaansGreet;
           counter++; 
		return greetThree;
	}
    

    function peopleGreeted (){return counter;}


	return {
		isixhosa: greetIsixhosa,
		english: greetEnglish,
		afrikaans: greetAfrikaans,
        people: peopleGreeted

	}	

}