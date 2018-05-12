document.addEventListener('DOMContentLoaded', function () {

    //Below is the Factory Function


function greeting(UserDatabase) 
{

    var Name_to_greet = '';
    var language= '';
    var namesGreeted = {};

    
    function setName(greetName){
        if(greetName !== " "){Name_to_greet = greetName;}
    }

    function setLanguage(lang){language= lang;}

    function checkUserStoredList(){
        if(UserDatabase){ namesGreeted = UserDatabase;}

        if(Name_to_greet !==""){
            if(namesGreeted[Name_to_greet] === undefined)
            {
                namesGreeted[Name_to_greet]=0;
            }
        }

    }

    function greetUser()
    {
        if(language === "Isixhosa"){return "Molo, "+Name_to_greet;}
        else if(language === "Afrikaans"){return "Hallo, "+Name_to_greet;}
        else if(language ==="English"){return "Hello, "+Name_to_greet;}
    }

    //Below are Getter functions

    function getNameToGreet(){return Name_to_greet;}

    function getLanguageChoice(){return language;}

    function getNameMap(){return namesGreeted;}

    function updateNameMap(){return namesGreeted ={};}

    function getCounter(){return Object.keys(namesGreeted).length;}

    return {
        set_Name: setName,
        set_language: setLanguage,
        checkList: checkUserStoredList,

        get_name : getNameToGreet,
        get_language : getLanguageChoice,
        get_NameList : getNameMap,

        doGreet : greetUser,
        counter : getCounter,
        updateNameList : updateNameMap
    }

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
    var namesToStore =  greeting(storedUserList);

    //To display the number of greeted people...
   // displayCounter.innerHTML = Object.keys(storedUserList).length;


    function greetPerson() {
        var checkedRadioBtn = document.querySelector("input[name='language']:checked");
        var languageType = checkedRadioBtn.value;
        var nameOfPerson = greetingText.value.trim();

        //console.log(languageType);
        //console.log(nameOfPerson);

        // Variables to hold the values of inputs

        var nameToset = namesToStore.set_Name(nameOfPerson);
        console.log(nameToset);
        var languageToUse = namesToStore.set_language(languageType);
       console.log(languageToUse);

        //var checkUsersStored = namesToStore.checkList();

        //Storing names to local storage....
         namesToStore.get_name();
         namesToStore.checkList();

         //----------------------------//
         var newMapList = namesToStore.updateNameList();

         var counts = namesToStore.counter();
         console.log(counts);

         var greetMessage = namesToStore.doGreet();

        localStorage.setItem("Name", JSON.stringify(namesToStore.get_name()));

        displayCounter.innerHTML = counts;
        DisplayGreet.innerHTML = greetMessage;

        if(nameOfPerson == "")
        {
            DisplayGreet.innerHTML = "Please enter a name and choose a language!";
        }

    }

    resetBtn.addEventListener('click', function () 
    {
        namesToStore.updateNameList();
        window.location.reload();
        localStorage.clear();
        

        displayCounter.innerHTML = namesToStore.counts;
    });

    greetBtn.addEventListener('click', greetPerson);
});