const mobileMenu = document.querySelector(".backdrop");
const menuBtnOpen = document.querySelector(".modal-btn-open");
const menuBtnClose = document.querySelector(".modal-btn-close");

const toggleModal = () => modal.classList.toggle("is__hidden");

menuBtnOpen.addEventListener("click", toggleModal);
menuBtnClose.addEventListener("click", toggleModal);
