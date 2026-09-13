const home = document.querySelector(".home");
const saturn = document.querySelector(".saturn-card");
const mars = document.querySelector(".mars-card");
const neptune = document.querySelector(".neptune-card");

home.addEventListener("click", function () {
  window.location.href = "../index.html";
});

saturn.addEventListener("click", function () {
  window.location.href = "../saturn/saturn.html";
});

mars.addEventListener("click", function () {
  window.location.href = "../Mars/mars.html";
});

naptune.addEventListener("click", function () {
  window.location.href = "../Neptune/neptune.html";
});
