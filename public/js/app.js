console.log("Client side js loaded");

const weatherForm = document.querySelector("form");

const search = document.querySelector("input");

const messageOne = document.querySelector("#message-1");

const messageTwo = document.querySelector("#message-2");

const messageThree = document.querySelector("#message-3");

const messageFour = document.querySelector("#message-4");

const messageFive = document.querySelector("#message-5");

const messageSix = document.querySelector("#message-6");

const messageSeven = document.querySelector("#message-7");

const messageEight = document.querySelector("#message-8");

const messageError = document.querySelector("#message-error");

const iconWeather = document.querySelector("#weather-icon");

const weatherData = document.querySelector(".weather-data");

weatherForm.addEventListener("submit", event => {
  event.preventDefault();

  const location = search.value;
  console.log(location);

  messageOne.textContent = "Loading ...";
  messageTwo.textContent = "";
  messageThree.textContent = "";
  messageFour.textContent = "";
  messageFive.textContent = "";
  messageSix.textContent = "";
  messageSeven.textContent = "";
  messageEight.textContent = "";
  messageError.textContent = "";

  fetch("/weather?address=" + location).then(response => {
    weatherData.style.display = "none";
    response.json().then(data => {
      if (data.error) {
        return (messageError.textContent = data.error);
      }

      messageOne.textContent = data.location;
      messageTwo.textContent = data.forecastSummary;
      messageThree.textContent = data.forecastCurrentTemperature;
      messageFour.textContent = data.forecastCurrentSummary;
      messageFive.textContent = data.forecastPreciptProbability;
      messageSix.textContent = data.forecastWind;
      messageSeven.textContent = data.forecastLowTemperature;
      messageEight.textContent = data.forecastHighTemperature;

      weatherData.style.display = "flex";

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
        default:
          iconWeather.src = "";
      }
    });
  });
});
