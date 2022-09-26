const inputEl = document.querySelector("#font-size-control");
const spanTextEl = document.querySelector("#text");

inputEl.addEventListener("change", onFontSizeChange);

function onFontSizeChange(event) {
  spanTextEl.style.fontSize = event.currentTarget.value + "px";
}
