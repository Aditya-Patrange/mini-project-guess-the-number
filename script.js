// Generate a random number between 1 and 10
const secretNumber = Math.floor(Math.random() * 10) + 1;

// Get references to HTML elements
const input = document.getElementById("guessthenumber");
const button = document.getElementById("checkButton");
const result = document.getElementById("result");

// Add click event to button
button.addEventListener("click", function () {
  const userGuess = Number(input.value);

  if (!userGuess) {
    result.textContent = "Please enter a number!";
    return;
  }

  if (userGuess === secretNumber) {
    result.textContent = "🎉 Correct! You guessed the number.";
  } else if (userGuess > secretNumber) {
    result.textContent = "Too high! Try again.";
  } else {
    result.textContent = "Too low! Try again.";
  }
});
