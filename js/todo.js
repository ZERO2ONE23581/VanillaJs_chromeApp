const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");

const TODO_KEY = "todo";
let todoArr = []; //todoArr는 항상 빈 array로 시작하기에 let으로 설정하고 parse처리된 로컬에 저장된 데이터를 다시 할당해준다!

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
}
//4. 저장된걸 get 할때 배열형태로 소환 (JSON.parse)
const savedTodo = localStorage.getItem(TODO_KEY); //string으로 저장 -> 변수할당
console.log(savedTodo);
if (savedTodo !== null) {
  const parsedTodo = JSON.parse(savedTodo); //string -> array형태로 변수에 할당
  //forEach는 배열에있는 item들을 각각 인수삼아 함수를 실행.
  todoArr = parsedTodo; //빈배열을 새배열로 채우기! 안채우면 이전 데이터 저장안됨!
  parsedTodo.forEach(writeTodo);
}

todoForm.addEventListener("submit", handleSubmit);
