//creating and linking html tags
let containerDiv = document.getElementById('container');
let body = document.querySelector('body');
let buttons = document.querySelectorAll('.button');
let player = document.getElementById('player');
let zombie = document.getElementById('zombie');





//creating logic for computer choices
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

//creating logic for each round of RPS
const playRound = function () {
  let playerShoot = this.title;
  let computerSelection = computerPlay();
  
  if (
    (playerShoot === 'rock' && computerSelection === 'scissors') ||
    (playerShoot === 'paper' && computerSelection === 'rock') ||
    (playerShoot === 'scissors' && computerSelection === 'paper')
  ) {
      player.textContent = parseInt(player.textContent) + 1;
  } else if (
    (playerShoot === 'rock' && computerSelection === 'paper') ||
    (playerShoot === 'paper' && computerSelection === 'scissors') ||
    (playerShoot === 'scissors' && computerSelection === 'rock')
  ) {
      zombie.textContent = parseInt(zombie.textContent) + 1;
  }
  
  const handleGameEnd = function(){
    containerDiv.innerHTML = '<h1>YOU LOSE!!!!</h1>';
    body.classList.toggle('lose');
    let playAgain = document.querySelector('button');
    playAgain.addEventListener('click',()=>{
      window.location.reload();
    });
  }

  const handleGameLoss = function(){
    containerDiv.innerHTML = '<h1>LET THEM BUUUUUUUUURNNNNNNNNN!</h1>';
    body.classList.toggle('win');
    let playAgain = document.querySelector('button');
    playAgain.addEventListener('click',()=>{
      window.location.reload();
    });
  }

  if(zombie.textContent === '5'){
    buttons.forEach(button => button.removeEventListener('click', playRound));
    setTimeout(handleGameEnd, 2000);
  }

  if(player.textContent === '5'){
    buttons.forEach(button => button.removeEventListener('click', playRound));
    setTimeout(handleGameLoss, 2000);
  }
};

//adding event listeners to divs

buttons.forEach((button) => {
  button.addEventListener('click', playRound);
  
});


