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

  // Write function to detect user input on keystroke and write to "user-input" field, reduce guessCounter by 1 on each keystroke.
  // Match if userInput matches HTML span id value, write letter to appropriate span (using value identifier.)

  document.onkeyup = function(event) {

    userInput = event.key;
    console.log(userInput);
    guessCounter--;
    document.querySelector("#guesses-left").innerHTML = guessCounter;

    guessesSoFar.push(userInput);
    document.querySelector("#user-input").innerHTML = guessesSoFar;

    if (userInput == "s") {
      document.querySelector(".s").innerHTML = userInput
    } else if (userInput == "h") {
      document.querySelector(".h").innerHTML = userInput
    } else if (userInput == "i") {
      document.querySelector(".i").innerHTML = userInput
    } else if (userInput == "t") {
      document.querySelector(".t").innerHTML = userInput
    } else if (userInput == "e") {
      document.querySelector(".e").innterHTML = userInput
    } else if (userInput == "r") {
      document.querySelector(".r").innterHTML = userInput
    } else if (userInput == "w") {
      document.querySelector(".w").innterHTML = userInput
    } else if (userInput == "a") {
      document.querySelector(".a").innterHTML = userInput
    } else if (userInput == "f") {
      document.querySelector(".f").innterHTML = userInput
    } else if (userInput == "u") {
      document.querySelector(".u").innterHTML = userInput
    } else if (userInput == "l") {
      document.querySelector(".l").innterHTML = userInput
    }
  };



};
