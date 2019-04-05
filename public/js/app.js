console.log("Client side js loaded");

const weatherForm = document.querySelector("form");

const search = document.querySelector("input");

const messageOne = document.querySelector("#message-1");

const messageTwo = document.querySelector("#message-2");

const messageThree = document.querySelector("#message-3");

const iconWeather = document.querySelector("#weather-icon");

const weatherData = document.querySelector(".weather-data");

weatherForm.addEventListener("submit", event => {
  event.preventDefault();

  const location = search.value;
  console.log(location);
  weatherData.style.display = "flex";

  messageOne.textContent = "Loading ...";
  messageTwo.textContent = "";
  messageThree.textContent = "";

  fetch("/weather?address=" + location).then(response => {
    response.json().then(data => {
      if (data.error) {
        return (messageOne.textContent = data.error);
      }
      search = "";
      messageOne.textContent = data.location;
      messageTwo.textContent = data.forecastSummary;
      messageThree.textContent = data.forecastCurrentTemperature;
      switch (data.forecastIcon) {
        case "rain":
          iconWeather.src = "img/rain-icons.png";
          break;
        case "clear-day":
          iconWeather.src = "img/clear-day-icons.png";
          break;
        case "clear-night":
          iconWeather.src = "img/clear-night-icons.png";
          break;
        case "snow":
          iconWeather.src = "img/snow-icons.png";
          break;
        case "sleet":
          iconWeather.src = "img/sleet-icons.png";
          break;
        case "wind":
          iconWeather.src = "img/wind-icons.png";
          break;
        case "fog":
          iconWeather.src = "img/fog-icons.png";
          break;
        case "cloudy":
          iconWeather.src = "img/cloudy-icons.png";
          break;
        case "partly-cloudy-day":
          iconWeather.src = "img/partly-cloudy-day-icons.png";
          break;
        case "partly-cloudy-night":
          iconWeather.src = "img/partly-cloudy-night-icons.png";
          break;
        case "hail":
          iconWeather.src = "img/hail-icons.png";
          break;
        case "thunderstorm":
          iconWeather.src = "img/thunderstorm-icons.png";
          break;
        case "tornado":
          iconWeather.src = "img/tornado-icons.png";
          break;
      }
    });
  });
});
