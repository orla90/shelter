//Hamburger
const hamburger = document.querySelectorAll(".hamburger");
const navigation = document.querySelector(".navigation");
const navLinks = document.querySelectorAll(".navigation__link");
const header = document.querySelector(".header__wrapper");

function toggleMenu() {
  hamburger.forEach((el) => el.classList.toggle("open"));
  header.classList.toggle("open");
}

hamburger.forEach((el) => el.addEventListener("click", toggleMenu));

function closeMenu(event) {
  if (event.target.classList.contains("navigation__link")) {
    header.classList.remove("open");
    hamburger.forEach((el) => el.classList.remove("open"));
  }
}

navLinks.forEach((el) => el.addEventListener("click", closeMenu));
