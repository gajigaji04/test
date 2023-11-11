document.addEventListener("DOMContentLoaded", function () {
  var button = document.getElementById("btn");
  var paragraph = document.querySelector("p");

  button.addEventListener("click", function () {
    paragraph.textContent = "Worlds";
  });
});
