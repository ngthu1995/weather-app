const express = require("express");
const path = require("path");
const hbs = require("hbs");

const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

console.log(__dirname);
console.log(path.join(__dirname), "../public");

const app = express();
const port = process.env.PORT || 3000;

//Define Path for Express config
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

// Set up handlerbars engine and views location
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

//Set up static directory to serve
app.use(express.static(publicDirectoryPath));

app.get("", (req, res) => {
  res.render("index", {
    name: "Thu Nguyen"
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About",
    name: "Thu Nguyen"
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    message:
      "Run into errors? Have questions about the application? Don't hesistate to let me know your opinion to",
    title: "Help",
    name: "Thu Nguyen"
  });
});

app.get("/weather", (req, res) => {
  if (!req.query.address) {
    return res.send({
      error: "Must provide address"
    });
  }

  geocode(
    req.query.address,
    (error, { latitude, longitude, location } = {}) => {
      if (error) {
        return res.send({ error });
      }

      forecast(latitude, longitude, (error, forecastData) => {
        if (error) {
          return res.render({ error });
        }
        res.send({
          forecastSummary: forecastData.daily.data[0].summary,
          forecastCurrentSummary: forecastData.currently.summary,
          forecastCurrentTemperature:
            forecastData.currently["temperature"] + "°F",
          forecastHighTemperature:
            "High : " + forecastData.daily.data[0].temperatureHigh + "°F",
          forecastLowTemperature:
            "Low : " + forecastData.daily.data[0].temperatureLow + "°F",
          forecastPreciptProbability:
            "Precipitation : " +
            forecastData.currently["precipProbability"] +
            "%",
          forecastIcon: forecastData.currently.icon,
          forecastWind: "Wind : " + forecastData.currently.windSpeed + " km/h",
          location,
          address: req.query.address
        });
      });
    }
  );
});

app.get("/products", (req, res) => {
  if (!req.query.search) {
    return res.send({
      error: "Must provide search term"
    });
  }
  console.log(req.query);
  res.send({
    products: []
  });
});

app.get("/help/*", (req, res) => {
  res.render("404", {
    title: "404",
    message: "Help article not found"
  });
});

app.get("*", (req, res) => {
  res.render("404", {
    title: "404",
    message: "Page not found"
  });
});

app.listen(port, () => {
  console.log("Server is up on port " + port);
});
