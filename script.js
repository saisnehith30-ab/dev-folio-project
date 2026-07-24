 console.log("Script Loaded");
 const form = document.getElementById("contactForm");

if (form) {

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let message = document.getElementById("message").value.trim();

        let nameError = document.getElementById("nameError");
        let emailError = document.getElementById("emailError");
        let messageError = document.getElementById("messageError");

        nameError.textContent = "";
        emailError.textContent = "";
        messageError.textContent = "";

        let isValid = true;

        if (name === "") {
            nameError.textContent = "Name is required.";
            isValid = false;
        }

        let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

        if (email === "") {
            emailError.textContent = "Email is required.";
            isValid = false;
        } else if (!emailPattern.test(email)) {
            emailError.textContent = "Enter a valid email.";
            isValid = false;
        }

        if (message.length < 10) {
            messageError.textContent = "Message must contain at least 10 characters.";
            isValid = false;
        }

        if (isValid) {
            alert("Form submitted successfully!");
            form.reset();
        }

    });

}
const words = [
  "Full Stack Developer",
  "Java Developer",
  "AI Enthusiast",
  "Data Science Student"
];

let wordIndex = 0;
let letterIndex = 0;
let currentWord = "";
let isDeleting = false;

function type() {
    currentWord = words[wordIndex];

    if (!isDeleting) {
        document.getElementById("typing").textContent =
            currentWord.substring(0, letterIndex);

        letterIndex++;

        if (letterIndex > currentWord.length) {
            isDeleting = true;
            setTimeout(type, 1000);
            return;
        }

    } else {
        document.getElementById("typing").textContent =
            currentWord.substring(0, letterIndex);

        letterIndex--;

        if (letterIndex < 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            letterIndex = 0;
        }
    }

    setTimeout(type, isDeleting ? 50 : 120);
}

type();
// Dark Mode with Memory

const darkModeBtn = document.getElementById("darkModeBtn");

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    darkModeBtn.textContent = "☀️ Light Mode";
}

darkModeBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {

        darkModeBtn.textContent = "☀️ Light Mode";
        localStorage.setItem("theme", "dark");

    } else {

        darkModeBtn.textContent = "🌙 Dark Mode";
        localStorage.setItem("theme", "light");

    }

});
// Scroll to Top Button

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
});

topBtn.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});