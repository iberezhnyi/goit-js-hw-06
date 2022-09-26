const inputEl = document.querySelector("#validation-input");

const onBlurEvent = function (event) {
  const inputValueLength = event.currentTarget.value.length;
  const requiredInputValueLength = Number(event.currentTarget.dataset.length);

  if (inputValueLength === requiredInputValueLength) {
    inputEl.classList.remove("invalid");
    inputEl.classList.add("valid");
  } else {
    inputEl.classList.remove("valid");
    inputEl.classList.add("invalid");
  }
};

inputEl.addEventListener("blur", onBlurEvent);

// Напиши скрипт, який під час втрати фокусу на інпуті(подія blur),
// перевіряє його вміст щодо правильної кількості введених символів.

// Яка кількість смиволів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим,
// якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS - класи valid і invalid,
// які ми вже додали у вихідні файли завдання.
