
function greeting(){

	var counter =0;

	function greetIsixhosa(isixhosaGreet){
		var greetOne = "Molo, "+ isixhosaGreet;

		return greetOne;
	}


	function greetEnglish(englishGreet){
		var greetTwo = "Hello, "+ englishGreet;

		return greetTwo;
	}
	

	function greetAfrikaans(afrikaansGreet){

		var greetThree = "Hallo, "+ afrikaansGreet;

		return greetThree;
	}


	return {
		isixhosa: greetIsixhosa,
		english: greetEnglish,
		afrikaans: greetAfrikaans

	}	

}