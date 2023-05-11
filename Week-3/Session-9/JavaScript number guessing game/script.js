// Your solution goes here 
function playGuessingGame(numToGuess, totalGuesses = 10) {   
    var user_guess = 0
    var tmp = totalGuesses

    while (tmp != 0) {

        // When user Cancels prompt
        if (user_guess === null) return

        // First time user
        if (tmp == totalGuesses)
            user_guess = prompt("Enter a number between 1 and 100.")
        // Guessed Correctly
        else if (parseInt(user_guess) == numToGuess)            
            return numToGuess
        // Incorrect guess (small)
        else if (user_guess < numToGuess)
            user_guess = prompt(user_guess + " is too small. Guess a larger number.")
        // Incorrect guess (large)
        else if (user_guess > numToGuess)
            user_guess = prompt(user_guess + " is too large. Guess a smaller number.")
        // Empty string or not a number
        else if (isNaN(user_guess) || user_guess === "")
            user_guess = prompt("Please enter a number.")                       
        
        tmp-- // reducing guess each time user tries
    }
    
    return 0
}

console.log(playGuessingGame(7, 3))