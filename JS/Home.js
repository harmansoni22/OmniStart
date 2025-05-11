document.addEventListener("DOMContentLoaded", () => {
    // Theme Toggle Functionality
    const themeToggle = document.getElementById("theme-toggle");
    const themeIcon = themeToggle.querySelector("i");

    // Check for saved theme preference or use default
    const currentTheme = localStorage.getItem("theme") || "light";

    // Apply the saved theme on page load
    if (currentTheme === "dark") {
        document.body.setAttribute("data-theme", "dark");
        themeIcon.classList.remove("bi-sun-fill");
        themeIcon.classList.add("bi-moon-fill");
    };

    // Toggle theme when button is clicked
    themeToggle.addEventListener("click", () => {
        if (document.body.getAttribute("data-theme") === "dark") {
            // Switch to light theme
            document.body.removeAttribute("data-theme");
            themeIcon.classList.remove("bi-moon-fill");
            themeIcon.classList.add("bi-sun-fill");
            localStorage.setItem("theme", "light");

            let startupLine = document.getElementById("startupLine");
            startupLine.classList.remove("text-light");

            let aLine = document.getElementById("aLine");
            aLine.classList.remove("text-light");

            let body = document.getElementsByTagName("body")[0];
            body.style.backgroundColor = "white";

            let header = document.getElementsByTagName("header")[0];
            header.classList.remove("bg-dark");
            header.classList.add("bg-light");

            let navbar = document.getElementsById("navbar");
            navbar.classList.remove("bg-dark");
            navbar.classList.add("bg-light");
        } else {
            // Switch to dark theme
            document.body.setAttribute("data-theme", "dark");
            themeIcon.classList.remove("bi-sun-fill");
            themeIcon.classList.add("bi-moon-fill");
            localStorage.setItem("theme", "dark");

            let startupLine = document.getElementById("startupLine");
            startupLine.classList.add("text-light");

            let aLine = document.getElementById("aLine");
            aLine.classList.add("text-light");

            let body = document.getElementsByTagName("body")[0];
            body.style.backgroundColor = "black";

            let header = document.getElementsByTagName("header")[0];
            header.classList.remove("bg-light");
            header.classList.add("bg-dark");

            let navbar = document.getElementsById("navbar");
            navbar.classList.remove("bg-light");
            navbar.classList.add("bg-dark");
        };
    });
});

function Founder(name, email , mobileNumber , startupName) {
    this.name = name;
    this.email = email;
    this.mobileNumber = mobileNumber;
    this.startupName = startupName;
};

var Name = document.getElementById("founderNameInput");
var email = document.getElementById("emailInput");
var mobileNumber = document.getElementById("mobileNumberInput");
var startupName = document.getElementById("startupNameInput");

const founderNameSubmitButton = document.getElementById("founderNameSubmitBtn");
founderNameSubmitButton.addEventListener("click", function(event) {
    event.preventDefault();
    const founder = new Founder(Name.value, email.value, mobileNumber.value, startupName.value);

    if (founder.name.trim() === '' || founder.email.trim() === '' || 
    founder.mobileNumber.trim() === '' || founder.startupName.trim() === '') {
        alert('Enter complete details!');
        return false;
    } else if (founder.mobileNumber.length != 10 || isNaN(founder.mobileNumber)) {
        alert('Enter valid mobile number!');
        return false;
    } else if (founder.email.indexOf('@') === -1 || founder.email.indexOf('.') === -1) {
        alert('Enter valid email!');
        return false;
    } else if (founder.startupName.length < 3) {
        alert('Startup name should be at least 3 characters long!');
        return false;
    } else if (founder.mobileNumber == parseInt('1234567890') || founder.mobileNumber == parseInt('9876543210')) {
        alert('Enter valid mobile number!');
        return false;
    }

    alert('Details submitted successfully! Mr. ' + founder.name);

    let inputBox = document.getElementById("inputBox");
    inputBox.style.display = "none";

    let homePageContainer = document.getElementById("homePageContainer");
    homePageContainer.style.display = "block";

    let welcomeLine = document.getElementById("welcomeLine");
    welcomeLine.innerHTML = "Welcome " + founder.name + "!";

    let startupLine = document.getElementById("startupLine");
    startupLine.innerHTML = "Scale " + founder.startupName + " with us!";
});