document.addEventListener("DOMContentLoaded", () => {
    const signupForm = document.getElementById("signupForm");

    signupForm.addEventListener("submit", (e) => {
        e.preventDefault();

        // Get form values
        const firstName = document.getElementById("firstName").value;
        const lastName = document.getElementById("lastName").value;
        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        // Basic validation
        if (!firstName || !lastName || !username || !email || !password) {
            alert("Please fill out all fields.");
            return;
        }

        // Simulate form submission (replace with actual API call)
        console.log("Signup Data:", {
            firstName,
            lastName,
            username,
            email,
            password,
        });

        alert("Account created successfully! Redirecting to login...");
        window.location.href = "login.html"; // Redirect to login page
    });
});