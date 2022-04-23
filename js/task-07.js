const fontSizeControl = document.querySelector("#font-size-control");
const someText = document.querySelector("#text");
const currentFontValue = fontSizeControl.value + "px";
someText.style.fontSize = currentFontValue;

const valueControl = (event) => {
  someText.style.fontSize = event.currentTarget.value + "px";
};
fontSizeControl.addEventListener("input", valueControl);
