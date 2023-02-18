const todos = ["Get groceries", "Wash car", "Make dinner"];

render();

function addTodo() {
    const textBox = document.getElementById('todo-title');
    const title = textBox.value;
    todos.push(title);

    render();
}

function render() {
    document.getElementById("todo-list").innerHTML = '';

    todos.forEach(function (todoTitle) {
        const element = document.createElement("div");
        element.innerText = todoTitle;
        const todoList = document.getElementById("todo-list");
        todoList.appendChild(element);
    });
}