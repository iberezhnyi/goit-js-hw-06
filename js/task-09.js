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

// ================================================================

// const refs = {
//   body: document.querySelector("body"),
//   spanColorName: document.querySelector(".color"),
//   btnChangeColor: document.querySelector(".change-color"),
// };

// class ChangeColor {
//   constructor({ body, spanColorName, btnChangeColor }) {
//     this.body = body;
//     this.spanColorName = spanColorName;
//     this.btnChangeColor = btnChangeColor;
//   }

//   addEventListeners() {
//     this.btnChangeColor.addEventListener(
//       "click",
//       this.onBtnChangeColor.bind(this)
//     );
//   }

//   onBtnChangeColor() {
//     const bgColor = this.getRandomHexColor();

//     this.body.style.backgroundColor = bgColor;
//     this.spanColorName.textContent = bgColor;
//   }

//   getRandomHexColor() {
//     return `#${Math.floor(Math.random() * 16777215)
//       .toString(16)
//       .padStart(6, 0)}`;
//   }

//   init() {
//     this.addEventListeners();
//   }
// }

// new ChangeColor(refs).init();
