let loginBtn     = document.getElementById("loginBtn");
let backBtn      = document.getElementById("backBtn");
let nameInput    = document.getElementById("nameInput");
let emailInput   = document.getElementById("emailInput");
let passwordInput= document.getElementById("passwordInput");
let togglePassword = document.getElementById("togglePassword");

let nameError    = document.getElementById("nameError");
let emailError   = document.getElementById("emailError");
let passwordError= document.getElementById("passwordError");

let nameField    = document.getElementById("nameField");
let emailField   = emailInput.parentElement;
let passwordField= passwordInput.parentElement;

let successBox   = document.getElementById("successBox");
let loginForm    = document.getElementById("loginForm");

function isValidEmail(email) {
    return email.includes("@") && email.includes(".");
}

function showError(field, errorSpan) {
    field.classList.add("error-field");
    errorSpan.classList.add("visible");
}

function clearError(field, errorSpan) {
    field.classList.remove("error-field");
    errorSpan.classList.remove("visible");
}

nameInput.oninput = function() {
    if (nameInput.value.trim() !== "") clearError(nameField, nameError);
};

emailInput.oninput = function() {
    if (isValidEmail(emailInput.value.trim())) clearError(emailField, emailError);
};

passwordInput.oninput = function() {
    if (passwordInput.value.length >= 6) clearError(passwordField, passwordError);
};

togglePassword.onclick = function() {
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        togglePassword.classList.remove("fa-eye");
        togglePassword.classList.add("fa-eye-slash");
    } else {
        passwordInput.type = "password";
        togglePassword.classList.remove("fa-eye-slash");
        togglePassword.classList.add("fa-eye");
    }
};

loginBtn.onclick = function() {
    let name     = nameInput.value.trim();
    let email    = emailInput.value.trim();
    let password = passwordInput.value;
    let valid    = true;

    if (name === "") {
        showError(nameField, nameError);
        valid = false;
    } else {
        clearError(nameField, nameError);
    }

    if (email === "" || !isValidEmail(email)) {
        showError(emailField, emailError);
        valid = false;
    } else {
        clearError(emailField, emailError);
    }

    if (password.length < 6) {
        showError(passwordField, passwordError);
        valid = false;
    } else {
        clearError(passwordField, passwordError);
    }

    if (valid) {
        loginForm.style.display = "none";
        successBox.classList.add("visible");
    }
};

backBtn.onclick = function() {
    successBox.classList.remove("visible");
    loginForm.style.display = "block";

    nameInput.value     = "";
    emailInput.value    = "";
    passwordInput.value = "";
};
