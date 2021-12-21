const computerPlay = function () {
  let shoot = Math.floor(Math.random() * 3);

  if (shoot === 0) {
    return 'rock';
  } else if (shoot === 1) {
    return 'paper';
  } else if (shoot === 2) {
    return 'scissors';
  }
};

const playRound = function () {
  let playerShoot = prompt('choose your weapon human').toLowerCase();
  let computerSelection = computerPlay();

  if (
    (playerShoot === 'rock' && computerSelection === 'rock') ||
    (playerShoot === 'paper' && computerSelection === 'paper') ||
    (playerShoot === 'scissors' && computerSelection === 'scissors')
  ) {
    return 'Tie game human!';
  } else if (
    (playerShoot === 'rock' && computerSelection === 'scissors') ||
    (playerShoot === 'paper' && computerSelection === 'rock') ||
    (playerShoot === 'scissors' && computerSelection === 'paper')
  ) {
    return 'You win this time human!';
  } else if (
    (playerShoot === 'rock' && computerSelection === 'paper') ||
    (playerShoot === 'paper' && computerSelection === 'scissors') ||
    (playerShoot === 'scissors' && computerSelection === 'rock')
  ) {
    return 'You have been defeated human!';
  } else {
    return 'Play the game you coward!';
  }
};

let game = function () {
  let playerScore = 0;
  let computerScore = 0;
  gameCount = 0;

  while (gameCount < 5 && playerScore < 3 && computerScore < 3) {
    let winner = playRound();
    if (
      winner === 'Tie game human!' ||
      winner === 'Play the game you coward!'
    ) {
      gameCount++;
    } else if (winner === 'You have been defeated human!') {
      gameCount++;
      computerScore++;
    } else if (winner === 'You win this time human!') {
      gameCount++;
      playerScore++;
    }
    console.log(winner);
    console.log(playerScore);
    console.log(computerScore);
    console.log(gameCount);
  }

  if (playerScore > computerScore) {
    return [
      'The game is yours human!',
      `Your score was ${playerScore}`,
      `My score was ${computerScore}`,
    ];
  } else if (playerScore < computerScore) {
    return [
      'The game is mine human!',
      `Your score was ${playerScore}`,
      `My score was ${computerScore}`,
    ];
  } else if (playerScore === computerScore) {
    return [
      'We shall settle this next time human!',
      `Your score was ${playerScore}`,
      `My score was ${computerScore}`,
    ];
  }
};

console.log(game());
