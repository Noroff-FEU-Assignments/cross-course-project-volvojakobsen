const form = document.querySelector("#loginform");
const name = document.querySelector("#username");
const username_error = document.querySelector("#username_error");
const password = document.querySelector("#password");
const password_error = document.querySelector("#password_error")





function validateLoginForm(event) {
    event.preventDefault();
    console.log("hellu")
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

form.addEventListener("submit", validateLoginForm)

function checkLength(value, len) {
    if (value.trim().length > len) {
        return true;
    }
    else {
        return false;
    }
}

function onSubmit() {
    setInterval(() => {
        if (nameError.style.display === "none" && subjectError.style.display === "none" && emailError.style.display === "none" && addressError.style.display === "none") {
            success.style.display = "block", stopInterval();
        }
        else {
            success.style.display = "none", stopInterval();
        }
    }, 100);
}