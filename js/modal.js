console.log("modal.js loaded");

const modal = document.querySelector(".backdrop");
const openBtns = document.querySelectorAll(".modal__btn-open");
const closeBtns = document.querySelectorAll(".modal-btn-close");

const openModal = () => {
  modal.classList.remove("is__hidden");
  document.body.style.overflow = "hidden";
  document.body.classList.add("modal-open");
};

const closeModal = () => {
  modal.classList.add("is__hidden");
  document.body.style.overflow = "auto";
  document.body.classList.remove("modal-open");
};

openBtns.forEach((btn) => btn.addEventListener("click", openModal));
closeBtns.forEach((btn) => btn.addEventListener("click", closeModal));
