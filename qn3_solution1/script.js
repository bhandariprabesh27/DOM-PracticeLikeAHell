//Qn: Create a form with input fields and submit button. Use Javascript to validate the form and display an error message if the input is invalid.

//Jaba hami forms snga deal garda submit garxam taba page reload hunxa
//hamile khyal rakhnu parxa ki page reload hunuhudaina
//yedi page reload vayo vane JS chaldaina, kinaki JS chalnu vanda paila nai page reload vaisakeko hunxa

var selctForm = document.querySelector("form");
var input1 = document.querySelector("#inp1");
var input2 = document.querySelector("#inp2");
var selecth3 = document.querySelector("h3");

selctForm.addEventListener("submit", function (ev) {
  ev.preventDefault(); // yesle page refresh huna rokxa
  if (input1.value === "" || input2.value === "") {
    selecth3.textContent = "Error: Some fields are blank!";
    selecth3.style.color = "red";
  } else {
    selecth3.textContent = "";
    selecth3.style.color = "black";
  }
});
