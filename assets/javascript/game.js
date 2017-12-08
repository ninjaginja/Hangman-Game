window.onload = function() {

// Define all the letter options with an array
var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "_"];


// Set # of guesses counter equal to 12

var guessCounter = 12;

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


// Start Game 1 by setting to true

gameAnswer1 = true;

  // Display placeholders to account for each letter of the answer

  for (var j = 0; j < answer1.length; j++) {

    var placeholderDiv = document.createElement("div");
    if (answer1[j] != " ") {
      placeholderDiv.className = "letter-box";
      placeholderDiv.setAttribute("letter-id", answer1[j]);

    } else {
      placeholderDiv.className = "space";
    }
    var testVar = document.getElementById("answer").appendChild(placeholderDiv);
  };

  // Detect user input upon keystroke
  //
  // var userInput = document.getElementById("user-input");
  // document.onkeyup = function(event) {
  //   var userInput = document.getElementById("user-input");
  //   userInput.innerHTML = event.key;
  // };

  var guessedLetters = [];


    var userInput = document.getElementById("user-input");
    document.onkeyup = function(event) {
      userInput.innerHTML = event.key;
    };

  if (userInput == "s") {
    var userInput = document.getElementById("s");
    document.onkeyup = function(event) {
      userInput.innerHTML = event.key;
    };
  };




  // Match if userInput == placeholderDiv(value), write letter to appropriate div



  // Reduce # of guesses counter by one upon each new letter keystroke

  // Check user input to determine if letter exists in selected answer

  // Place used letter in ‘Letter Graveyard’ div






};
