document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    const inputs = document.querySelectorAll(".input-container input");
    const passwordToggle = document.getElementById("passwordToggle");
    const passwordInput = document.getElementById("password");

    // Toggle password visibility
    passwordToggle.addEventListener("click", () => {
        const isPasswordVisible = passwordInput.type === "text";
        passwordInput.type = isPasswordVisible ? "password" : "text";
        passwordToggle.src = isPasswordVisible ? "password-hide.svg" : "password-show.svg";
    });

    // Prevent autofill styling issues
    inputs.forEach(input => {
        input.addEventListener("input", () => {
            if (input.value) {
                input.classList.add("filled");
            } else {
                input.classList.remove("filled");
            }
        });

        // Fix autofill background issue
        input.addEventListener("animationstart", (e) => {
            if (e.animationName === "onAutoFillStart") {
                input.classList.add("filled");
            }
            if (e.animationName === "onAutoFillCancel") {
                input.classList.remove("filled");
            }
        });
    });

    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const emailOrUsername = document.getElementById("emailOrUsername").value;
        const password = document.getElementById("password").value;

        if (!emailOrUsername || !password) {
            alert("Please fill out all fields.");
            return;
        }

        console.log("Login Data:", { emailOrUsername, password });

        alert("Logged in successfully! Redirecting to the forum...");
        window.location.href = "trends.html"; // Redirect to the forum page
    });
});