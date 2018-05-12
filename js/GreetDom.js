document.addEventListener('DOMContentLoaded', function () {

    //get a reference to the billString
    var greetingText = document.querySelector(".text-name");

    var displayCounter = document.querySelector(".counter");

    //get a reference to the buttons
    var greetBtn = document.querySelector(".greet");

    var resetBtn = document.querySelector(".reset");

    var DisplayGreet = document.querySelector(".writer");

    var processGreetings = greeting();

    //Below to get the stored users from local storage
    var storedUserList = localStorage.getItem('Names') ? JSON.parse(localStorage.getItem('Names')): {};
    var namesToStore =  processGreetings(storedUserList);

    //To display the number of greeted people...
    displayCounter.innerHTML = Object.keys(storedUserList).length;


    function greetPerson() {
        var checkedRadioBtn = document.querySelector("input[name='language']:checked");
        var languageType = checkedRadioBtn.value;
        var nameOfPerson = greetingText.value.trim();

        // Variables to hold the values of inputs

        var nameToset = processGreetings.setname(nameOfPerson);
        var languageToUse = processGreetings.set_language(languageType);

        var checkUsersStored = processGreetings.checkList();

        //Storing names to local storage....
         namesToStore.nameToset;
         namesToStore.checkUsersStored;

         //----------------------------//
         var newMapList = processGreetings.updateNameList();

         var counts = processGreetings.counter();

         var greetMessage = processGreetings.doGreet();

        localStorage.setItem("Names", JSON.stringify(namesToStore.newMapList));

        displayCounter.innerHTML = namesToStore.counts;
        DisplayGreet.innerHTML = greetMessage;

        if(nameOfPerson == "")
        {
            DisplayGreet.innerHTML = "Please enter a name and choose a language!";
        }

    }

    resetBtn.addEventListener('click', function () 
    {
        namesToStore.reset();
        window.location.reload();
        localStorage.clear();
        

        displayCounter.innerHTML = namesToStore.counts;
        
        

    });

    greetBtn.addEventListener('click', greetPerson);
});