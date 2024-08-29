//Create a HTML page with two images and a button. When the button is clicked, swap the source attribute of the image
var img1 = document.querySelector("#first");
var img2 = document.querySelector("#second");

document.querySelector("button").addEventListener("click", function () {
  var src1 = img1.src;
  var src2 = img2.src;

  img1.src = src2;
  img2.src = src1;
});
