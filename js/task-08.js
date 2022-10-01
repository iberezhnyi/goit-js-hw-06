const formEl = document.querySelector(".login-form");
formEl.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  const mail = event.currentTarget.elements.email.value;
  const password = event.currentTarget.elements.password.value;
  const formData = { mail, password };

  event.preventDefault();

  if (mail === "" || password === "") {
    alert("Всі поля повинні бути заповнені");
  }

  console.log(formData);

  event.currentTarget.reset();
}
