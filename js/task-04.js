const refs = {
  decrementBtn: document.querySelector('button[data-action="decrement"]'),
  incrementBtn: document.querySelector('button[data-action="increment"]'),
  valueSpan: document.querySelector("#value"),
};

const { decrementBtn, incrementBtn, valueSpan } = refs;

let counterValue = 0;

incrementBtn.addEventListener("click", () => {
  counterValue += 1;
  valueSpan.textContent = counterValue;
});

decrementBtn.addEventListener("click", () => {
  counterValue -= 1;
  valueSpan.textContent = counterValue;
});
