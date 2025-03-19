document.addEventListener("DOMContentLoaded", () => {
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