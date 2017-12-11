window.onload = function() {

// Define all the letter options with an array
var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "_"];


// GLOBAL VARIABLES: Set # of guesses counter equal to 12. Create variable to hold guessed letters. Create variazble to hold letters in correct answer. Store user input.

var guessCounter = 12;
var guessesSoFar = [];
var correctLetter = [];
var userInput = "";

// Create variable to determine if in a current Game
var gameAnswer1 = false;
var gameAnswer2 = false;
var gameAnswer3 = false;
var gameAnswer4 = false;

// Create variables with answers

var answer1 = "shitter was full";
var answer2 = "griswolds";
var answer3 = "station wagon";
var answer4 = "cousin eddie";
var answer5 = "tree sap";

// Reset function - empty array of letters and reset guessesLeft
var reset = function() {
  guessCounter = 12;
  guessesSoFar = [];
}

// Start Game 1 by setting to true

gameAnswer1 = true;


  // Display placeholders to account for each letter of the answer

  for (var j = 0; j < answer1.length; j++) {

    var placeholderSpan = document.createElement("span");

    if (answer1[j] != " ") {
      placeholderSpan.className = "letter-box " + answer1[j];
      // placeholderSpan.setAttribute("id", answer1[j]);
      correctLetter.push(answer1[j]);

    } else {
      placeholderSpan.className = "space";
    }

    var newSpan = document.getElementById("answer").appendChild(placeholderSpan);

  };

  // Write function to detect user input on keystroke and write to "user-input" field
  // Match if userInput matches HTML span id value, write letter to appropriate span
  // Reduce guessCounter by 1 on each incorrect keystroke

  document.onkeyup = function(event) {
    userInput = event.key;
    guessesSoFar.push(userInput);
    document.querySelector("#user-input").innerHTML = guessesSoFar;


    // In the case of multiple letters, Why is this only writing to one field at a time?
    if (userInput == "s") {
      document.querySelector(".s").innerHTML = userInput;
      document.querySelector(".s").className = "filled-letter-box";
    } else if (userInput == "h") {
      document.querySelector(".h").innerHTML = userInput;
      document.querySelector(".h").className = "filled-letter-box";
    } else if (userInput == "i") {
      document.querySelector(".i").innerHTML = userInput;
      document.querySelector(".i").className = "filled-letter-box";
    } else if (userInput == "t") {
      document.querySelector(".t").innerHTML = userInput;
      document.querySelector(".t").className = "filled-letter-box";
    } else if (userInput == "e") {
      document.querySelector(".e").innerHTML = userInput;
      document.querySelector(".e").className = "filled-letter-box";
    } else if (userInput == "r") {
      document.querySelector(".r").innerHTML = userInput;
      document.querySelector(".r").className = "filled-letter-box";
    } else if (userInput == "w") {
      document.querySelector(".w").innerHTML = userInput;
      document.querySelector(".w").className = "filled-letter-box";
    } else if (userInput == "a") {
      document.querySelector(".a").innerHTML = userInput;
      document.querySelector(".a").className = "filled-letter-box";
    } else if (userInput == "f") {
      document.querySelector(".f").innerHTML = userInput;
      document.querySelector(".f").className = "filled-letter-box";
    } else if (userInput == "u") {
      document.querySelector(".u").innerHTML = userInput;
      document.querySelector(".u").className = "filled-letter-box";
    } else if (userInput == "l") {
      document.querySelector(".l").innerHTML = userInput;
      document.querySelector(".l").className = "filled-letter-box";
    } else {
      guessCounter--;
      document.querySelector("#guesses-left").innerHTML = guessCounter;
    }
  };

if (guessCounter === 0) {
  alert("Sorry, you lose!");
  reset();
}


};
