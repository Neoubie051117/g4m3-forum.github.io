function toggleMenu() {
    const menu = document.getElementById("mobileNav");
    menu.classList.toggle("open");
    document.body.classList.toggle("no-scroll"); // Prevents background scrolling when menu is open
}

// Close menu when clicking outside
document.addEventListener("click", function(event) {
    const menu = document.getElementById("mobileNav");
    const menuButton = document.querySelector(".hamburger-menu");

    // Check if menu is open and the clicked element is NOT inside the menu or the button
    if (menu.classList.contains("open") && !menu.contains(event.target) && !menuButton.contains(event.target)) {
        menu.classList.remove("open");
        document.body.classList.remove("no-scroll"); // Restore scrolling
    }
});
