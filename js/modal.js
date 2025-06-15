const modal = document.querySelector(".backdrop");
const openBtns = document.querySelectorAll(".modal__btn-open");
const closeBtns = document.querySelectorAll(".modal-btn-close");

const openModal = () => {
  modal.classList.remove("is__hidden");
  document.body.style.overflow = "hidden";
};

const closeModal = () => {
  modal.classList.add("is__hidden");
  document.body.style.overflow = "auto";
};

// Открываем/закрываем по вашим кнопкам
openBtns.forEach((btn) => btn.addEventListener("click", openModal));
closeBtns.forEach((btn) => btn.addEventListener("click", closeModal));

// Закрытие по клику вне блока .modal
modal.addEventListener("click", (e) => {
  // если клик пришёл именно на фон, а не внутрь .modal
  if (e.target === modal) {
    closeModal();
  }
});
