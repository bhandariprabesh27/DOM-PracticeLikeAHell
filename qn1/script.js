//Create an HTML page with a button. When a button is clicked, change the color of the text of pargraph element.

var btn = document.querySelector("button");
var prgph = document.querySelector("p");
btn.addEventListener("click", function () {
  prgph.textContent = "Hello Sir, good Morning, May I come in?";
});
