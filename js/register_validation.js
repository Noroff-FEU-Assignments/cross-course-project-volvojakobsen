const form = document.querySelector("#register_form");
const fullName = document.querySelector("#fullname");
const fullname_error = document.querySelector("#fullname_error");
const email = document.querySelector("#email");
const emailError = document.querySelector("#email_error");
const username = document.querySelector("#username");
const username_error = document.querySelector("#username_error");
const password = document.querySelector("#password");
const password_error = document.querySelector("#password_error")



function validateContactForm(event) {
    event.preventDefault();
    console.log("hellu")
    if (checkLength(fullname.value, 3)) {
        fullname_error.style.display = "none";
    }
    else {
        fullname_error.style.display = "block";
    }
    if (validateEmail(email.value)) {
        emailError.style.display = "none";
    }
    else {
        emailError.style.display = "block";
    }

    if (checkLength(username.value, 4)) {
        username_error.style.display = "none";
    }
    else {
        username_error.style.display = "block";
    }
    if (checkLength(password.value, 7)) {
        password_error.style.display = "none";
    }
    else {
        password_error.style.display = "block";
    }


}

form.addEventListener("submit", validateContactForm);

function checkLength(value, len) {
    if (value.trim().length > len) {
        return true;
    }
    else {
        return false;
    }
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}