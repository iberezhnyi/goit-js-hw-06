function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.querySelector("body");
const spanColorEl = document.querySelector(".color");
const buttonEl = document.querySelector(".change-color");

buttonEl.addEventListener("click", onColorChange);

function onColorChange() {
  bodyEl.style.backgroundColor = getRandomHexColor();
  spanColorEl.textContent = getRandomHexColor();
}
