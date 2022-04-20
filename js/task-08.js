const form = document.querySelector(".login-form");

const handleSubmit = (event) => {
  event.preventDefault();
  const { elements: email, password } = event.currentTarget;

  console.log(email.value + " " + password.value);
  form.reset();
};

form.addEventListener("submit", handleSubmit);
