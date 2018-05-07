document.addEventListener('DOMContentLoaded', function () {

    //get a reference to the billString
    var greetingText = document.querySelector(".text-name");

    var displayCounter = document.querySelector(".counter");

    //get a reference to the buttons
    var greetBtn = document.querySelector(".greet");

    var resetBtn = document.querySelector(".reset");

    var DisplayGreet = document.querySelector(".writer");

    var greetings = greeting();

    function greetPerson() {
        var checkedRadioBtn = document.querySelector("input[name='language']:checked");

        var languageType = checkedRadioBtn.value;
        console.log(languageType);

        var nameOfPerson = greetingText.value;
        console.log(nameOfPerson);

        if (languageType === "English") {
            var englishGreeting = greetings.english(nameOfPerson);
            DisplayGreet.innerHTML = englishGreeting;

        } else if (languageType === "Isixhosa") {
            var xhosaGreetings = greetings.isixhosa(nameOfPerson);
            DisplayGreet.innerHTML = xhosaGreetings;


        } else if (languageType === "Afrikaans") {
            var afrikaansGreetings = greetings.afrikaans(nameOfPerson);

            DisplayGreet.innerHTML = afrikaansGreetings;

        }
        var countPeople = greetings.people();
        displayCounter.innerHTML = countPeople;

    }





    greetBtn.addEventListener('click', greetPerson);
});
