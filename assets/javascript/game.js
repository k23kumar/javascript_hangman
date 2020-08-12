const words = ["espresso", "cappucino", "latte", "mocha", "macchiato", "cortado"]
var word = "";
var wordArray = [];
var lettersGuessed = [];
var guessesRemaining = 5;
var wins = 0;
var losses = 0;

//generate a word from the words array

function generateRandom() {
    word = words[Math.floor(Math.random() * words.length)];
    console.log('word', word)
    wordArray = word.split("")
    console.log(wordArray)
    for (var i = 0; i < wordArray.length; i++) {
        wordArray[i] = "_"
    }
    updateWord();
}

//converts the generated word into blank spaces

function updateWord() {
    document.querySelector("#random-word").innerHTML = wordArray.join(" ")
}

//resets game: resets guessesRemaining to 5 and empties the lettersGuessed array; this leaves wins and losses alone

function resetGame() {
    generateRandom();
    updateWord();
    guessesRemaining = 5;
    lettersGuessed = [];
    document.querySelector("#guesses-remaining").innerHTML = "Guesses Remaining: " + guessesRemaining;
    document.querySelector("#letters-guessed").innerHTML = "Letters Guessed: " + lettersGuessed;
}

// checks to see if word has been guessed correctly; wins is incremented and game is reset

function checkWin() {
    if (wordArray.join("") === word) {
        wins++;
        document.querySelector("#wins").innerHTML = "Wins " + wins;
        resetGame();
    }
}

//checks to see if user has run out of guesses; if true, losses is incremented and game is reset; wins isn't reset

function checkLoss() {
    if (guessesRemaining === 0) {
        losses++;
        lettersGuessed = [];
        guessesRemaining = 5;
        resetGame();
        document.querySelector("#losses").innerHTML = "Losses: " + losses;
    }
}

//handles button press; can only press actual letters
document.onkeyup = function(event) {
    console.log(event.keyCode)
    let keyCode = event.keyCode;
    if (keyCode >= 65 && keyCode <= 90) {
        var buttonPressed = event.key
        checkLetter(buttonPressed);
        console.log(buttonPressed)

    }
}

//test button press and see if its contained in the blank word; if it is we display all instances of the letter. If its not contained in the blank word, decrement guesses remaining. Display the letters that were guesses in either case; run check win and check loss function

function checkLetter(buttonPressed) {
    var letterFound = false;
    for (var i = 0; i < word.length; i++) {
        if (buttonPressed === word[i]) {
            wordArray[i] = word[i]
            letterFound = true;    
        }       
        }
        if (letterFound === false) {
            guessesRemaining--
            document.querySelector("#guesses-remaining").innerHTML = "Guesses Remaining: " + guessesRemaining;
        }  
        lettersGuessed.push(buttonPressed)
        document.querySelector("#letters-guessed").innerHTML = "Letters Guessed: " + lettersGuessed.join(' , ') ;
        updateWord();
        checkWin();
        checkLoss();
}

//generates a random word upon page load
 window.onload = function(event) {
     generateRandom();
     console.log('on load')   
}

// var wordArray = word.split("").push();

//generate a random word when page loads and display letters of word as blank spaces

//user guesses a letter; if letter is contained in word, display letter(s) in word; decrement guesses remaining. If letter isn't in word add letter to letters guessed and decrement guesses remaining

//if user guesses all letter, increment score and generate a new word, reset guesses remaining and letters guessed.

//compare word array with word to see if they match; if they do the user has guessed word correctly increment wins and generate a new word




