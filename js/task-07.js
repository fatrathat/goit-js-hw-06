const fontSizeControl = document.querySelector("#font-size-control");
const someText = document.querySelector("#text");

const valueControl = (event) => {
  someText.style.fontSize = event.currentTarget.value + "px";
};

fontSizeControl.addEventListener("input", valueControl);
