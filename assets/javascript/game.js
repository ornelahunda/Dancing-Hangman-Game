//Creating an array to hold the dancing generes.
var  dances =["ballet", "tango",  
    "waltz","contemporary","lambada",
     "swing", "bachata"];

// creating a var for the chosen dance
var oneDance=[];
// danceArray -- to hold the chosen word underscores
 var danceArray = [];
//  creating wins/loses variable
var wins = 0;
var lossCounter = 0;
// user choices
var choices = 10;

// hold the underscores
var underscores;

// link the id's we used in html with a variable
document.getElementById("guessesLeft").innerHTML = choices;
document.getElementById("wins").innerHTML = wins;
// replacing the the html element currentworld  in our document
//  with as much underscores as the chosen word
document.getElementById("currentword").innerHTML = underscores;
document.getElementById("alreadyguessed").innerHTML = guessed;


//Using a function to start the game 

function startGame() {

//Using math methods so computer can randomly pick a dance genre.



    oneDance = dances[Math.floor(Math.random() * dances.length)];
   
    for ( i = 0; i < oneDance.length; i++) {

      danceArray[i] = "_"; }

      document.getElementById("guessesLeft").innerHTML = choices;


      document.getElementById("alreadyguessed").innerHTML = "";

    
//using onkeyup event to get user guesses and saving them in a variable

    document.onkeyup = function (event) {
        var userGuess = event.key;

// Creating a cycle that checks if the user guess letter matches the computer guess
        for (var i = 0; i < oneDance.length; i++) {

//if user guess matches we save the answer at danceArray, position i, replacing the underscore
            if (oneDance[i] === userGuess) {

                danceArray[i] = userGuess;
                }

        }
    
// guessed letters
        var guessed = document.getElementById("alreadyguessed");
        var guessContent = guessed.innerHTML;
        var guessArray = Array.from(guessContent);
        
        
//alphabet array
        var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p",
        "q","r","s","t","u","v","w","x","y","z"];

        //if user guess does not match
        if (oneDance.indexOf(userGuess) === -1 && 
        guessArray.indexOf(userGuess) === -1 && 
        alphabet.indexOf(userGuess) !== -1) {

//put that user guess into the "letters already guessed section"
guessed.insertAdjacentHTML('beforeend', userGuess + " ");  


        }

//    elminates the spaces between letters in the answer
document.getElementById("currentword").innerHTML = danceArray.join(" ");


//subtract a point from remaining guesses if a letter is guessed thats 
// not in the word
if (oneDance.indexOf(userGuess) === -1 && 
guessArray.indexOf(userGuess) === -1 && 
alphabet.indexOf(userGuess) !== -1) {
            choices--;
    document.getElementById("guessesLeft").innerHTML = choices;
        }

    



// Wins

var danceArrayString = danceArray.toString();
if (danceArrayString.indexOf("_") === -1) {
 

    if (oneDance === "tango") {

document.getElementById("dancingimg").innerHTML = "<img class='img-responsive center-block'  src='assets/images/tango.jpg' height:150 width:150px >";
   }       
       
     
  

    if (oneDance === "waltz") {

document.getElementById("dancingimg").innerHTML = "<img class='img-responsive center-block' src='assets/images/waltz.jpg' height:150px; width:150px;>";

      
    }


    if (oneDance === "swing") {

        document.getElementById("dancingimg").innerHTML = "<img class='img-responsive center-block' src='assets/images/swing.jpg'height: 150px; width:150px; >";
        
        
       
    }


    if (oneDance === "lambada") {

        document.getElementById("dancingimg").innerHTML = "<img class='img-responsive center-block'  src='assets/images/lambada.jpg' 150px; width:150px;>";
        
       
        
    }


    if (oneDance === "contemporary") {

        document.getElementById("dancingimg").innerHTML = " <img class='img-responsive center-block' src='assets/images/contemporary.jpg' 150px; width:150px;>";
       
        
       
    }

    if (oneDance === "ballet") {

        document.getElementById("dancingimg").innerHTML = "<img class='img-responsive center-block' src='assets/images/ballet.jpg' 150px; width:150px;>";
       
      
    }
      
    if (oneDance === "bachata") {

        document.getElementById("dancingimg").innerHTML =  "<img class='img-responsive center-block' src='assets/images/bachata.jpg' 150px; width:150px; >";
       
      
    }

    
    //recording wins
            wins++;
            document.getElementById("wins").innerHTML = wins;        


    oneDance = dances[Math.floor(Math.random() * dances.length)];
           
            for ( i = 0; i < oneDance.length; i++) {

            danceArray[i] = "_";  }
            underscores = danceArray.join(" ");   
           document.getElementById("currentword").innerHTML = " ";
           document.getElementById("currentword").innerHTML = underscores;
        
            //reset choices back to 10
            choices = 10;
            document.getElementById("guessesLeft").innerHTML = choices;

            //clear the Letters Already Guessed div
            document.getElementById("alreadyguessed").innerHTML = "";
            

        }

    
        //if there are no more guesses left
        if (choices === 0) {

           oneDance = dance [Math.floor(Math.random() * dances.length)];
           
            for ( i = 0; i < oneDance.length; i++) {

                danceArray[i] = "_";

            }

            underscores = danceArray.join(" ");
            document.getElementById("currentword").innerHTML = underscores;


            //reset choices back to 10
            choices = 10;
            document.getElementById("guessesLeft").innerHTML = choices;

            //clear the Letters Already Guessed div
            document.getElementById("alreadyguessed").innerHTML = "";
        }
    
    };



}
































