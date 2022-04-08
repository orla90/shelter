//Hamburger
const hamburger = document.querySelectorAll(".hamburger");
const navigation = document.querySelector(".navigation");
const navLinks = document.querySelectorAll(".navigation__link");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const mainHeader = document.querySelector(".header");
const header = document.querySelector(".header__wrapper");
const main = document.querySelector("main");
const footer = document.querySelector(".footer");

function toggleMenu() {
  hamburger.forEach((el) => el.classList.toggle("open"));
  hamburgerMenu.classList.toggle("open");
  mainHeader.classList.toggle("open");
  header.classList.toggle("open");
  main.classList.toggle("open");
  footer.classList.toggle("open");
}

hamburger.forEach((el) => el.addEventListener("click", toggleMenu));

function closeMenu(event) {
  if (event.target.classList.contains("navigation__link")) {
    hamburgerMenu.classList.remove("open");
    hamburger.forEach((el) => el.classList.remove("open"));
    mainHeader.classList.remove("open");
    header.classList.remove("open");
    main.classList.remove("open");
    footer.classList.remove("open");
  }

}

navLinks.forEach((el) => el.addEventListener("click", closeMenu));