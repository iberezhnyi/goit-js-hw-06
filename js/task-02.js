const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsEl = document.querySelector("#ingredients");

const ingredientsItems = ingredients.map((ingredient) => {
  const itemEl = document.createElement("li");

  itemEl.classList.add("item");
  itemEl.textContent = ingredient;
  return itemEl;
});

ingredientsEl.append(...ingredientsItems);
