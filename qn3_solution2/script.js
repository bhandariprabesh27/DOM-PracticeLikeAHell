//Qn: Create a form with input fields and submit button. Use Javascript to validate the form and display an error message if the input is invalid.
//Solve this question using loop.

var selectForm = document.querySelector("form");
var inps = document.querySelectorAll('input[type="text"]');
var selecth3 = document.querySelector("h3");

selectForm.addEventListener("submit", function (ev) {
  ev.preventDefault();
  for (var i = 0; i < inps.length; i++) {
    if (inps[i].value.trim() === "") {
      selecth3.textContent = "Error: Some fields are empty";
      selecth3.style.color = "red";
      break;
    } else {
      selecth3.textContent = "";
      selecth3.style.color = "black";
    }
  }
});
