let todos = [];


function renderTodo(todo){

    const listTodo  =document.querySelector('.todo-list');

    const item = document.querySelector(`[data-key='${todo.id}']`)
   
    const isChecked = todo.checked ? 'done' : '' ;
    
    const oneItem = document.createElement('li');
     
    oneItem.setAttribute('class', `todo-item ${isChecked}`);

    oneItem.setAttribute('data-key', todo.id);

    oneItem.innerHTML = `

    <input id = '${todo.id}' type='checkbox'/>
    
    <label for='${todo.id}' class ='tick'></label>
    
    <span>${todo.todoText}</span>
    
    <button class = 'delete-todo'>
    <svg> <use href='#delete-icon'></use></svg>
    </button>`

    
    if (item) {
    listTodo.replaceChild(oneItem, item);
    } else{
    listTodo.append(oneItem);
    }
};



function addTodo(todoText) {
    
    
    const todoItem = {
        todoText,
        checked : false,
        id: Date.now(),
    };

    todos.push(todoItem);

    
    console.log(todos);
    
    renderTodo(todoItem);
};

function toggleDone(key) {
    
    const index = todos.findIndex(item => item.id === Number(key));

    todos[index].checked = !todos[index].checked;
    
    renderTodo(todos[index]);
};


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

const listTodo = document.querySelector('.todo-list');

listTodo.addEventListener ('click', event => {
    if (event.target.classList.contains('tick')) {
        const itemKey = event.target.parentElement.dataset.key;
        toggleDone(itemKey)
    }
})
