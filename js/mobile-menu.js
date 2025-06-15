const mobileMenu = document.querySelector(".mobile-menu");
const menuBtnOpen = document.querySelector(".menu-btn-open");

const toggleMenu = () => {
  mobileMenu.classList.toggle("is-open");
  menuBtnOpen.classList.toggle("active");
};

menuBtnOpen.addEventListener("click", toggleMenu);

const menuBtnClose = document.querySelector(".menu-btn-close");
menuBtnClose.addEventListener("click", toggleMenu);
