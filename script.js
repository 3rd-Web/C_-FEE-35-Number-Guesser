let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
  let randomNum = Math.floor(Math.random() * 10);
  return randomNum;
};

// console.log(generateTarget()); // WORKING - Returns random number b/w 0 - 9

const compareGuesses = (humanGuess, computerGuess, secretTarget) => {
  let humanGuessGap = Math.abs(secretTarget - humanGuess);
  let computerGuessGap = Math.abs(secretTarget - computerGuess);
  if (humanGuess > 10) {
    return alert(
      "You've entered an invalid number. Therefore, you lose. Please enter a number between 1-9"
    );
  }
  if (humanGuessGap < computerGuessGap) {
    return true;
  } else if (humanGuessGap === computerGuessGap) {
    return true;
  } else return false;
};

/*
  can also be expressed like: if (humanGuessGap <= computerGuessGap) {
    return true;
  } else return false;
  
  *** can be further shortened to: return humanGuessGap <= computerGuessGap ***
  */

const updateScore = (winner) => {
  if (winner === "human") {
    return (humanScore += 1);
  } else if (winner === "computer") {
    return (computerScore += 1);
  }
};

/*
  can also be expressed like: if (winner === 'human) {
    humanScore++;
  } else if (winner === 'computer') {
    computerScore++;
  }
  */

const advanceRound = () => {
  return (currentRoundNumber += 1);
};

/*
  can also be expressed like: const advanceRound = () =>
  currentRoundNumber++; // "++" increments by 1.
  */
