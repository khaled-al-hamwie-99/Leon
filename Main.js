let nav_button = document.querySelector(".nav-shape");
let ul = document.querySelector(".nav-shape ul");
let link = document.querySelectorAll(".nav-shape ul li a");

nav_button.addEventListener("click", function () {
  ul.style.display = "flex";
  nav_button.style.width = "25px";
});

nav_button.addEventListener("mouseover", function () {
  ul.style.display = "flex";
  nav_button.style.width = "25px";
  nav_button.style.transition = "width 1000ms";
});
document.addEventListener("click", function (e) {
  if (e.target !== nav_button) {
    ul.style.display = "none";
    nav_button.style.width = "15px";
  }
});
