document.addEventListener("DOMContentLoaded", () => {
    // Mobile Menu Functionality
    const menuButton = document.getElementById('menuButton');
    const mobileNav = document.getElementById('mobileNav');

    if (menuButton && mobileNav) {
        // Create a backdrop for the mobile menu
        const backdrop = document.createElement('div');
        backdrop.className = 'menu-backdrop';
        document.body.appendChild(backdrop);

        // Function to toggle the mobile menu
        const toggleMenu = () => {
            const isOpen = mobileNav.classList.contains('open');
            if (isOpen) {
                closeMenu();
            } else {
                openMenu();
            }
        };

        // Function to open the mobile menu
        const openMenu = () => {
            mobileNav.classList.add('open');
            backdrop.classList.add('active');
            document.body.classList.add('no-scroll');
            menuButton.classList.add('open');
        };

        // Function to close the mobile menu
        const closeMenu = () => {
            setTimeout(() => {
                mobileNav.classList.remove('open');
                backdrop.classList.remove('active');
                document.body.classList.remove('no-scroll');
                menuButton.classList.remove('open');
            }, 100); // Small delay to allow the link to be clicked
        };

        // Event listener for the hamburger menu button
        menuButton.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleMenu();
        });

        // Event listener for the backdrop to close the menu
        backdrop.addEventListener('click', closeMenu);

        // Event listener to close the menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!mobileNav.contains(e.target) && !menuButton.contains(e.target)) {
                closeMenu();
            }
        });

        // Event listener to close the menu when pressing the Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') closeMenu();
        });

        // Event listener for links inside the mobile menu
        mobileNav.addEventListener('click', (e) => {
            if (e.target.tagName === 'A') {
                console.log('Link clicked:', e.target.href); // Log the link being clicked
                closeMenu();
                // Allow the default link behavior
                window.location.href = e.target.href;
            }
        });
    }

    // Hero Slider Functionality
    const heroBg = document.getElementById("hero-bg");
    const heroText = document.getElementById("hero-text");

    if (heroBg && heroText) {
        // Define the slides for the hero section
        const slides = [
            { image: "Game1.png", text: "NOT ALL TREASURE IS SILVER AND GOLD." }, // Replace with your image and text
            { image: "Game2.png", text: "GAMING BRINGS PEOPLE TOGETHER" },        // Replace with your image and text
            { image: "Game3.png", text: "NEVER GIVE UP!" },                       // Replace with your image and text
            { image: "Game4.png", text: "POWER ISN'T EVERYTHING" }                // Replace with your image and text
        ];

        // Preload images for the hero slider
        let imagesLoaded = 0;
        slides.forEach(slide => {
            const img = new Image();
            img.src = slide.image;
            img.onload = () => {
                imagesLoaded++;
                if (imagesLoaded === slides.length) {
                    heroBg.classList.add('loaded');
                }
            };
        });

        // Variables for the hero slider
        let currentIndex = 0;
        const slideDuration = 7000; // Duration for each slide (7 seconds)

        // Function to change the background and text
        function changeBackground() {
            currentIndex = (currentIndex + 1) % slides.length;
            heroBg.style.opacity = "0";
            heroText.style.opacity = "0";

            setTimeout(() => {
                heroBg.style.backgroundImage = `url('${slides[currentIndex].image}')`;
                heroText.innerHTML = `<h1>${slides[currentIndex].text.replace(/(TREASURE|TOGETHER|NEVER|POWER)/g, '<span>$1</span>')}</h1>`;
                heroBg.style.opacity = "1";
                heroText.style.opacity = "1";
            }, 1000); // Delay for the transition
        }

        // Start the hero slider after all images are loaded
        const checkLoad = setInterval(() => {
            if (imagesLoaded === slides.length) {
                clearInterval(checkLoad);
                setInterval(changeBackground, slideDuration);
            }
        }, 100);
    }
});