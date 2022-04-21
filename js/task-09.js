function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyElem = document.querySelector("body");
const changeColorBtn = document.querySelector(".change-color");
const nameOfColor = document.querySelector(".color");

const changeColor = () => {
  bodyElem.style.backgroundColor = getRandomHexColor();
  nameOfColor.textContent = bodyElem.style.backgroundColor;
};

changeColorBtn.addEventListener("click", changeColor);
