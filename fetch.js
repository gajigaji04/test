fetch("http://127.0.0.1:5500/index.html")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    console.log("Data from API:", data);
  })
  .catch((error) => {
    console.error("Fetch Error:", error);
  });
