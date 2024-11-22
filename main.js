const apiURL = 'https://jsonplaceholder.typicode.com/todos';

const getTodos = () => {
  fetch(apiURL + '?_limit=10') //This filters down to 5 outputs
    .then((response) => response.json())
    .then((data) => {
      // This loops through all the data and adds them to the DOM
      data.forEach((todo) => addTodoToDOM(todo));
    });
};

const addTodoToDOM = (todo) => {
  const div = document.createElement('div');
  div.appendChild(document.createTextNode(todo.title));
  div.setAttribute('data-id', todo.id);

  if (todo.completed) {
    div.classList.add('done');
  }

  document.getElementsById('todo-list').appendChild(div);
};

const createTodo = (e) => {
  e.preventDefault();

  const newTodo = {
    title: e.target.firstElementChild.value,
    completed: false,
  };

  fetch(apiURL, {
    method: 'POST',
    body: JSON.stringify(newTodo),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => addTodoToDOM(data));
};

const init = () => {
  document.addEventListener('DOMContentLoaded', getTodos);
  document.querySelector('#todo-form').addEventListener('submit', createTodo);
};

init();
