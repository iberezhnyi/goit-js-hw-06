const divControlsEl = document.querySelector("#controls");
const inputEl = divControlsEl.querySelector("input");
const createBtnEl = divControlsEl.querySelector("[data-create]");
const destroyBtnEl = divControlsEl.querySelector("[data-destroy]");
const divBoxesEl = document.querySelector("#boxes");

createBtnEl.addEventListener("click", addBoxesToMainDiv);
destroyBtnEl.addEventListener("click", destroyBoxes);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxes(amount) {
  const divAllEl = [];
  let widthEl = 20;
  let heightEl = 20;

  for (let i = 1; i <= amount; i += 1) {
    const divEl = document.createElement("div");

    widthEl += 10;
    heightEl += 10;

    divEl.style.width = `${widthEl}px`;
    divEl.style.height = `${heightEl}px`;
    divEl.style.backgroundColor = getRandomHexColor();

    divAllEl.push(divEl);
  }

  return divAllEl;
}

function addBoxesToMainDiv() {
  return divBoxesEl.append(...createBoxes(inputEl.value));
}

function destroyBoxes() {
  divBoxesEl.innerHTML = "";
}
