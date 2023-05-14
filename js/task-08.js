const formRef = document.querySelector(".login-form");

formRef.addEventListener("submit", onFormSubmit);

function onFormSubmit(evt) {
  evt.preventDefault();

  const email = evt.currentTarget.elements.email.value;
  const password = evt.currentTarget.elements.password.value;

  if (!email || !password) {
    alert("All fields must be filled");
    return;
  }

  console.log({ email, password });

  evt.currentTarget.reset();
}
