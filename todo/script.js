const ul = document.querySelector('ul');
const todoInput = document.getElementById('input-todo');
const todoAddButton = document.getElementById('add-todo');

const todo = []; 


todoAddButton.addEventListener('click', () => {
    const todoValue = todoInput.value.trim();
    if (todoValue) {
        todo.push(todoValue);
        showTodos();
        todoInput.value = '';
    } else {
        alert('Please enter a valid todo');
    }
});


function showTodos() {
    ul.innerHTML = ''; 
    todo.forEach((todoItem, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <label>
                <input type="checkbox" class="todo-checkbox" data-index="${index}">
                ${todoItem}
            </label>
            <span id="cross" data-index="${index}">×</span>
        `;
        ul.appendChild(li);
    });

    
    const checkboxes = document.querySelectorAll('.todo-checkbox');
    checkboxes.forEach((checkbox) => {
        checkbox.addEventListener('change', handleCheckbox);
    });

    
    const deleteButtons = document.querySelectorAll('#cross');
    deleteButtons.forEach((button) => {
        button.addEventListener('click', handleDelete);
    });
}


function handleCheckbox(event) {
    const index = event.target.dataset.index;
    if (confirm(`Are you sure you have completed "${todo[index]}"?`)) {
        todo.splice(index, 1); 
        showTodos(); 
    } else {
        event.target.checked = false; 
    }
}


function handleDelete(event) {
    const index = event.target.dataset.index;
    todo.splice(index, 1); 
    showTodos(); 
}
