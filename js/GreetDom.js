document.addEventListener('DOMContentLoaded', function () {

    //get a reference to the billString
    var greetingText = document.querySelector(".text-name");

    var displayCounter = document.querySelector(".counter");

    //get a reference to the buttons
    var greetBtn = document.querySelector(".greet");

    var resetBtn = document.querySelector(".reset");

    var DisplayGreet = document.querySelector(".writer");
   

    //Below to get the stored users from local storage
    var storedUserList = localStorage.getItem('Name') ? JSON.parse(localStorage.getItem('Name')) : {};
    var namesToStore = greeting(storedUserList);

    //Check if there is anything in LocalStorage which is a Map....
    function verifyMap() {
        if (localStorage.getItem('Array', JSON.parse(localStorage.getItem('Name'))) === undefined) {
            localStorage.setItem("ArrayList:", []);
        }
    }

   

    function greetPerson() {
        var checkedRadioBtn = document.querySelector("input[name='language']:checked");
        var languageType = checkedRadioBtn.value;
        var nameOfPerson = greetingText.value.trim();

        /***ToDo
         * Handle User Input 
         * 
         * 
         * 
         * 
         * 
         * ***/
        if(nameOfPerson === nameOfPerson.toLowerCase())
        {
            var nameToset = namesToStore.set_Name(nameOfPerson);
            var languageToUse = namesToStore.set_language(languageType);
        }
        else if(nameOfPerson === nameOfPerson.toUpperCase())
        {
        
            var nameToset = namesToStore.set_Name(nameOfPerson);
            var languageToUse = namesToStore.set_language(languageType);
        }
        else if (nameOfPerson === " "){
            DisplayGreet.innerHTML = "Please enter a name and choose a language!";

        }
       
    }


    function getGreetings() {
        greetPerson();

        namesToStore.get_name();
        var newMapList = namesToStore.get_NameList();
        var greetMessage = namesToStore.doGreet();
       
        localStorage.setItem("Name", JSON.stringify(newMapList));

        displayCounter.innerHTML = namesToStore.counter();
        DisplayGreet.innerHTML = greetMessage;
    }

    resetBtn.addEventListener('click', function () {
        
        window.location.reload();
        localStorage.clear();
        displayCounter.innerHTML = 0;
    });

    greetBtn.addEventListener('click', function () {
        verifyMap();
        greetPerson();
        getGreetings();

    });
});
