var colors = ["blue", "cyan", "gold", "gray", "green", "magenta", "orange", "red",
				"white", "yellow"];
var guess_color;
var finished = false;
var guesses = 0;

var HELLO_PROMPT1 = "I am thinking of one of these colors";
var HELLO_PROMPT2 = "What color am i thinking of?";
var INVALID_COLOR = "Sorry, I don't recognize your color.";
var INCORRECT_GUESS = "Sorry, your guess is not correct!";
var CORRECT_GUESS = "Congratulations! You have guessed the color!";
var COLOR_HIGHER = "Hint: your color is alphabetically higher than mine.";
var COLOR_LOWER = "Hint: your color is alphabetically lower than mine.";
var TRY_AGAIN = "Please try again.";

function start_game() {
	initialize_guess_color();

	while (!finished) {
		var input = prompt_input();
		console.log("Input color is: " + input);
		if (input == null) 
			return;
		finished = check_input(input);
	}
}

function initialize_guess_color() {
	var index = Math.random() * colors.length;
	index = Math.floor(index);
	guess_color = colors[index];
	console.log("Chosen color is: " + guess_color);
}

function prompt_input() {
	guesses++;
	return prompt(HELLO_PROMPT1 + "\n\n" + colors + "\n\n" + HELLO_PROMPT2).toLowerCase();
}

function check_input(input) {
	if (input == "") {
		console.log("Checking " + input + " with " + guess_color + ": " + "INVALID");
		return false;
	} else if (input == guess_color) {
		document.body.style.background = guess_color;
		alert(CORRECT_GUESS + "\n\n" +
						"It took you " + guesses + " guesses to finish the game!" + "\n\n" +
						"You can see the colour in the background");
		console.log("Checking " + input + " with " + guess_color + ": " + "correct");
		return true;
	} else if (input < guess_color) {
		alert(INCORRECT_GUESS + "\n\n" + COLOR_LOWER + "\n\n" + TRY_AGAIN);
		console.log("Checking " + input + " with " + guess_color + ": " + "lower");
		return false;
	} else {
		alert(INCORRECT_GUESS + "\n\n" + COLOR_HIGHER + "\n\n" + TRY_AGAIN);
		console.log("Checking " + input + " with " + guess_color + ": " + "higher");
		return false;
	}
}

