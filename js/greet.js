document.addEventListener('DOMContentLoaded', function () {

    //get a reference to the billString
    var greetingText = document.querySelector(".text-name");

    var displayCounter = document.querySelector(".counter");

    //get a reference to the buttons
    var greetBtn = document.querySelector(".greet");

    var resetBtn = document.querySelector(".reset");

    var DisplayGreet = document.querySelector(".writer");
    
    var myMap = new Map();

    var namesGreeted = {};

    var greetings = greeting();

    function greetPerson() {
        var checkedRadioBtn = document.querySelector("input[name='language']:checked");

        var languageType = checkedRadioBtn.value;


        var nameOfPerson = greetingText.value;


        if (languageType === "English") {
            var countPeople = greetings.people();
            if (namesGreeted[nameOfPerson] === undefined) {

                //add an entry for the user that was greeted in the Object Map
                namesGreeted[nameOfPerson] = 0;
                //update the DOM to display the counter
                displayCounter.innerHTML = countPeople;
            }
            var englishGreeting = greetings.english(nameOfPerson);
            localStorage.setItem("Name", nameOfPerson);
            DisplayGreet.innerHTML = englishGreeting;

        } else if (languageType === "Isixhosa") {
            var xhosaGreetings = greetings.isixhosa(nameOfPerson);
            localStorage.setItem("Name", nameOfPerson);
            DisplayGreet.innerHTML = xhosaGreetings;


        } else if (languageType === "Afrikaans") {
            localStorage.setItem("Name", nameOfPerson);
            var afrikaansGreetings = greetings.afrikaans(nameOfPerson);

            DisplayGreet.innerHTML = afrikaansGreetings;

        }
        var countPeople = greetings.people();
        // localStorage.setItem("Counter", countPeople);
        //var keep = localStorage.getItem("Counter")
        displayCounter.innerHTML = countPeople;

    }

    resetBtn.addEventListener('click', function () {
        displayCounter.innerHTML = 0;
    });

    greetBtn.addEventListener('click', greetPerson);
});
