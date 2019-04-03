const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "https://api.darksky.net/forecast/2a2f162c8c31c2a2af7083c5d6b1d79c/" +
    latitude +
    "," +
    longitude;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather services", undefined);
    } else if (body.error) {
      callback("Unable to find location", undefined);
    } else {
      callback(
        undefined,
        body.daily.data[0].summary +
          " It is currently " +
          body.currently["temperature"] +
          " fahrenheit. There is " +
          body.currently["precipProbability"] +
          " % chance of rains."
      );
    }
  });
};

module.exports = forecast;
