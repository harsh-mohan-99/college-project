// Signup logic
document.addEventListener("DOMContentLoaded", function () {
    const signupForm = document.querySelector(".signup-form");

    if (signupForm) {
        signupForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const username = document.getElementById("Username").value.trim();
            const password = document.getElementById("password").value;
            const confirmPassword = document.getElementById("Confirm").value;

            if (password !== confirmPassword) {
                alert("Passwords do not match!");
                return;
            }

            const userData = {
                name: name,
                email: email,
                username: username,
                password: password,
            };

            localStorage.setItem("userData", JSON.stringify(userData));

            alert("Signup successful!");
            window.location.href = "login.html";
        });
    }
});

// Login logic
function next() {
    event.preventDefault();

    const inputUsername = document.getElementById("lemail").value.trim();
    const inputPassword = document.getElementById("lpassword").value;

    const savedData = JSON.parse(localStorage.getItem("userData"));

    if (!savedData) {
        alert("No user found. Please sign up first.");
        return;
    }

    if (
        inputUsername === savedData.username &&
        inputPassword === savedData.password
    ) {
        alert("Login successful!");
        window.location.href = "index.html";
    } else {
        alert("Invalid username or password!");
    }
}
