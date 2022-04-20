const validationInput = document.querySelector("#validation-input");

const checkValidity = (event) => {
  event.currentTarget.value.length < 6
    ? (validationInput.className = "invalid")
    : (validationInput.className = "valid");
};

validationInput.addEventListener("blur", checkValidity);
