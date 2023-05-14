const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsListRef = document.querySelector("#ingredients");

const markup = ingredients.map((item) => {
  const li = document.createElement("li");
  li.textContent = `${item}`;
  li.classList.add("item");
  return li;
});

ingredientsListRef.append(...markup);
