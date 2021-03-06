function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const controlsElem = document.querySelector("#controls");
const boxContainer = document.querySelector("#boxes");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");

const insertHTMLBox = (width, height) => {
  return `<div style="width: ${width}px; height: ${height}px; background-color:${getRandomHexColor()}"></div>`;
};

const createBoxes = (amount) => {
  boxContainer.innerHTML = "";
  const boxes = [];
  let l = 0;
  for (let i = 1; i <= amount; i++) {
    const createDiv = document.createElement("div");
    createDiv.innerHTML = insertHTMLBox(30 + l, 30 + l);
    l += 10;
    boxes.push(createDiv);
  }
  boxContainer.append(...boxes);
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
