const request = require("request");
const app = require("./../src/app");
const base = "http://localhost:3000";

describe("GET /", () => {
  it("should return status code 200", done => {
    request.get(base, (err, res, body) => {
      expect(res.statusCode).toBe(200);
      done();
    });
  });
});

describe("GET /about", () => {
  const url = `${base}/about`;
  it("should return status code 200 and have a title in about page", done => {
    request.get(url, (err, res, body) => {
      expect(res.statusCode).toBe(200);
      expect(res.body).toContain("About Me");
      done();
    });
  });
});

describe("GET /help", () => {
  const url = `${base}/help`;
  it("should return status code 200 and have a title in help page", done => {
    request.get(url, (err, res, body) => {
      expect(res.statusCode).toBe(200);
      expect(res.body).toContain("Help");
      done();
    });
  });
});

describe("GET /help/*", () => {
  const url = `${base}/help/*`;
  it("should return '404' title in the body", done => {
    request.get(url, (err, res, body) => {
      expect(res.body).toContain("404");
      done();
    });
  });
});

describe("GET /*", () => {
  const url = `${base}/*`;
  it("should return status code 404 and have a title '404' in the body", done => {
    request.get(url, (err, res, body) => {
      expect(res.body).toContain("404");
      done();
    });
  });
});
