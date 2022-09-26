const refs = {
  input: document.querySelector("#name-input"),
  nameOutput: document.querySelector("#name-output"),
};

refs.input.addEventListener("input", (event) => {
  if (!event.currentTarget.value) {
    return (refs.nameOutput.textContent = "Anonymous");
  }
  refs.nameOutput.textContent = event.currentTarget.value;
});

// Напиши скрипт, який під час набору тексту в інпуті input#name - input(подія input),
// підставляє його поточне значення в span#name - output.
// Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".
