const form = document.querySelector("#contact_form");
const fullname = document.querySelector("#fullName");
const fullname_error = document.querySelector("#fullname_error");
const email = document.querySelector("#email");
const emailError = document.querySelector("#email_error");
const message = document.querySelector("#message");
const messageError = document.querySelector("#message_error");

function validateContactForm(event) {
    event.preventDefault();
    console.log("hellu")
    if (checkLength(fullname.value, 1)) {
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
    if (checkLength(message.value, 4)) {
        message_error.style.display = "none";
    }
    else {
        message_error.style.display = "block";
    }


}

form.addEventListener("submit", validateContactForm)

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