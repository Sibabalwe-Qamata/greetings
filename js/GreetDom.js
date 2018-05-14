document.addEventListener('DOMContentLoaded', function () {

   
    //localStorage.getItem('Name') ? storedUserList = JSON.parse(localStorage.getItem('Name')) : storedUserList ={key: 'value'};//


    //Below is the Factory Function


    function greeting(UserDatabase) {

        var Name_to_greet = '';
        var language = '';
        var Counter = 0;
        var namesGreeted = UserDatabase || {};


        function setName(greetName) {
            if (greetName !== " ") {
                Name_to_greet = greetName;
            }

            if (namesGreeted[Name_to_greet] === undefined) 
            {
                namesGreeted[Name_to_greet] = 0;
            }
        }

        function setLanguage(lang) {
            language = lang;
        }



        function greetUser() {
            if (language === "Isixhosa") {
                return "Molo, " + Name_to_greet;
            } else if (language === "Afrikaans") {
                return "Hallo, " + Name_to_greet;
            } else if (language === "English") {
                return "Hello, " + Name_to_greet;
            }
        }

        //Below are Getter functions

        function getNameToGreet() {
            return Name_to_greet;
        }



        function getLanguageChoice() {
            return language;
        }

        function getNameMap() {
            return namesGreeted;
        }
        
        
         return {
            set_Name: setName,
            set_language: setLanguage,


            get_name: getNameToGreet,
            get_language: getLanguageChoice,
            get_NameList: getNameMap, //This function returns an empty object ??????

            doGreet: greetUser
            //counter: getCounter,
            //updateNameList: updateNameMap
        }

        //------------------      Check the process of these functions    ------------------------------------//
        /***function checkUserStoredList() {
            if (getNameToGreet()) {
                namesGreeted = UserDatabase;
            }

            if (getNameToGreet() !== "") {
                if (namesGreeted[Name_to_greet] === undefined) {
                    namesGreeted[Name_to_greet] = 0;
                }
            }

        }***/


        
        /**function updateNameMap() {
            return namesGreeted = {};
        }**/

        /***function getCounter() {
            return Object.keys(namesGreeted).length;
        }**/
        //-------------------------------------------------------------------------------------------------//

    }

    //----------------------------------------End Here------------------------------------------------//

    //get a reference to the billString
    var greetingText = document.querySelector(".text-name");

    var displayCounter = document.querySelector(".counter");

    //get a reference to the buttons
    var greetBtn = document.querySelector(".greet");

    var resetBtn = document.querySelector(".reset");

    var DisplayGreet = document.querySelector(".writer");

    //var processGreetings = greeting();

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

        // Variables to hold the values of inputs

        var nameToset = namesToStore.set_Name(nameOfPerson);
        var languageToUse = namesToStore.set_language(languageType);
        //var checkUsersStored = namesToStore.checkList();
        //Storing names to local storage....

        if (nameOfPerson == " ") {
            DisplayGreet.innerHTML = "Please enter a name and choose a language!";
        }

    }


    function getGreetings() {
        greetPerson();

        namesToStore.get_name();
        //namesToStore.checkList();

        //----------------------------//
        var newMapList = namesToStore.get_NameList();
        var greetMessage = namesToStore.doGreet();
       

        //localStorage.getItem('Name') ? storedUserList = JSON.parse(localStorage.getItem('Name')) : storedUserList = {key:'value'};
        //NameArray.push(namesToStore.get_name());
        localStorage.setItem("Name", JSON.stringify(newMapList));

        displayCounter.innerHTML = localStorage.length;
        DisplayGreet.innerHTML = greetMessage;
    }

    resetBtn.addEventListener('click', function () {
        namesToStore.updateNameList();
        window.location.reload();
        localStorage.clear();
        displayCounter.innerHTML = namesToStore.counts;
    });

    greetBtn.addEventListener('click', function () {
        verifyMap();
        greetPerson();
        getGreetings();

    });
});
