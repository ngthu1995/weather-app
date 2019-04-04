const request = require("request");
const app = require("./../src/app");
const base = "http://localhost:3000";

const forecast = require("../src/utils/forecast");
const geocode = require("../src/utils/geocode");

describe("utils : forecast", () => {
  describe("valid coordinates", () => {
    const url =
      "https://api.darksky.net/forecast/2a2f162c8c31c2a2af7083c5d6b1d79c/37.8267,-122.4233";
    it("should return the current timezone", done => {
      request(url, (error, res) => {
        const data = JSON.parse(res.body);
        expect(res.statusCode).toBe(200);
        expect(data.timezone).toBe("America/Los_Angeles");
        done();
      });
    });
  });

  describe("invalid coordinates", () => {
    const url =
      "https://api.darksky.net/forecast/2a2f162c8c31c2a2af7083c5d6b1d79c/37.8267,-122.4233fhjg";
    it("should return error", done => {
      request(url, (error, res) => {
        const data = JSON.parse(res.body);
        expect(data.code).toBe(400);
        expect(data.error).toBe("The given location (or time) is invalid.");
        done();
      });
    });
  });
});
