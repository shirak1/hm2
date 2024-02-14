const menuBtn = document.querySelector(".mobile-nav button");

function showMobileMenu() {
  const menu = document.querySelector(".mobile-nav ul");
  menu.style.transform = "translateY(0%)";
}
menuBtn.addEventListener("click", showMobileMenu);

function hideMobileMenu() {
  const menu = document.querySelector(".mobile-nav ul");
  menu.style.transform = "translateY(-150%)";
}
const closeMenuBtn = document.querySelector(".mobile-nav ul button");
closeMenuBtn.addEventListener("click", hideMobileMenu);
