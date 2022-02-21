const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");

function handleSubmit(event) {
  event.preventDefault();
  const todo = todoInput.value;
  todoInput.value = null; //submit 하면 입력값 = null
  writeTodo(todo);
}
function writeTodo(event) {
  //create list
  const li = document.createElement("li");
  todoList.appendChild(li);
  //create span
  const span = document.createElement("span");
  li.appendChild(span);
  span.innerText = event;
  //create delete button
  const btn = document.createElement("button");
  btn.innerText = "❌";
  li.appendChild(btn);
  btn.addEventListener("click", deleteTodo);
}
function deleteTodo(event) {
  //버튼의 부모리스트를 찾으면 -> 삭제하고자하는 해당 li를 찾음 -> 지움가능
  const li = event.target.parentElement;
  li.remove();
}

todoForm.addEventListener("submit", handleSubmit);
