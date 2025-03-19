document.addEventListener("DOMContentLoaded", () => {
    const signupForm = document.getElementById("signupForm");
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

    signupForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const firstName = document.getElementById("firstName").value;
        const lastName = document.getElementById("lastName").value;
        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        if (!firstName || !lastName || !username || !email || !password) {
            alert("Please fill out all fields.");
            return;
        }

        console.log("Signup Data:", { firstName, lastName, username, email, password });

        alert("Account created successfully! Redirecting to login...");
        window.location.href = "log-in.html";
    });
});