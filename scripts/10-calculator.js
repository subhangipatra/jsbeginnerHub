let sum = localStorage.getItem("sum") || "";
//let sum = " ";
function calculate(input) {
	if (!(input === "=")) {
		sum += input;
	}
	//console.log(sum);
	document.querySelector(".js-text").innerHTML = sum;
}
