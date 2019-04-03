console.log("Client side js loaded");

fetch("http://localhost:3000/weather?address=rockville").then(response => {
  response.json().then(data => {
    if (data.error) {
      return console.log(data.error);
    }

    console.log(data.location);
    console.log(data.forecast);
  });
});
