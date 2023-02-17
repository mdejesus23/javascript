let todos = ["Get groceries", "Wash car", "Make dinner"];

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
        let element = document.createElement("div");
        element.innerText = todoTitle;
        let todoList = document.getElementById("todo-list");
        todoList.appendChild(element);
    });
}