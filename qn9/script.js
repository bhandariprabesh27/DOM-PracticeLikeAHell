//Build a character counter for a text area or input field which updates in real time as the user types and enforces a character limit.

var txtarea = document.querySelector("textarea");
var counterselect = document.querySelector("#counter");

txtarea.addEventListener("input", function () {
  counterselect.textContent = txtarea.value.length;
});
