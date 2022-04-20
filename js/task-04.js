const incrementBtn = document.querySelector('button[data-action="increment"]');
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const idValue = document.querySelector("#value");
let counterValue = 0;

const btnClick = (event) => {
  event.target.dataset.action === "increment"
    ? (counterValue += 1)
    : (counterValue -= 1);
  idValue.textContent = counterValue;
};

decrementBtn.addEventListener("click", btnClick);
incrementBtn.addEventListener("click", btnClick);
