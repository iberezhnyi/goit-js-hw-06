const refs = {
  input: document.querySelector("#name-input"),
  nameOutput: document.querySelector("#name-output"),
};

const { input, nameOutput } = refs;

input.addEventListener("input", (event) => {
  if (!event.currentTarget.value) {
    return (nameOutput.textContent = "Anonymous");
  }
  nameOutput.textContent = event.currentTarget.value;
});

// =====================================================================

// const refs = {
//   input: document.querySelector("#name-input"),
//   nameOutput: document.querySelector("#name-output"),
// };

// const { input, nameOutput } = refs;

// input.addEventListener("input", onInputChange);
// input.addEventListener("blur", onBlur);

// function onInputChange(evt) {
//   nameOutput.textContent = evt.currentTarget.value;
// }

// function onBlur(evt) {
//   if (evt.currentTarget.value) {
//     return;
//   }
//   nameOutput.textContent = "Anonymous";
// }
