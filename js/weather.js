const API_KEY = "d95d3165f53b478762e6cd6f0b1a679e";
//Geolocation API
navigator.geolocation.getCurrentPosition(getLocation, getError);
function getLocation(position) {
  //위도(latitude) 가로선, 경도(longitude) 세로선
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  //fetch를 이용하여 url bring and get! (소환)
  //fetch를 쓰면 내가 url로 굳이 갈필요없이 js가 url을 소환한다!
  fetch(url).then((response) =>
    response.json().then((data) => {
      const city = weatherCont.querySelector("#weatherCont p:first-child");
      const weather = weatherCont.querySelector("#weatherCont p:last-child");
      city.innerText = `Current Location: ${data.name}`;
      weather.innerText = `Today's weather:  ${data.main.temp} ,${data.weather[0].main}`;
    })
  );
}
function getError() {
  alert("Error");
}
