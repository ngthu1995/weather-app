const request = require("request");

const geocode = (address, callback) => {
  const url =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    encodeURIComponent(address) +
    ".json?access_token=pk.eyJ1Ijoibmd0aHUxOTk1IiwiYSI6ImNqdHVyemE0MTAyMGw0YXJ6eDM5c2hwM2UifQ.cOwGWnb_rOCTJIDP9g9Jng";

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to connect to location services!", undefined);
    } else if (body.features.length === 0) {
      callback(
        "Unable to find location. Try a different search term",
        undefined
      );
    } else {
      callback(undefined, {
        latitude: body.features[0].center[1],
        longitude: body.features[0].center[0],
        location: body.features[0].place_name
      });
    }
  });
};

module.exports = geocode;
