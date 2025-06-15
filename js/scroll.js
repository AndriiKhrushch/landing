function blockScroll(e) {
  e.preventDefault();
}

const openModal = () => {
  modal.classList.remove("is__hidden");
  document.body.addEventListener("wheel", blockScroll, { passive: false });
  document.body.addEventListener("touchmove", blockScroll, { passive: false });
};

const closeModal = () => {
  modal.classList.add("is__hidden");
  document.body.removeEventListener("wheel", blockScroll);
  document.body.removeEventListener("touchmove", blockScroll);
};
