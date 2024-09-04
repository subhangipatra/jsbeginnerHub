let checkClassName = "is-toggled";

let toggleClass = function (inputClass) {
	document.querySelector(".js-game-button").classList.remove(checkClassName);
	document.querySelector(".js-music-button").classList.remove(checkClassName);
	document.querySelector(".js-tech-button").classList.remove(checkClassName);
	document.querySelector(inputClass).classList.add(checkClassName);
};
function calculateCost() {
	let cost = Number(document.querySelector(".js-text").value) * 100;
	if (cost < 4000 && cost > 0) {
		cost += 1000;
	}
	cost < 0 ? (document.querySelector(".js-finalCost").innerHTML = `Error: cost cannot be less than $0`) : (document.querySelector(".js-finalCost").innerHTML = `$ ${cost / 100}`);
}
