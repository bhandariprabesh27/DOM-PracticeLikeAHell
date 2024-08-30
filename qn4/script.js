//Qn. Create an unordered list. Allow users to add and remove list items dynamically using buttons.
var additems = document.querySelector("#add");
var removeitems = document.querySelector("#remove");
var inp = document.querySelector("input");
var unorderedlist = document.querySelector("ul");
var list;

additems.addEventListener("click", function () {
  if (inp.value.trim() === "") {
  } else {
    list = document.createElement("li");
    list.textContent = inp.value;
    unorderedlist.appendChild(list);
    inp.value = "";
  }
});
removeitems.addEventListener("click", function () {
  unorderedlist.removeChild(list);
});
