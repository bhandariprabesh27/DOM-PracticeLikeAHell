//Qn. Build a countdown timer that starts when a button is clicked and updates the display in real time
var heading1 = document.querySelector("h1");
var srt = document.querySelector("#start");
var stp = document.querySelector("#stop");

var intrvl;
srt.addEventListener("click", function () {
  var count = 0;
  intrvl = setInterval(function () {
    count++;
    heading1.textContent = count;
  }, 1000);
});
stp.addEventListener("click", function () {
  clearInterval(intrvl);
});
