const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");

const TODO_KEY = "todo";
let todoArr = [];

function handleSubmit(event) {
  event.preventDefault();
  //로컬데이터를 삭제하기위해 각 input value에 id를 부여함
  const todoObj = {
    text: todoInput.value,
    id: Date.now(),
  };
  todoInput.value = null;
  console.log(todoObj);
  todoArr.push(todoObj);
  saveTodo();
  writeTodo(todoObj);
}
function writeTodo(todoObj) {
  const li = document.createElement("li");
  li.id = todoObj.id; //1. li에 아이디 할당, string형태로 할당됨.
  todoList.appendChild(li);
  const span = document.createElement("span");
  li.appendChild(span);
  span.innerText = todoObj.text;
  const btn = document.createElement("button");
  btn.innerText = "❌";
  li.appendChild(btn);
  btn.addEventListener("click", deleteTodo);
}
function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
  //2. filter 메소드
  todoArr = todoArr.filter((item) => item.id !== parseInt(li.id));
  //배열안의 item의 아이디가 == li의 아이디와 같은것을 제외하고 (필터링하고), 배열에 새롭게 할당!
  //filter는 forEach처럼 배열안에있는 item을 인수로 받아 함수에 각각 실행. return true인 값만을 새배열에 저장한다.
  saveTodo(); //로컬에 다시저장
}
//로컬은 string형태로만 저장됨
function saveTodo() {
  localStorage.setItem(TODO_KEY, JSON.stringify(todoArr));
}
//로컬데이터 소환 -> string -> array로 변환후 -> 새배열 저장 -> 함수실행
const savedTodo = localStorage.getItem(TODO_KEY);
if (savedTodo !== null) {
  const parsedTodo = JSON.parse(savedTodo);
  todoArr = parsedTodo; //새배열 저장
  parsedTodo.forEach(writeTodo);
}

todoForm.addEventListener("submit", handleSubmit);

function sexyfilter() {}
