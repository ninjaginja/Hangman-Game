window.onload = function() {

// Define all the letter options with an array
var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "_"];

// Create set of answers with an array
var answers = ["shitter was full", "griswolds", "station wagon", "cousin eddie", "tree sap"];

// Set # of guesses counter equal to 12

var guessCounter = 12;

// Use for loop to call first answer, followed by new game when solved or # guesses reaches 0
// for (var i = 0; i < answers.length; i++) {

  // Display placeholders to account for each letter of the answer
  for (var j = 0; j < answers[0].length; j++) {
    console.log("_");
    var placeholderDiv = document.createElement("div");
    // console.log(placeholderDiv);
    placeholderDiv.className = "letter-box";
    // console.log(placeholderDiv);
    var testVar = document.getElementById("answer").appendChild(placeholderDiv);

  };




  // };





  // function insertPlaceholders(currentAnswer) {
  //   currentAnswer.length
  //
  // };



  // Detect user input upon keystroke

  // Reduce # of guesses counter by one upon each new letter keystroke

  // Check user input to determine if letter exists in selected answer

  // Place used letter in ‘Letter Graveyard’ div







// OLD CODE ...
// var userInput = document.getElementById("user-input");
// console.log(userInput);
// document.onkeyup = function(event) {
//   var userInput = document.getElementById("user-input");
//   userInput.innerHTML = event.key;
//   console.log(userInput);
// };

};
