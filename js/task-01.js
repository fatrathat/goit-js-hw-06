const categoryAll = document.querySelectorAll("li.item");
console.log(`Number of categories: ${categoryAll.length}\n\n`);

categoryAll.forEach((item) => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.querySelectorAll("li").length}\n\n`);
});
