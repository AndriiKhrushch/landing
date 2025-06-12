const modal = document.querySelector(".backdrop");
const openBtns = document.querySelectorAll(".modal__btn-open");
const closeBtns = document.querySelectorAll(".modal-btn-close");

const toggleModal = () => modal.classList.toggle("is__hidden");

openBtns.forEach((btn) => btn.addEventListener("click", toggleModal));
closeBtns.forEach((btn) => btn.addEventListener("click", toggleModal));
