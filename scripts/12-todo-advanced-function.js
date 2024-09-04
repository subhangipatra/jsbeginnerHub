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
	todoLists.forEach((todoObject, index) => {
		//const { name, duedate } = todoObject;
		const html = `<div>
		${todoObject.name}</div> 
		<div>${todoObject.duedate}</div>
		<button class="delete-button js-delete-todo-button">Delete</button>
		`;
		todoListIsHTML += html;
	});
	document.querySelector(".js-display-text").innerHTML = todoListIsHTML;
	document.querySelectorAll(".js-delete-todo-button").forEach((deleteButton, index) => {
		deleteButton.addEventListener("click", () => {
			todoLists.splice(index, 1);
			renderTodo();
		});
	});
}

document.querySelector(".js-add-todo-button").addEventListener("click", () => {
	addTodo2();
});
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
