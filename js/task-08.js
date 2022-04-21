const form = document.querySelector(".login-form");

const handleSubmit = (event) => {
  event.preventDefault();
  const { email, password } = event.currentTarget;
  console.log(
    `${email.name}: ${email.value};\n${password.name}: ${password.value};`
  );
  form.reset();
};

form.addEventListener("submit", handleSubmit);
