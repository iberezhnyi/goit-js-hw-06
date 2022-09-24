const categoriesEl = document.querySelectorAll(".item");

console.log("Number of categories:", categoriesEl.length);

categoriesEl.forEach((categoryEl) => {
  const categoriesTitleEl = categoryEl.querySelector("h2");
  const categoriesItemEl = categoryEl.querySelectorAll("li");

  console.log("Category:", categoriesTitleEl.textContent);
  console.log("Elements:", categoriesItemEl.length);
});
