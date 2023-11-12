const axios = require("axios");

axios
  .get("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error("There was a problem with the Axios request:", error);
  });

$.ajax({
  url: "https://api.example.com/data",
  method: "GET",
  success: function (data) {
    console.log(data);
  },
  error: function (error) {
    console.error("There was a problem with the AJAX request:", error);
  },
});
