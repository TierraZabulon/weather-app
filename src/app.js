function formatDate(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  return `${day} ${hours}:${minutes}`;
}

function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let dateElement = document.querySelector("#date");
  let iconElement = document.querySelector("#icon");

  celsiusTemperature = response.data.main.temp;

  temperatureElement.innerHTML = Math.round(celsiusTemperature);
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
  dateElement.innerHTML = formatDate(response.data.dt * 1000);
  iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  iconElement.setAttribute("alt", response.data.weather[0].description);
}

function search(city) {
  let apiKey = "17ad6e67aa629189f73b053634668b20";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayTemperature);
}

function handleSubmit(event) {
  event.preventDefault();
  let cityInputElement = document.querySelector("#city-input");
  search(cityInputElement.value);
}

function displayFahrenheitTemperature(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");

  celsiusLink.classList.remove("active");
  fahrenheitLink.classList.add("active");
  let fahrenheiTemperature = (celsiusTemperature * 9) / 5 + 32;
  temperatureElement.innerHTML = Math.round(fahrenheiTemperature);
}

function displayCelsiusTemperature(event) {
  event.preventDefault();
  celsiusLink.classList.add("active");
  fahrenheitLink.classList.remove("active");
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(celsiusTemperature);
}

let celsiusTemperature = null;

let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", displayFahrenheitTemperature);

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", displayCelsiusTemperature);

search("Tampa");

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
