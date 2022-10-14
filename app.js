// Selectors
const todoInput = document.querySelector('#todo-input');
const todoBtn = document.querySelector('.todo-btn');
const todoList= document.querySelector('.todo-list');


// Event Listners
todoBtn.addEventListener("click",addTodo);
todoList.addEventListener("click",deleteCheck);

// Functions
function addTodo (event) {
    event.preventDefault();
    // todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    // create li element
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    console.log(newTodo)
    // completed btn
    const completedBtn = document.createElement('button');
    completedBtn.innerHTML = '<i class="fas fa-check"></i>';
    completedBtn.classList.add('completed-btn');
    todoDiv.appendChild(completedBtn);
    // trash btn
    const trashBtn = document.createElement('button');
    trashBtn.innerHTML = '<i class="fas fa-trash"></i>';
    trashBtn.classList.add('trash-btn');
    todoDiv.appendChild(trashBtn);
    // append to list
    todoList.appendChild(todoDiv)
    //Clear todo input 
    todoInput.value = ''
}

function deleteCheck (e) {
const item = e.target;
// delete todo
if(item.classList[0] === "trash-btn"){
  const todo =item.parentElement;
  todo.remove();
}
}