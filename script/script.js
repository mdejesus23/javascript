// Model Section Managing data
let todos = [{
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

    // create a createTodo function and set a title and dueDate parameters.
  function createTodo(title, dueDate) {
    // convert id number to string type to match with id of the button as string also.
    const id = "" + new Date().getTime();

    todos.push({
        title: title,
        dueDate: dueDate,
        id: id
    });
  }
  // Delete Todo
  function removeTodo(idToDelete) {
    todos = todos.filter(function (todo) {
      if (todo.id === idToDelete) {
        return false;
      } else {
        return true;
      }
    });
  }

  // Controller Section
  function addTodo() {
    // get the text box element and assign to textBox variable.
    const textBox = document.getElementById("todo-title");
    // get the text box value and assign to title variable.
    const title = textBox.value;
    
    const datePicker = document.getElementById("date-picker");
    const dueDate = datePicker.value;
    // Invoke function and pass title and dueDate as an argument.
    createTodo(title, dueDate);
    render();
  }

  function deleteTodo (event) {
    const deleteButton = event.target;
    const idToDelete = deleteButton.id;

    removeTodo(idToDelete)
    render();
  }

  // View Section
  function render() {
      // reset todo-list innerHTML.
      document.getElementById("todo-list").innerHTML = "";

      todos.forEach(function (todo) {
          const element = document.createElement("div");
          element.innerText = `${todo.title} ${todo.dueDate}`;

        // create checkbox
          const checkbox = document.createElement("input");
          checkbox.type = "checkbox";
          checkbox.id = todo.id;
          element.prepend(checkbox);

        // create delete button with each todo list.
          const deleteButton = document.createElement("button");
          deleteButton.innerText = "Delete";
          deleteButton.style = "margin-left: 12px;"
          deleteButton.onclick = deleteTodo;
        // associate todo.id to each of their delete button id property.
          deleteButton.id = todo.id;
          element.appendChild(deleteButton);
        // put element new todo to todoLIst div container.
          const todoList = document.getElementById("todo-list");
          todoList.appendChild(element);
      });
  }

  render();