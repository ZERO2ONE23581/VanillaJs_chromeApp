const signForm = document.getElementById("signForm");
const usernameInput = signForm.querySelector("input:nth-child(1)");
const signBtn = signForm.querySelector("input:last-child");
const greetingBox = document.getElementById("greeting");
const greeting = greetingBox.querySelector("p");

const USERNAME = "username";

function showGreeting(event) {
  //로그인 숨기기
  signForm.hidden = true;
  greeting.hidden = false;
  greeting.innerText = `Welcome ${event}`;
}
function showSignIn() {
  //로그인 표시
  signForm.hidden = false;
  greeting.hidden = true;
}

//step1. 로그인시 => 인풋저장 + 로그인숨김(+환영문구)
function signIn(event) {
  event.preventDefault(); //브라우저기본기능 막음
  const username = usernameInput.value;
  localStorage.setItem(USERNAME, username); //set은 저장
  showGreeting(username);
}
//step2. 로그인 되있으면 (로컬저장소 유저존재) => 로그인숨김(+환영문구), 안되있으면 => 로그인
const savedUsername = localStorage.getItem(USERNAME); //get은 소환
if (!savedUsername) {
  showSignIn();
  signBtn.addEventListener("click", signIn);
} else {
  showGreeting(savedUsername);
}
