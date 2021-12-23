//creating and linking html tags
let containerDiv = document.getElementById("container");
let body = document.querySelector("body");
let buttons = document.querySelectorAll(".button");
let player = document.getElementById("player");
let zombie = document.getElementById("zombie");

//creating logic for computer choices
const zombiePlay = function () {
  let shoot = Math.floor(Math.random() * 3);

  if (shoot === 0) {
    return "rock";
  } else if (shoot === 1) {
    return "paper";
  } else if (shoot === 2) {
    return "scissors";
  }
};

//creating logic for each round of RPS
const playRound = function () {
  let playerShoot = this.title;
  let zombieSelection = zombiePlay();

  if (
    (playerShoot === "rock" && zombieSelection === "scissors") ||
    (playerShoot === "paper" && zombieSelection === "rock") ||
    (playerShoot === "scissors" && zombieSelection === "paper")
  ) {
    player.textContent = parseInt(player.textContent) + 1;
  } else if (
    (playerShoot === "rock" && zombieSelection === "paper") ||
    (playerShoot === "paper" && zombieSelection === "scissors") ||
    (playerShoot === "scissors" && zombieSelection === "rock")
  ) {
    zombie.textContent = parseInt(zombie.textContent) + 1;
  }

  const handleGameLose = function () {
    location.href = "/lose.html";
  };

  const handleGameWin = function () {
    location.href = "/win.html";
  };

  const handleGameEnd = function (callBack) {
    buttons.forEach((button) => button.removeEventListener("click", playRound));
    setTimeout(callBack, 2000);
  };

  if (zombie.textContent === "5") {
    handleGameEnd(handleGameLose);
  }

  if (player.textContent === "5") {
    handleGameEnd(handleGameWin);
  }
};

//adding event listeners to divs

buttons.forEach((button) => {
  button.addEventListener("click", playRound);
});
