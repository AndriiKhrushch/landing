const mobileMenu = document.querySelector(".mobile-menu");
const btns = document.querySelectorAll(".menu-btn-open, .menu-btn-close");
const menuLinks = document.querySelectorAll(".mobile-menu__list .link");

const toggleMenu = () => {
  mobileMenu.classList.toggle("is-open");
  btns.forEach((b) => b.classList.toggle("active"));
  document.body.style.overflow = mobileMenu.classList.contains("is-open")
    ? "hidden"
    : "auto";
};

btns.forEach((btn) => btn.addEventListener("click", toggleMenu));

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (mobileMenu.classList.contains("is-open")) {
      toggleMenu();
    }
  });
});
