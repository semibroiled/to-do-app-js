let todos = [];

function renderTodo(todo){

    const listTodo  =document.querySelector('.todo-list');

    const isChecked = todo.checked ? 'done' : '' ;

    const oneItem = document.createElement('li');

    oneItem.setAttribute('class', `todo-item ${isChecked}`);

    oneItem.setAttribute('data-key', `todo-id`);

    oneItem.innerHTML = `

    <input id = '${todo.id}' type='checkbox'/>
    
    <label for='${todo.id}' class ='tick'></label>
    
    <span>${todo.todoText}</span>
    
    <button class = 'delete-todo'>
    <svg> <use href='#delete-icon'></use></svg>
    </button>`
    
    listTodo.append(oneItem);
};

function addTodo(todoText) {
    
    
    const todoItem = {
        todoText,
        checked : false,
        id: Date.now()
    };

    todos.push(todoItem);

    
    console.log(todos);
    
    renderTodo(todoItem);
}

const form = document.querySelector('.form-todo')

form.addEventListener('submit', event => {
    
    event.preventDefault();

    const input = document.querySelector('.todo-input');

    const text = input.value.trim();

    if (text !== ''){
        
        addTodo(text);

        input.value = '';

        input.focus();


    }
});

