document.getElementById('todo-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const taskInput = document.getElementById('task-input');

    const taskText = taskInput.value;
const todoList = document.getElementById('todo-list');
const listItem = document.createElement('li');

    const radioButton = document.createElement('input');
radioButton.type = 'radio';
    radioButton.addEventListener('change', () => {
      listItem.classList.toggle('completed');
    });

    const label = document.createElement('label');
    label.textContent = taskText;
   
    listItem.appendChild(radioButton);
listItem.appendChild(label);
    todoList.appendChild(listItem);
taskInput.value = '';
     
  });