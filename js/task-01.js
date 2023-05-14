const itemsListRef = document.querySelectorAll(".item");

console.log("Number of categories: ", itemsListRef.length);

itemsListRef.forEach(({ firstElementChild, lastElementChild }) => {
  console.log("Category: ", firstElementChild.textContent);
  console.log("Elements: ", lastElementChild.children.length);
});

// ===============================================================================

// const itemsListRef = document.querySelectorAll(".item");

// console.log("Number of categories:", itemsListRef.length);

// itemsListRef.forEach((categoryEl) => {
//   const categoriesTitleRef = categoryEl.querySelector("h2");
//   const categoriesItemRef = categoryEl.querySelectorAll("li");

//   console.log("Category:", categoriesTitleRef.textContent);
//   console.log("Elements:", categoriesItemRef.length);
// });
