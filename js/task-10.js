function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const controlsElem = document.querySelector("#controls");
const boxContainer = document.querySelector("#boxes");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");

const insertHTMLBox = (width, height) => {
  const div = document.createElement("div");
  div.insertAdjacentHTML(
    "beforeend",
    `<div style="width: ${width}px; height: ${height}px; background-color:${getRandomHexColor()}"></div>`
  );
};

const createBoxes = (amount) => {
  boxContainer.innerHTML = "";

  let l = 0;
  for (let i = 1; i <= amount; i++) {
    insertHTMLBox(30 + l, 30 + l);
    l += 10;
  }
};
const destroyBoxes = () => {
  boxContainer.innerHTML = "";
  controlsElem.firstElementChild.value = "";
};

const eventCreateBoxes = () => {
  createBoxes(controlsElem.firstElementChild.value);
  controlsElem.firstElementChild.value = "";
};
const eventDestroyBoxes = () => {
  destroyBoxes();
};

createBtn.addEventListener("click", eventCreateBoxes);
destroyBtn.addEventListener("click", eventDestroyBoxes);
