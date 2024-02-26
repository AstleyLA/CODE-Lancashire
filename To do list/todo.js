
// Get references to the form and list
const form = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

// Array to hold todos
let todos = [];

// Function to render todos
function renderTodos() {
    // Clear previous todos
    todoList.innerHTML = '';

    // Render new todos
    todos.forEach((todo, index) => {
        const li = document.createElement('li');
        li.textContent = todo;
        li.dataset.index = index; // Store the index of the todo item
        li.addEventListener('click', toggleTodo); // Add click event listener
        todoList.appendChild(li);
    });
}

// Add todo function
function addTodo(todo) {
    todos.push(todo);
    renderTodos();
}

// Toggle todo completion so the item can be crossed off when completed
function toggleTodo() {
    const index = parseInt(this.dataset.index);
    const todoItem = todos[index];
    
    this.classList.toggle('completed');
}

// Event listener for form submission
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission behavior

    const todoText = todoInput.value.trim(); // Get todo text and trim whitespace

    // clears the input box after adding to-do items
    if (todoText !== '') {
        addTodo(todoText);
        todoInput.value = ''; 
    }
});