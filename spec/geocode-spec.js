const request = require("request");
const app = require("./../src/app");
const base = "http://localhost:3000";
const forecast = require("../src/utils/forecast");
const geocode = require("../src/utils/geocode");

describe("utils : geocode", () => {
  describe("valid locations", () => {
    const url =
      "https://api.mapbox.com/geocoding/v5/mapbox.places/newyork.json?access_token=pk.eyJ1Ijoibmd0aHUxOTk1IiwiYSI6ImNqdHVyemE0MTAyMGw0YXJ6eDM5c2hwM2UifQ.cOwGWnb_rOCTJIDP9g9Jng";

    it("should return the latitude and longitude if the location is valid", done => {
      request(url, (error, res) => {
        const data = JSON.parse(res.body);
        expect(res.statusCode).toBe(200);
        expect(data.features[0].place_name).toContain("Newyork");
        done();
      });
    });
  });

  describe("invalid location", () => {
    const url =
      "https://api.mapbox.com/geocoding/v5/mapbox.places/!.json?access_token=pk.eyJ1Ijoibmd0aHUxOTk1IiwiYSI6ImNqdHVyemE0MTAyMGw0YXJ6eDM5c2hwM2UifQ.cOwGWnb_rOCTJIDP9g9Jng";

    it("should return error if the location is invalid", done => {
      request(url, (error, res, body) => {
        const data = JSON.parse(res.body);
        expect(res.statusCode).toBe(200);
        expect(data.features.length).toBe(0);
        done();
      });
    });
  });
});
