//Create a search bar that displays live search results as users type, updating the results without requiring a full page reload.

var inp = document.querySelector("input");

var data = [
  {
    name: "Prabesh",
    src: "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Sandeep",
    src: "https://images.unsplash.com/photo-1529323871863-75303b5737ec?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Kushal",
    src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Aasif",
    src: "https://images.unsplash.com/photo-1530071711643-d02e3fad31a2?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Karan",
    src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Binod",
    src: "https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Sompal",
    src: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Dipendra",
    src: "https://images.unsplash.com/photo-1527082395-e939b847da0d?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

var pers = "";
data.forEach(function (elem) {
  pers += `<div class="person">
            <div class="picture">
              <img
                src="${elem.src}"
                alt=""
              />
            </div>
            <h4>${elem.name}</h4>
          </div>`;
});

document.querySelector(".people").innerHTML = pers;

inp.addEventListener("input", function () {
  var matching = data.filter(function (e) {
    return e.name.startsWith(inp.value);
  });

  var newusers = "";
  matching.forEach(function (elem) {
    newusers += `<div class="person">
              <div class="picture">
                <img
                  src="${elem.src}"
                  alt=""
                />
              </div>
              <h4>${elem.name}</h4>
            </div>`;
  });

  document.querySelector(".people").innerHTML = newusers;
});
