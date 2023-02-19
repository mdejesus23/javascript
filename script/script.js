const todos = [{
    title: "Get groceries",
    dueDate: "2023-10-04",
    id: "id1"
  }, {
    title: "Wash car",
    dueDate: "2023-02-03",
    id: "id2"
  }, {
    title: "Make dinner",
    dueDate: "2023-03-04",
    id: "id3"
  }];

  render();

  function addTodo() {
    const textBox = document.getElementById("todo-title");
    const title = textBox.value;

    const datePicker = document.getElementById("date-picker");
    const dueDate = datePicker.value;

    const id = new Date().getTime();

    todos.push({
        title: title,
        dueDate: dueDate,
        id: id
    });

      render();
  }

  function deleteTodo (event) {
    const deleteButton = event.target;
    const idToDelete = deleteButton.id;
  }

  function render() {
      document.getElementById("todo-list").innerHTML = "";

      todos.forEach(function (todo) {
          const element = document.createElement("div");
          element.innerText = todo.title + " " + todo.dueDate;
        // create delete button with each todo list.
          const deleteButton = document.createElement("button");
          deleteButton.innerText = "Delete";
          deleteButton.style = "margin-left: 12px;"
          deleteButton.onclick = deleteTodo;
        // associate todo.id to each of their delete button.
          deleteButton.id = todo.id;
          element.appendChild(deleteButton);
          

          const todoList = document.getElementById("todo-list");
          todoList.appendChild(element);
      });
  }