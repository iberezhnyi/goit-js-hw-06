const refs = {
  input: document.querySelector("#controls input"),
  btnCreate: document.querySelector("button[data-create]"),
  btnDestroy: document.querySelector("button[data-destroy]"),
  divBoxes: document.querySelector("#boxes"),
};

const { input, btnCreate, btnDestroy, divBoxes } = refs;

btnCreate.addEventListener("click", () => createBoxes(Number(input.value)));
btnDestroy.addEventListener("click", () => {
  input.value = "";
  divBoxes.innerHTML = "";
});

function createBoxes(amount) {
  let widthBox = 30;
  let heightBox = 30;
  let boxesStr = "";

  for (let i = 1; i <= amount; i += 1) {
    boxesStr += `<div style="width: ${widthBox}px;
            height: ${heightBox}px;
            background-color: ${getRandomHexColor()};"></div>`;

    widthBox += 10;
    heightBox += 10;
  }

  divBoxes.insertAdjacentHTML("afterbegin", boxesStr);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
