// Number Guessing Game Exercise
// Practice: Loops, Conditionals, Logic

// Get DOM elements
const guessInput = document.getElementById('guess-input');
const guessBtn = document.getElementById('guess-btn');
const resetBtn = document.getElementById('reset-btn');
const feedback = document.getElementById('feedback');
const attemptsDisplay = document.getElementById('attempts');

// Game state
let secretNumber;
let attempts;
let gameOver;

// TODO: Function to start a new game
function startNewGame() {
    secretNumber = Math.floor(Math.random() * 100 + 1)
console.log(secretNumber)    
    // Generate random number between 1 and 100
    // Hint: Math.random() * 100 gives 0-99, then add 1 and use Math.floor()
    attempts = 0;
    // Reset attempts to 0

    // Set gameOver to false
    gameOver = false
    // Clear feedback
feedback.innerHTML = ""
    // Clear input
guessInput.innerHTMLHTML = ""
    // Update attempts display
    attemptsDisplay.innerHTML = attempts
}

// TODO: Function to check the guess
function checkGuess() {
    // If game is over, don't do anything
    if (gameOver) {
        return;
    }

    // Get the guess from input and convert to number
    const guess = parseInt(guessInput.value);

    // Validate the guess
    if (isNaN(guess)) {
        feedback.textContent = 'Please enter a valid number!';
        feedback.className = 'error';
        return;
    }

    if (guess < 1 || guess > 100) {
        feedback.textContent = 'Number must be between 1 and 100!';
        feedback.className = 'error';
        return;
    }

    // TODO: Increment attempts
    attempts++;
    // TODO: Check if guess is correct
    if (guess === secretNumber) {
        // Player won!
        console.log(`you won using ${attempts} attempts`)
        // Show success message with number of attempts
        // Set gameOver to true
        gameOver = true
        // Add 'success' class to feedback
        feedback.classList.add("success")
    }
    else if (secretNumber < guess) {   
        if (secretNumber - guess < 6) {
            console.log("Very close!")
            feedback.classList.add("hint")
        }
        else if (secretNumber - guess <= 10) {
            console.log("Close")
            feedback.classList.add("hint")
        }
        else if (secretNumber < guess) {
            console.log("Too low!")
            feedback.classList.add("hint")
        }    
    }
   else {   
        if (guess - secretNumber < 6) {
            console.log("Very close!")
            feedback.classList.add("hint")
        }
        else if (guess - secretNumber <= 10) {
            console.log("Close")
            feedback.classList.add("hint")
        }
        else {
            console.log("Too high!")
            feedback.classList.add("hint")
        }
   }
    guessInput.value = '';
    guessInput.focus();
}

// Event listeners
guessBtn.addEventListener('click', checkGuess);

guessInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        checkGuess();
    }
});

resetBtn.addEventListener('click', startNewGame);

// Start the game when page loads
startNewGame()

