const hamburger = document.querySelector(".hamburger svg");
const close = document.querySelector(".close svg");
const mobileNav = document.querySelector(".mobile-links");
const home = document.querySelector(".home");
const models = document.querySelector(".models");
const contact = document.querySelector(".contact");

hamburger.addEventListener("click", () => {
  mobileNav.style.clipPath = "polygon(0 0, 100% 0, 100% 100%, 0% 100%)";
});
close.addEventListener("click", () => {
  mobileNav.style.clipPath = "polygon(95% 2%, 95% 2%, 95% 2%, 95% 2%)";
});
