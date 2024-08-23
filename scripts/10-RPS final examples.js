let score = JSON.parse(localStorage.getItem("score")) || {
	wins: 0,
	losses: 0,
	tie: 0,
};
updateScoreElement();

function playGame(playerMove) {
	let result = "";
	const computerMove = pickComputerMove();

	if (playerMove === "rock") {
		if (computerMove === "rock") {
			result = "Tie.";
		} else if (computerMove === "paper") {
			result = "You lose.";
		} else if (computerMove === "scissors") result = "You win.";
	} else if (playerMove === "scissors") {
		if (computerMove === "rock") {
			result = "You lose.";
		} else if (computerMove === "paper") {
			result = "You win.";
		} else if (computerMove === "scissors") result = "Tie.";
	} else {
		if (computerMove === "rock") {
			result = "You win.";
		} else if (computerMove === "paper") {
			result = "Tie.";
		} else if (computerMove === "scissors") result = "you lose.";
	}

	if (result === "You win.") {
		score.wins += 1;
	} else if (result === "You lose.") {
		score.losses += 1;
	} else {
		score.tie += 1;
	}

	localStorage.setItem("score", JSON.stringify(score));
	document.querySelector(".js-result").innerHTML = result;
	document.querySelector(".js-move").innerHTML = `You <img src="images/${playerMove}-emoji.png" class="move-icon" />
<img src="images/${computerMove}-emoji.png" class="move-icon" />
Computer`;
	updateScoreElement();
}
let computerMove = "";

function updateScoreElement() {
	document.querySelector(".js-score").innerHTML = `Win : ${score.wins}.Lose : ${score.losses}.Tie : ${score.tie}`;
}
function pickComputerMove() {
	const randomnumber = Math.random();

	if (randomnumber >= 0 && randomnumber < 1 / 3) {
		computerMove = "rock";
	} else if (randomnumber >= 1 / 3 && randomnumber < 2 / 3) {
		computerMove = "paper";
	} else if (randomnumber >= 2 / 3 && randomnumber < 1) {
		computerMove = "scissors";
	}
	return computerMove;
}
