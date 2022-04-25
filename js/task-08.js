const form = document.querySelector(".login-form");

const handleSubmit = (event) => {
  event.preventDefault();

  const userEmail = event.currentTarget.elements.email.value;
  const userPassword = event.currentTarget.elements.password.value;
  const userData = { email: userEmail, password: userPassword };
  const keys = Object.keys(userData);

  if (userEmail === "" || userPassword === "") {
    return alert("Всі поля повинні бути заповнені!");
  }

  for (const key of keys) {
    console.log(`${key}: ${userData[key]}`);
  }
  form.reset();
};

form.addEventListener("submit", handleSubmit);
