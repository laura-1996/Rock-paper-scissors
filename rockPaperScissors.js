const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissos' || userInput === 'bomb') {
   return userInput;
  } else {
   console.log('Choose between rock, paper or scissors. It seems that you didn\'t choose correctly');
  };
};

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
    break;
  }
};

const determineWinner = (userChoice,computerChoice) => {
  if (userChoice === computerChoice) {
    return 'tie';
  }
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'Computer won';
    } else {
      return 'You won!'
      }
    }
  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
    return 'Computer won';
  } else {
    return 'You won!'
    }
  }
  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
    return 'Computer won';
    } else {
      return 'You won!';
    }
  }
  if (userChoice === 'bomb'){
    return 'You won!'
  }
};

const playGame = () => {
  let userChoice = getUserChoice('bomb');
  let computerChoice = getComputerChoice();
  console.log('You threw ' + userChoice);
  console.log('Computer threw ' + computerChoice);
  console.log(determineWinner(userChoice , computerChoice));
};

playGame();


