// Get the form
const form = document.getElementById("contactForm");

// Listen for form submission
form.addEventListener("submit", function (event) {

    // Prevent page refresh
    event.preventDefault();

    // Get input values
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    // Get error message elements
    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");
    let messageError = document.getElementById("messageError");

    // Clear previous errors
    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";

    let isValid = true;

    // Name Validation
    if (name === "") {
        nameError.textContent = "Name is required.";
        isValid = false;
    }

    // Email Validation
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (email === "") {
        emailError.textContent = "Email is required.";
        isValid = false;
    }
    else if (!emailPattern.test(email)) {
        emailError.textContent = "Enter a valid email.";
        isValid = false;
    }

    // Message Validation
    if (message.length < 10) {
        messageError.textContent = "Message must contain at least 10 characters.";
        isValid = false;
    }

    // Success
    if (isValid) {
        alert("Form submitted successfully!");
        form.reset();
    }

});
