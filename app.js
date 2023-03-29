// console.log("lets")

// Select DOM Elements
const todoInput = document.querySelector('#todoInput')
const todoList = document.querySelector('#todoList')
const addButton = document.querySelector('#addButton')


// Event Listener: Add Todo Button
addButton.addEventListener('click', addTodo)

// Feature: Add Todo
function addTodo(e) {
  e.preventDefault

  const id = todoList.children.length + 1

  const item = todoInput.value
  if (!item) return;

  const newTodo = `
  <li id="${id}">
  <span>${item}</span>
  <button onclick="completeTodo(${id})">Complete</button>
  <button onclick="deleteTodo(${id})">Delete</button>
</li>
`

todoList.innerHTML += newTodo

  todoInput.value = ''
}

function findTodo(id) {
  return todoList.children[id-1]
}
// Feature: Complete Todo
function completeTodo(id) {
  const todoItem = findTodo(id)
const itemSpan = todoItem.firstElementChild
itemSpan.toggleAttribute('done')

const completeStatus = itemSpan.getAttribute('done') === null ? false:true
const completeButton = todoItem.children[1]
completeButton.innerText = completeStatus ? 'Undo' : 'Complete'
}
// Feature: Delete Todo
function deleteTodo(id) {
  const todoItem = findTodo(id)
  todoItem.classList.add('deleted_todo')
}