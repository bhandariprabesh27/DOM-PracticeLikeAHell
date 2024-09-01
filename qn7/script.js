//Display a progress bar that updates in real time, showing the progress of a task, download or form submission.

var pgr = document.querySelector("#progress");
var selecth3 = document.querySelector("h3");
var count = 0;
var intrvl = setInterval(function () {
  if (count === 100) {
    selecth3.style.opacity = "1";
    clearInterval(int);
  }
  count++;
  pgr.style.width = count + "%";
}, 50);
