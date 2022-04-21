function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const controlsElem = document.querySelector("#controls");
const boxContainer = document.querySelector("#boxes");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");

const createBoxes = (amount) => {
  boxContainer.innerHTML = "";
  let height = 30;
  let width = 30;
  for (let i = 1; i <= amount; i++) {
    boxContainer.insertAdjacentHTML(
      "beforeend",
      `<div style="width: ${width}px; height: ${height}px; background-color:${getRandomHexColor()}">${i}</div>`
    );
    height += 10;
    width += 10;
  }
};
const destroyBoxes = () => {
  boxContainer.innerHTML = "";
  controlsElem.firstElementChild.value = "";
};

const eventCreateBoxes = () => {
  createBoxes(controlsElem.firstElementChild.value);
};
const eventDestroyBoxes = () => {
  destroyBoxes();
};

createBtn.addEventListener("click", eventCreateBoxes);
destroyBtn.addEventListener("click", eventDestroyBoxes);
