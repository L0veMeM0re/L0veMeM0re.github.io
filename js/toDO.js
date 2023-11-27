const todoForm = document.querySelector('.main__todo-form');
const todoInput = document.querySelector('.main__todo-input');
const todoItemsList = document.querySelector('.main__todo-items');

let todos = [];

todoForm.addEventListener('submit', function (event) {
  event.preventDefault();
  const inputValue = todoInput.value.trim(); // Убираем пробелы с начала и конца строки
  if (validateInput(inputValue)) {
    addTodo(inputValue);
  }
});

function validateInput(inputValue) {
  if (inputValue === '' || inputValue.length < 3) {
    alert('Please enter a valid todo (at least 3 characters)');
    return false;
  }
  return true;
}

function addTodo(item) {
  if (item !== '') {
    const todo = {
      id: Date.now(),
      name: item,
      completed: false
    };

    todos.push(todo);
    addToLocalStorage(todos);
    todoInput.value = '';
  }
}

function renderTodos(todos) {
  todoItemsList.innerHTML = '';

  todos.forEach(function (item) {
    const template = document.getElementById('todo-template');
    const li = document.importNode(template.content, true);

    li.querySelector('.item').setAttribute('data-key', item.id);
    li.querySelector('.checkbox').checked = item.completed;
    li.querySelector('.todo-name').textContent = item.name;

    if (item.completed) {
      li.querySelector('.item').classList.add('checked');
    }

    todoItemsList.appendChild(li);
  });
}

function addToLocalStorage(todos) {
  localStorage.setItem('todos', JSON.stringify(todos));
  renderTodos(todos);
}

function getFromLocalStorage() {
  const reference = localStorage.getItem('todos');
  if (reference) {
    todos = JSON.parse(reference);
    renderTodos(todos);
  }
}

function toggle(id) {
  todos.forEach(function (item) {
    // one is number and other is string
    if (item.id == id) {
      item.completed = !item.completed;
    }
  });
  addToLocalStorage(todos);
}

function deleteTodo(id) {
  todos = todos.filter(function (item) {
    return item.id != id;
  });
  addToLocalStorage(todos);
}

getFromLocalStorage();

todoItemsList.addEventListener('click', function (event) {
  if (event.target.type === 'checkbox') {
    toggle(event.target.parentElement.getAttribute('data-key'));
  }

  if (event.target.classList.contains('delete-button')) {
    deleteTodo(event.target.parentElement.getAttribute('data-key'));
  }
});
