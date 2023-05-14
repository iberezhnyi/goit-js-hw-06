const refs = {
  body: document.querySelector("body"),
  spanColorName: document.querySelector(".color"),
  btnChangeColor: document.querySelector(".change-color"),
};

const { body, spanColorName, btnChangeColor } = refs;

btnChangeColor.addEventListener("click", onBtnChangeColor);

function onBtnChangeColor() {
  const bgColor = getRandomHexColor();

  body.style.backgroundColor = bgColor;
  spanColorName.textContent = bgColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
