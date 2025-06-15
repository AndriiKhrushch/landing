// form-validation.js

document.addEventListener("DOMContentLoaded", () => {
  const forms = document.querySelectorAll(
    'form[name="contact__form"], form[name="modal__form"]'
  );

  const nameRegex = /^[A-Za-z\u0400-\u04FF'’\-\s]+$/; 
  const phoneRegex = /^\+380\d{9}$/; // 
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 

  forms.forEach((form) => {
    form.addEventListener("submit", function (e) {
      let isValid = true;

      const nameInput = this.elements["user__name"]; 
      const phoneInput = this.elements["user__tel"]; 
      const emailInput = this.elements["user__email"];

      clearError(nameInput);
      clearError(phoneInput);
      clearError(emailInput);

      const nameValue = nameInput.value.trim();
      if (!nameValue) {
        showError(nameInput, "Ім’я не може бути порожнім");
        isValid = false;
      } else if (!nameRegex.test(nameValue)) {
        showError(
          nameInput,
          "Ім’я може містити лише букви, апостроф, дефіс та пробіли"
        );
        isValid = false;
      }

      const phoneValue = phoneInput.value.trim();
      if (!phoneRegex.test(phoneValue)) {
        showError(phoneInput, "Телефон має починатися з +380 і містити 9 цифр");
        isValid = false;
      }

      const emailValue = emailInput.value.trim();
      if (!emailRegex.test(emailValue)) {
        showError(emailInput, "Введіть коректну електронну пошту");
        isValid = false;
      }

      if (!isValid) {
        e.preventDefault();
      }
    });
  });

  function showError(input, message) {
    input.style.borderColor = "red";
    let error = input.parentElement.querySelector(".error-message");
    if (!error) {
      error = document.createElement("div");
      error.className = "error-message";
      error.style.color = "red";
      error.style.fontSize = "12px";
      error.style.marginTop = "4px";
      input.parentElement.appendChild(error);
    }
    error.textContent = message;
  }

  function clearError(input) {
    input.style.borderColor = "";
    const error = input.parentElement.querySelector(".error-message");
    if (error) error.remove();
  }
});
