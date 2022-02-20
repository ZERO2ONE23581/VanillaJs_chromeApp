const clock = document.getElementById("clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

setInterval(getClock, 1000); //1초간격 함수실행
//setTimeout은 한번 실행되고 끝, setInterval은 매ms간격마다 함수실행.
