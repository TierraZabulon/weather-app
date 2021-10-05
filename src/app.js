// Current Date

const formatDate = (date) => {
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

const displayWeatherCondition = (response) => {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temp").innerHTML = Math.round(
    response.data.main.temp
  );

  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector("#description").innerHTML =
    response.data.weather[0].main;
};

const searchCity = (city) => {
  let apiKey = "17ad6e67aa629189f73b053634668b20";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(displayWeatherCondition);
};

const handleSubmit = (event) => {
  event.preventDefault();
  let city = document.querySelector("#search-input").value;
  searchCity(city);
};

const searchLocation = (position) => {
  let apiKey = "17ad6e67aa629189f73b053634668b20";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=imperial`;

  axios.get(apiUrl).then(displayWeatherCondition);
};

const getCurrentLocation = (event) => {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
};

const convertToFahrenheit = (event) => {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temp");
  temperatureElement.innerHTML = 66;
};

const convertToCelsius = (event) => {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temp");
  temperatureElement.innerHTML = 19;
};

let dateElement = document.querySelector("#time-display");
let currentTime = new Date();
dateElement.innerHTML = formatDate(currentTime);

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", handleSubmit);

let currentLocationButton = document.querySelector("#current-location-button");
currentLocationButton.addEventListener("click", getCurrentLocation);

searchCity("New York");

/*



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

// time display
let dateElement = document.querySelector("#time-display");
let currentTime = new Date();
dateElement.innerHTML = dateFormat(currentTime);

// weather display
let displayWeather = (response) => {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temp").innerHTML = response.data.main.temp;
  console.log(response.data.name);
};

// city search
let apiKey = "17ad6e67aa629189f73b053634668b20";
let city = document.querySelector("#search-input").value;
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
console.log(apiUrl);

const search = (event) => {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");
  let h1 = document.querySelector("h1");
  h1.innerHTML = `Searching for ${searchInput.value}`;
  axios.get(apiUrl).then(displayWeather);
};

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

/*
// h1 inner replacement

//display weather and humidity and wind speed display
const displayWeather = (response) => {
  document.querySelector("#tempf").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#search-input").innerHTML = response.data.name;

  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
};

// city search
let units = "imperial";
const searchCity = (city) => {
  let city = "paris";
  let apiKey = "17ad6e67aa629189f73b053634668b20";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  console.log(apiUrl);

  axios.get(apiUrl).then(displayWeather);
};

const searchResult = (event) => {
  event.preventDefault();
  let city = document.querySelector("#search-input").value;
  searchCity(city);
};

// current location

const searchLocation = (position) => {
  let apiKey = "17ad6e67aa629189f73b053634668b20";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=imperial&appid=${apiKey}`;
  axios.get(apiUrl).then(displayWeather);
};

const getCurrentLocation = (event) => {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
};

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", searchResult);

let buttonLocation = document.querySelector("#current-location");
buttonLocation.addEventListener("click", getCurrentLocation);

searchCity("paris");

/*
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

/* commenting out things that didnt work or broke etc


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


const search = (event) => {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");
  let h1 = document.querySelector("h1");
  h1.innerHTML = ` ${searchInput.value} `;
  
  let units = "imperial";
  let city = document.querySelector("#search-inpug").value;
  

  axios.get(apiUrl).then(showTemperature);
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

const timeShow = (event) => {
  let h2 = document.querySelector("h2");
  h2.innerHTML = ` ${days} ${hours}`;
};
timeShow();

*/
