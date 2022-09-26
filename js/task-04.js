let counterValue = 0;

const decrementBtn = document.querySelector("button[data-action=decrement]");
const incrementBtn = document.querySelector("button[data-action=increment]");
const counterValueEl = document.querySelector("#value");

decrementBtn.addEventListener("click", () => {
  counterValue -= 1;
  counterValueEl.textContent = counterValue;
});

incrementBtn.addEventListener("click", () => {
  counterValue += 1;
  counterValueEl.textContent = counterValue;
});
