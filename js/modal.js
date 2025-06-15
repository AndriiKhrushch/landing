const modal = document.querySelector(".backdrop");
const modalBox = document.querySelector(".modal__box"); // селектор внутреннего блока
let isModalOpen = false;

// Универсальный блокировщик
function preventScroll(e) {
  if (!modalBox.contains(e.target)) {
    e.preventDefault();
  }
}

function openModal() {
  if (isModalOpen) return;
  isModalOpen = true;
  modal.classList.remove("is__hidden");

  document.addEventListener("wheel", preventScroll, { passive: false });
  document.addEventListener("touchmove", preventScroll, { passive: false });
}

function closeModal() {
  if (!isModalOpen) return;
  isModalOpen = false;
  modal.classList.add("is__hidden");

  document.removeEventListener("wheel", preventScroll);
  document.removeEventListener("touchmove", preventScroll);
}

document
  .querySelectorAll(".modal__btn-open")
  .forEach((btn) => btn.addEventListener("click", openModal));
document
  .querySelectorAll(".modal-btn-close")
  .forEach((btn) => btn.addEventListener("click", closeModal));

modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});
