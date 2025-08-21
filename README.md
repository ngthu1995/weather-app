# Anisoptera

Simple weather app fetching real-time weather using data APIs from mapbox.com and darksky.net, along with Node.js and Express library.

All users are able to see the real-time weather of specific location they search, including summary data, precipitation, wind speed, lowest and highest temperature of the day.

Anisoptera means dragonfly in Greek. Dragonfly Weather Changes in temperature are known to influence behaviors such as the time of day that a species normally flies, flight activity levels throughout the day, and the postures of dragonflies. The higher dragonflies fly, the hotter temperature is. The lower dragonflies fly, the higher chance it rains.

### Completed:

All users can search weather any existing location.
Users get notified if there is any issues with connection, not found location, etc.
The website is responsive & scalable.

### Screenshot:

![Main site](/public/img/weatherapp.png "Screenshot of the application")

### Deployment:

## Getting Started

Node.js installed

## Technologies & Tools

- NodeJs
- Express
- HTML/CSS
- DOM Manipulation
- Jasmine

## Prerequisites

Basic understanding of HTM, CSS and Node.js

### Installing

1. Clone the repo to your local machine \
   `$ git clone https://github.com/ngthu1995/weather-app`

2. Install dependencies: \
   `$ npm install`

3. Start server: \
   `$ npm start`

4. Run test: \
   `$ npm test`

5. App now running on localhost:3000

## Running the tests

Test Driven Development (TDD) is used throughout the application ultitlizing Jasmine.
Tests can be performed by running _npm test_

Below are two examples of tests:

```
describe("utils : geocode", () => {
  describe("valid locations", () => {
    const url =
      "https://api.mapbox.com/geocoding/v5/mapbox.places/seattle.json?access_token=pk.eyJ1Ijoibmd0aHUxOTk1IiwiYSI6ImNqdHVyemE0MTAyMGw0YXJ6eDM5c2hwM2UifQ.cOwGWnb_rOCTJIDP9g9Jng";

    it("should return the latitude and longitude if the location is valid", done => {
      request(url, (error, res) => {
        const data = JSON.parse(res.body);
        expect(res.statusCode).toBe(200);
        expect(data.features[0].place_name).toContain("Seattle");
        done();
      });
    });
  });

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
```

## Deployment

The site is deployed with Heroku.

## Built With

Node.js

## Versioning

- Node: 10.15.0
- Express: 4.16.4
- hbs: 4.0.3
- request: 2.88.0
- jasmine": 3.0.0

## Author

Thu Nguyen - personal website: http://thunguyen.space/

## License

This project is licensed under ThuNguyen@2019.

## Acknowledgments

A big thank to all the articles from medium and helpful guide, support from people around me.
