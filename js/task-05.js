const inputName = document.querySelector("#name-input");
const outputName = document.querySelector("#name-output");

const enterValue = (event) => {
  event.target.value === ""
    ? (outputName.textContent = "Anonymous")
    : (outputName.textContent = event.target.value);
};

inputName.addEventListener("input", enterValue);
