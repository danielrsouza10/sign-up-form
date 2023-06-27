const submit = document.getElementById("confirm-password");
submit.addEventListener("change", () => {
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirm-password").value;
  if (password === confirmPassword) {
    let textConfirmation = document.querySelector("form");
    let passwordChecked = document.createElement("p");
    passwordChecked.innerText = "Passwords match";
    passwordChecked.style.color = "green";
    document.querySelector("#submit").disable = true;
    textConfirmation.appendChild(passwordChecked);
  } else {
    let textConfirmation = document.querySelector("form");
    let passwordChecked = document.createElement("p");
    passwordChecked.innerText = "Passwords don't match";
    passwordChecked.style.color = "red";
    document.querySelector("#submit").disable = true;
    textConfirmation.appendChild(passwordChecked);
  }
});