const input = document.querySelector("#validation-input");

const REQUIRED_INPUT_LENGTH = Number(input.dataset.length);

input.addEventListener("blur", onInputBlur);

function onInputBlur(evt) {
  const inputValueLength = evt.currentTarget.value.length;

  if (inputValueLength !== REQUIRED_INPUT_LENGTH) {
    input.classList.remove("valid");
    input.classList.add("invalid");
    return;
  }

  input.classList.remove("invalid");
  input.classList.add("valid");
}

// ===========================================

// const input = document.querySelector("#validation-input");

// const REQUIRED_INPUT_LENGTH = Number(input.dataset.length);

// input.addEventListener("blur", onInputBlur);

// function onInputBlur() {
//   if (input.value.length !== REQUIRED_INPUT_LENGTH) {
//     input.classList.remove("valid");
//     input.classList.add("invalid");
//     return;
//   }

//   input.classList.remove("invalid");
//   input.classList.add("valid");
// }
