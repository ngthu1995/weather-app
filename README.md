# Anisoptera

Weather app fetching real-time weather using data APIs from mapbox.com and darksky.net, along with Node.js and Express library.

All users are able to see the real-time weather of specific location they search, including summary data, precipitation, wind speed, lowest and highest temperature of the day.

### Completed:

All users can search weather any existing location.
Users get notified if there is any issues with connection, not found location, etc.
The website is responsive & scalable.

### Screenshot:

![Main site](/public/img/weatherapp.png "Screenshot of the application")

### In progress & future:

The cart needs to fetch all info from authenticated user's cart
Users are able to purchase items and show up in history puschase
The users are able to see his/her own info and edit if possible.
The list view should look a little more organized.
The site needs to be responsive and more cohesive.

The demo site can be viewed here: https://hidden-falls-31883.herokuapp.com/

_Admin role demo account: francis4@gmail.com_
_Admin role demo password: password1234_

## Getting Started

Node.js installed
React installed
Nodemon installed

## Technologies & Tools

- NodeJs
- Express
- HTML/CSS
- MongoDB
- Material-UI
- React
- Redux

## Prerequisites

Understanding of MongoDB, Express, React, NodeJS (MERN) along with knowledge of Heroku + Mlab

### Installing

1. Clone the repo to your local machine \
   `$ git clone https://github.com/ngthu1995/troo`

2. Install dependencies on server: \
   `$ cd troo/server` \
   `$ npm install`

3. Install dependencies on client: \
   `$ cd troo/client`\
   `$ npm install`

4. Install nodemon globally \
   `npm install -g nodemon`

5. Start server: \
   `$ npm start`

6. Start client:\
   `$ npm client`

7. Or Run server and client at the same time after installing _concurrently_ \
   `$ npm run dev`

8. App now running on

## Running the tests

Test Driven Development (TDD) is used throughout the application ultitlizing Mocha and Chai.
Tests can be performed by running _npm test_ or _mocha_

Below are two examples of tests:

```
describe("GET /", function() {
  // #1 should return home page

  it("should return home page", function(done) {
    // calling home page api
    request.get("/", (err, res) => {
      expect(200);
      done();
    });
  });
});

describe("GET /abc", function() {
  // #1 should return 404

  it("should return home 404", function(done) {
    // calling home page api with invalid query
    request.get("/abc", (err, res) => {
      expect(404);
      done();
    });
  });
});
```

## Deployment

The site is deployed with Heroku and Mlab adds-on.

## Built With

MERN - The web framework used

## Versioning

Node: 10.15.0
_material-ui/core: 3.9.3_
_babel/runtime": 7.4.3_

## Author

Thu Nguyen - personal website: http://thunguyen.space/

## License

This project is licensed under ThuNguyen@2019.

## Acknowledgments

A big thank to all the articles from medium and helpful guide, support from people around me.
