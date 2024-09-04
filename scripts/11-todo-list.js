const todoLists = [
	{ name: "make dinner", duedate: "22-12-2022" },
	{ name: "wash dishes", duedate: "24-01-2025" },
];
renderTodo();

function addTodo() {
	const inputElement = document.querySelector(".js-name-input").value;
	todoLists.push(inputElement);
	document.querySelector(".js-name-input").value = "";
}
function renderTodo() {
	todoListIsHTML = "";
	for (let i = 0; i < todoLists.length; i++) {
		const html = `<div>
		${todoLists[i].name}</div> 
		<div>${todoLists[i].duedate}</div>
		<button onclick="
		todoLists.splice(${i},1);
		renderTodo();
		" class="delete-button">Delete</button>
		`;
		todoListIsHTML += html;
	}
	document.querySelector(".js-display-text").innerHTML = todoListIsHTML;
}
function addTodo2() {
	const inputElement = document.querySelector(".js-name-input2").value;

	const dueDate = document.querySelector(".js-date-input").value;
	todoLists.push({ name: inputElement, duedate: dueDate });
	document.querySelector(".js-name-input2").value = "";
	renderTodo();
	saveToStorage();
}
function saveToStorage() {
	localStorage.setItem("todoLists", JSON.stringify(todoLists));
}
