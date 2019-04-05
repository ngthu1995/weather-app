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
    name: "Tina Nguyen"
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About Me",
    name: "Tina Nguyen"
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    message: "Please help me!",
    title: "Help",
    name: "Tina Nguyen"
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
          forecastCurrentTemperature:
            forecastData.currently["temperature"] + "°",
          forecastHighTemperature:
            "High : " + forecastData.daily.data[0].temperatureHigh,
          forecastLowTemperature:
            "Low : " + forecastData.daily.data[0].temperatureLow,
          forecastPreciptProbability:
            "Precipitation : " + forecastData.currently["precipProbability"],
          forecastIcon: forecastData.currently.icon,
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
