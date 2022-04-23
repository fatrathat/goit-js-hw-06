const categoryAll = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoryAll.length}\n\n`);

categoryAll.forEach((item) => {
  console.log(
    `Category: ${item.firstElementChild.textContent}\nElements: ${item.lastElementChild.children.length}\n\n`
  );
});
