document.addEventListener("DOMContentLoaded", () => {
    const signupForm = document.getElementById("signupForm");
    const inputs = document.querySelectorAll(".input-container input");
    const passwordToggle = document.getElementById("passwordToggle");
    const passwordInput = document.getElementById("password");

    // Toggle password visibility
    passwordToggle.addEventListener("click", () => {
        const isVisible = passwordInput.type === "text";
        passwordInput.type = isVisible ? "password" : "text";
        passwordToggle.src = isVisible ? "password-hide.svg" : "password-show.svg";
    });

    // Handle autofill styling
    const handleAutofill = (input) => {
        requestAnimationFrame(() => {
            const hasValue = input.value.length > 0;
            input.classList.toggle("filled", hasValue);
            if (hasValue) {
                input.style.backgroundColor = "transparent";
                input.style.color = "white";
            }
        });
    };

    inputs.forEach(input => {
        // Apply autofill fix when the page loads
        handleAutofill(input);

        // Listen for input changes
        input.addEventListener("input", () => handleAutofill(input));

        // Detect autofill using focus and blur events
        input.addEventListener("focus", () => handleAutofill(input));
        input.addEventListener("blur", () => handleAutofill(input));

        // Detect autofill animation (some browsers)
        input.addEventListener("animationstart", (e) => {
            if (e.animationName === "onAutoFillStart") handleAutofill(input);
            if (e.animationName === "onAutoFillCancel") handleAutofill(input);
        });
    });

    signupForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const firstName = document.getElementById("firstName").value.trim();
        const lastName = document.getElementById("lastName").value.trim();
        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = passwordInput.value.trim();

        if (!firstName || !lastName || !username || !email || !password) {
            alert("Please fill out all fields.");
            return;
        }

        console.log("Signup Data:", { firstName, lastName, username, email, password });

        alert("Account created successfully! Redirecting to login...");
        window.location.href = "log-in.html";
    });
});
