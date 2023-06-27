const submit = document.getElementById("confirm-password");
const button = document.getElementById("submit");

submit.addEventListener("change", () => {
  //store the value of the inputs
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirm-password").value;
  //verifing if the password match
  if (password === confirmPassword) {
    let textConfirmation = document.querySelector("form");
    //verifing if element exist
    let passwordChecked = document.querySelector(".passwordChecked");
    if (passwordChecked !== null) {
      //remove element
      textConfirmation.removeChild(passwordChecked);
      //create element, add text and style
      passwordChecked = document.createElement("p");
      passwordChecked.innerText = "Passwords match";
      passwordChecked.style.color = "green";
      passwordChecked.className = "passwordChecked";
      button.disabled = false;
      textConfirmation.appendChild(passwordChecked);
    } else {
      //create element, add text and style
      passwordChecked = document.createElement("p");
      passwordChecked.innerText = "Passwords match";
      passwordChecked.style.color = "green";
      passwordChecked.className = "passwordChecked";
      button.disabled = false;
      textConfirmation.appendChild(passwordChecked);
    }
  } else {
    let textConfirmation = document.querySelector("form");
    //verifing if element exist
    let passwordChecked = document.querySelector(".passwordChecked");
    if (passwordChecked !== null) {
      //remove element
      textConfirmation.removeChild(passwordChecked);
      //create element, add text and style
      passwordChecked.innerText = "Passwords don't match";
      passwordChecked.style.color = "red";
      document.querySelector("#submit").disabled = true;
      textConfirmation.appendChild(passwordChecked);
    } else {
      //create element, add text and style
      passwordChecked.innerText = "Passwords don't match";
      passwordChecked.style.color = "red";
      document.querySelector("#submit").disabled = true;
      textConfirmation.appendChild(passwordChecked);
    }
  }
});
