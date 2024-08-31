//Create a tabbed interface where clicking on tabs displays different content sections without page reload.
var homebutton = document.querySelector("#home");
var aboutbutton = document.querySelector("#about");
var contactbutton = document.querySelector("#contact");

var textofhome = document.querySelector("#hometext");
var textofabout = document.querySelector("#abouttext");
var textofcontact = document.querySelector("#contacttext");

homebutton.addEventListener("click", function () {
  sabaihataa();
  textofhome.style.display = "block";
  textofhome.style.width = "50%";
});
aboutbutton.addEventListener("click", function () {
  sabaihataa();
  textofabout.style.display = "block";
  textofabout.style.width = "50%";
});
contactbutton.addEventListener("click", function () {
  sabaihataa();
  textofcontact.style.display = "block";
  textofcontact.style.width = "50%";
});

function sabaihataa() {
  document.querySelectorAll("h3").forEach(function (h3) {
    h3.style.display = "none";
  });
}
