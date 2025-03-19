document.addEventListener("DOMContentLoaded", () => {
    // Function to handle autofill styling
    function handleAutofill(input) {
        if (input.matches(":-webkit-autofill")) {
            input.style.backgroundColor = "var(--Shade-Black)"; // Set background color
            input.style.color = "var(--Bright-White)"; // Set text color
        }
    }

    // Detect autofill on form inputs
    const inputs = document.querySelectorAll(".form-group input, .form-group textarea");

    inputs.forEach(input => {
        // Check on page load
        handleAutofill(input);

        // Check on input change (for dynamic autofill)
        input.addEventListener("change", () => handleAutofill(input));
    });

    // Donation Buttons
    const donationAmounts = document.querySelectorAll(".donation-amount");
    const customAmountInput = document.getElementById("customAmount");
    const donateCustomButton = document.getElementById("donateCustom");
    const donationMessage = document.getElementById("donationMessage");

    donationAmounts.forEach(button => {
        button.addEventListener("click", () => {
            const amount = button.getAttribute("data-amount");
            donationMessage.textContent = `Thank you for donating $${amount}!`;
        });
    });

    donateCustomButton.addEventListener("click", () => {
        const amount = customAmountInput.value;
        if (amount > 0) {
            donationMessage.textContent = `Thank you for donating $${amount}!`;
        } else {
            donationMessage.textContent = "Please enter a valid amount.";
        }
    });

    // Support Form
    const supportForm = document.getElementById("supportForm");
    const formMessage = document.getElementById("formMessage");

    supportForm.addEventListener("submit", (e) => {
        e.preventDefault();
        formMessage.textContent = "Your message has been sent! We'll get back to you soon.";
        supportForm.reset();
    });
});