// Current Date

const dateFormat = (date) => {
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let dayIndex = date.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[dayIndex];
  return `${day} ${hours}:${minutes}`;
};

const timeShow = (event) => {
  let h2 = document.querySelector("h2");
  h2.innerHTML = ` ${day} ${hours}`;
};
timeShow();

// Axios

const showTemperature = (response) => {
  let temperature = Math.round(response.data.main.temp);
  console.log(temperature);
  console.log(response);
  let city = response.data.name;
  let message = `It is ${temperature} degrees in ${city}`;
  let h1 = document.querySelector("h1");
  h1.innerHTML = message;
};

// Current Location

const handlePosition = (position) => {
  console.log(position.coords.latitude);
  console.log(position.coords.longitude);
};

navigator.geolocation.getCurrentPosition(handlePosition);

// Button location event listener

let buttonLocationSelector = (event) => {
  event.preventDefault();
  let position = handlePosition;
  let lon = position.coords.longitude;
  let lat = position.coords.latitude;
  let apiLocation =
    "api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=17ad6e67aa629189f73b053634668b20";

  console.log("hello");
};

let buttonLocation = document.querySelector("#current-location");
buttonLocation.addEventListener("click", buttonLocationSelector);

// h1 inner replacement

const search = (event) => {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");
  let h1 = document.querySelector("h1");
  h1.innerHTML = ` ${searchInput.value} `;
  let apiKey = "17ad6e67aa629189f73b053634668b20";
  let units = "imperial";
  let city = document.querySelector("#search-inpug").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(showTemperature);
};

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

const tempChange = (event) => {
  event.preventDefault();
  let fehrenheit = document.querySelector("#tempf");
  fehrenheit.innerHTML = "60 C";
};

let tempSwitch = document.querySelector("#tempf");
tempSwitch.addEventListener("click", tempChange);

const celsiusChange = (event) => {
  event.preventDefault();
  let celsius = document.querySelector("#tempf");
  celsius.innerHTML = "80 F";
};

let celsiusSwitch = document.querySelector("#tempc");
celsiusSwitch.addEventListener("click", celsiusChange);

/*
let heading = document.querySelector('#h1')
heading.innerHTML = "hello"
const showCity = (event) => {
  event.preventDefault();

  alert('kinda working');
}

let buttonDisplay = document.querySelector('button');
buttonDisplay.addEventListener('submit', showCity);




/*
;

let element = document.getElementById('#display-time')
element.innerHTML = "hello";


let apiKey = "17ad6e67aa629189f73b053634668b20";
let units = "imperial";
let city = prompt(location);
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

axios.get(apiUrl).then(showTemperature);





/*

let city = prompt("Enter a city?");
city = city.toLowerCase();
if (weather[city] !== undefined) {
  let humidity = weather[city].humidity;
  let temperature = weather[city].temp;

  let celsiusTemperature = Math.round(temperature);

  let fahrenheitTemperature = Math.round((temperature * 9) / 5 + 32);

  alert(
    `It is currently ${celsiusTemperature}°C (${fahrenheitTemperature}°F) in ${city} with a humidity of ${humidity}%`
  );
} else {
  alert(
    `Sorry we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${city}`
  );
}

*/
