function showTemp(response) {
  let h1Element = document.querySelector("#temperature");
  h1Element.innerHTML = ` ${Math.round(response.data.main.temp)}°C`;
  let city = document.querySelector("#cityName");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  humidityElement.innerHTML = ` Humidity: ${response.data.main.humidity}%`;
  windElement.innerHTML = `Wind: ${response.data.wind.speed} km/h`;
  city.innerHTML = response.data.name;
  // console.log(response.data);
}

function search(event) {
  event.preventDefault();
  let cityName = document.querySelector("#searchInput");
  let apiUrl = `${endpoints}q=${cityName.value}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showTemp);
}
function display(event) {
  event.preventDefault();
  let temp = document.querySelector("#temperature");
  temp.innerHTML = `10 °C `;
}
function displayf(event) {
  event.preventDefault();
  let temp = document.querySelector("#temperature");
  temp.innerHTML = `20 °F`;
}
function showCurrentTemp(latitude, longitude) {
  let apiUrlCurrent = `${endpoints}lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
  axios.get(apiUrlCurrent).then(showTemp);
}
function showPosition(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  showCurrentTemp(latitude, longitude);
}
function getCurrentPosition() {
  navigator.geolocation.getCurrentPosition(showPosition);
}

let apiKey = "d51a066fdbb7f2a30b8dc4fd0e3725e0";
let endpoints = "https://api.openweathermap.org/data/2.5/weather?";
let units = "metric";
let now = new Date();
let time = document.querySelector("#time");
let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let day = days[now.getDay()];
time.innerHTML = `${day}  ${now.getHours()}:${now.getMinutes()}`;
let form = document.querySelector("#searchBar");
form.addEventListener("submit", search);
let c = document.querySelector("#celsius");
c.addEventListener("click", display);
let f = document.querySelector("#fahrenheit");
f.addEventListener("click", displayf);
let currentButton = document.querySelector("#current");
currentButton.addEventListener("click", getCurrentPosition);
let searchButton = document.querySelector("#searchButton");
searchButton.addEventListener("click", search);
