const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");

const TODO_KEY = "todo";
const todoArr = [];

function handleSubmit(event) {
  event.preventDefault();
  const todo = todoInput.value;
  todoInput.value = null; //submit 하면 입력값 = null
  todoArr.push(todo);
  writeTodo(todo);
  saveTodo();
}
function writeTodo(event) {
  const li = document.createElement("li"); //리스트 태그
  todoList.appendChild(li);
  const span = document.createElement("span"); //스팬태그
  li.appendChild(span);
  span.innerText = event;
  const btn = document.createElement("button"); //삭제버튼
  btn.innerText = "❌";
  li.appendChild(btn);
  btn.addEventListener("click", deleteTodo);
}
function deleteTodo(event) {
  //버튼의 부모리스트를 찾으면 -> 삭제하고자하는 해당 li를 찾음 -> 지움가능
  const li = event.target.parentElement;
  li.remove();
}
function saveTodo() {
  //1. localstorage는 string형태로만 저장됨.
  //2. 따라서 array를 통채로 string으로 변환해준다음에 저장해줘야됨!
  //3. JSON.stringify; 통재로 문자열형태로 저장됨
  localStorage.setItem(TODO_KEY, JSON.stringify(todoArr));
  const savedTodo = localStorage.getItem(TODO_KEY);
  //콘솔에 찍어보면 단순 문자열 형태로 찍힘
  console.log(savedTodo); //"["a","b","c"]""
}

todoForm.addEventListener("submit", handleSubmit);
