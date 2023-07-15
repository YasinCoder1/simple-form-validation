/*Getting username and passwords elements*/
const username = document.getElementById("username");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");


/*Function that takes two arguments, to throw an error messege if user did not type the required input. */
const showError = (input, message) => {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  let small = formControl.querySelector("small");
  small.innerText = message;
  small.style.visibility = "visible";
}

/*Function that takes one argument, to let the user pass the Authentication when everything is fine. */
const showSuccess = (input) => {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
  let small = formControl.querySelector("small");
  small.style.visibility = "hidden";
}



const checkUsername = () => {
  username.value === "" ? 
  showError(username, "Username is required") : showSuccess(username);
}

const checkPassword = () => {
  let passLength = password.value.split("");
  if (password.value === "") {
    showError(password, "Password is required");
  } else if (passLength.length < 8) {
    showError(password, "Passwords must be more than 8");
  } else {
    showSuccess(password);
  }
}

const checkConfirmPassword = () => {
  password2.value === "" ? 
  showError(password2, "Please confirm the password") : showSuccess(password2);
}

const checkPasswordsMatch = () => {
  password.value !== password2.value ?
  showError(password2, "Passwords do not match") : null;
}

const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault(); //this prevent the default submit behaviour
  checkUsername();
  checkPassword();
  checkConfirmPassword();
  checkPasswordsMatch();
});