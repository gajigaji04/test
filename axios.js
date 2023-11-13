const axios = require("axios");

const apiKey = "your-api-key";
const apiUrl = "http://127.0.0.1:5500/index.html";
const param1Value = "value1";
const param2Value = "value2";

axios
  .get(apiUrl, {
    params: {
      param1: param1Value,
      param2: param2Value,
    },
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
  })
  .then((response) => {
    console.log("API Response:", response.data);
  })
  .catch((error) => {
    if (error.response) {
      console.error("API Error - Response:", error.response.data);
      console.error("API Error - Status Code:", error.response.status);
    } else if (error.request) {
      console.error("API Error - No response received:", error.request);
    } else {
      console.error("API Error - General Error:", error.message);
    }
    console.error("Axios Error Config:", error.config);
  });
