let score = JSON.parse(localStorage.getItem("score")) || {
	wins: 0,
	losses: 0,
	tie: 0,
};
updateScoreElement();

let isAutoPlaying = false;
let intervalId;
//const autoPlay = () =>{}

/*function autoPlay() {
	if (!isAutoPlaying) {
		intervalId = setInterval(() => {
			const playerMove = pickComputerMove();
			playGame(playerMove);
		}, 1000);
		isAutoPlaying = true;
	} else {
		clearInterval(intervalId);
		isAutoPlaying = false;
	}
}*/

document.querySelector(".js-auto-play-button").addEventListener("click", () => {
	if (!isAutoPlaying) {
		intervalId = setInterval(() => {
			const playerMove = pickComputerMove();
			playGame(playerMove);
		}, 1000);
		isAutoPlaying = true;
		document.querySelector(".js-auto-play-button").innerHTML = "Stop Play";
	} else {
		clearInterval(intervalId);
		isAutoPlaying = false;
		document.querySelector(".js-auto-play-button").innerHTML = "Auto Play";
	}
});
document.body.addEventListener("keydown", (event) => {
	if (event.key === "a") {
		if (!isAutoPlaying) {
			intervalId = setInterval(() => {
				const playerMove = pickComputerMove();
				playGame(playerMove);
			}, 1000);
			isAutoPlaying = true;
			document.querySelector(".js-auto-play-button").innerHTML = "Stop Play";
		} else {
			clearInterval(intervalId);
			isAutoPlaying = false;
			document.querySelector(".js-auto-play-button").innerHTML = "Auto Play";
		}
	}
});
document.querySelector(".js-rock-button").addEventListener("click", () => {
	playGame("rock");
});
document.querySelector(".js-paper-button").addEventListener("click", () => {
	playGame("paper");
});
document.querySelector(".js-scissors-button").addEventListener("click", () => {
	playGame("scissors");
});

document.body.addEventListener("keydown", (event) => {
	if (event.key === "r") {
		playGame("rock");
	} else if (event.key === "p") {
		playGame("paper");
	} else if (event.key === "s") {
		playGame("scissors");
	}
});

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

document.querySelector(".js-reset-score-button").addEventListener("click", () => {
	resetMessage();
});
document.body.addEventListener("keydown", (event) => {
	//console.log(event.key);
	if (event.key === "Backspace") {
		resetMessage();
	}
});

function resetMessage() {
	document.querySelector(".reset-message").innerHTML = `<p>Are you sure you want to rest the score ? <button class="js-yes-button" style="margin-right:10px;margin-left:10px;">Yes</button><button class="js-no-button">No</button></p>`;
	document.querySelector(".js-yes-button").addEventListener("click", () => {
		score.wins = 0;
		score.losses = 0;
		score.tie = 0;
		localStorage.removeItem("score");
		document.querySelector(".js-score").innerHTML = `Win : ${score.wins}.Lose : ${score.losses}.Tie : ${score.tie}`;
		document.querySelector(".reset-message").innerHTML = "";
	});
	document.querySelector(".js-no-button").addEventListener("click", () => {
		document.querySelector(".reset-message").innerHTML = "";
	});
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
