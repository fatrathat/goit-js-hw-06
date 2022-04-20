const inputName = document.querySelector("#name-input");
const outputName = document.querySelector("#name-output");

const enterValue = (event) => {
  event.currentTarget.value === ""
    ? (outputName.textContent = "Anonymous")
    : (outputName.textContent = event.currentTarget.value);
};

inputName.addEventListener("input", enterValue);
