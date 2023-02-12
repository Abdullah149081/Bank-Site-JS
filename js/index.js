// Step 1: add click addEventListener with login Button

document.getElementById("log-btn").addEventListener("click", function () {
  // Note: Must use (.value) to Get Text from an input Field
  // Step :2 get Email input inside Input Field
  const emailField = document.getElementById("email-id").value;

  //   Step:3 Get Password Input Inside Input Field
  const PasswordField = document.getElementById("password-id");
  const password = PasswordField.value;
  console.log(emailField, password);
});
