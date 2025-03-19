document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    const passwordToggle = document.getElementById("passwordToggle");
    const passwordInput = document.getElementById("password");
    const inputs = document.querySelectorAll(".input-container input");

    // Handle autofill styling
    inputs.forEach(input => {
        const checkAutofill = () => {
            if (input.matches(":-webkit-autofill") || input.matches(":autofill")) {
                input.style.backgroundColor = "transparent";
                input.style.color = "white";
            }
        };

        checkAutofill();
        input.addEventListener("input", checkAutofill);

        input.addEventListener("input", () => {
            input.classList.toggle("filled", input.value.length > 0);
        });

        input.addEventListener("animationstart", e => {
            if (e.animationName === "onAutoFillStart") input.classList.add("filled");
            if (e.animationName === "onAutoFillCancel") input.classList.remove("filled");
        });
    });

    // Toggle password visibility
    passwordToggle.addEventListener("click", () => {
        const isVisible = passwordInput.type === "text";
        passwordInput.type = isVisible ? "password" : "text";
        passwordToggle.src = isVisible ? "password-hide.svg" : "password-show.svg";
    });

    // Form submission handler
    loginForm.addEventListener("submit", e => {
        e.preventDefault();

        const emailOrUsername = document.getElementById("emailOrUsername").value.trim();
        const password = passwordInput.value.trim();

        if (!emailOrUsername || !password) {
            alert("Please fill out all fields.");
            return;
        }

        console.log("Login Data:", { emailOrUsername, password });

        alert("Logged in successfully! Redirecting to the forum...");
        window.location.href = "trends.html"; // Redirect
    });
});
