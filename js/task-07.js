const inputEl = document.querySelector("#font-size-control");
const spanTextEl = document.querySelector("#text");

inputEl.addEventListener("input", onFontSizeChange);

function onFontSizeChange(event) {
  spanTextEl.style.fontSize = event.currentTarget.value + "px";
}

// =======================================================================

// const refs = {
//   input: document.querySelector("#font-size-control"),
//   spanText: document.querySelector("#text"),
// };

// const { input, spanText } = refs;

// input.addEventListener("input", onInput);

// function onInput(evt) {
//   const textSize = evt.currentTarget.value;
//   spanText.style.fontSize = `${textSize}px`;
// }
