const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listOfIngredients = document.querySelector("#ingredients");

const markup = ingredients
  .map((vegetable) => `<li class="item">${vegetable}</li>`)
  .join("");

listOfIngredients.innerHTML = markup;
