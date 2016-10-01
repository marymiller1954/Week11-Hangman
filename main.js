// main.js 

var inquirer = require('inquirer');

var game = require('./game.js');
var letter = require('./letter.js');
var word = require('./word.js');

var newGame = new game();
var gameAnswer = newGame.chosenWord;
var guessesLeft = 12;
var checkWord = new word(newGame.chosenWord);
var newLetter = new letter(checkWord.word);
var isFirstGuess = true;

hangman();

function hangman (){
	
	if (guessesLeft > 0) {

		console.log("Remaining Guesses :" + guessesLeft)

		if (isFirstGuess) {
			newLetter.begin();
			console.log(newLetter.output);
		}
		else {
			console.log(newLetter.display());
		}

		console.log("Letters Already Guessed: " + newLetter.lettersGuessed);

		inquirer.prompt({
		name: "guess",
		message: "Let's Play Hangman. Today's Category is Grains.  Start by guessing a letter: "
		}).then(function(answer) {
			isFirstGuess = false;
			newLetter.update(answer.guess);

			if (newLetter.isMatch) {
				if(newLetter.win()) {
					console.log("That is correct!");
					console.log("The word is: " + gameAnswer);
					return;
				}
				hangman();

			}

			else {
				guessesLeft--;
				hangman();
			}
		})
	}	

	else {
		console.log("No more quesses for you!");
		console.log("The correct word is: " + gameAnswer + ". Sorry, you lose!");
	}
}