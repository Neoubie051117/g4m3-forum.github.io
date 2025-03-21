document.addEventListener("DOMContentLoaded", () => {
    // Mobile Menu Functionality
    const menuButton = document.getElementById('menuButton');
    const mobileNav = document.getElementById('mobileNav');
    const navLinks = document.querySelectorAll(".nav-link, .sign-up");

    if (menuButton && mobileNav) {
        const backdrop = document.createElement('div');
        backdrop.className = 'menu-backdrop';
        document.body.appendChild(backdrop);

        const toggleMenu = () => {
            mobileNav.classList.toggle('open');
            backdrop.classList.toggle('active');
            document.body.classList.toggle('no-scroll');
            menuButton.classList.toggle('open');
        };

        const closeMenu = () => {
            mobileNav.classList.remove('open');
            backdrop.classList.remove('active');
            document.body.classList.remove('no-scroll');
            menuButton.classList.remove('open');
        };

        menuButton.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleMenu();
        });

        backdrop.addEventListener('click', closeMenu);
        document.addEventListener('click', (e) => {
            if (!mobileNav.contains(e.target) && !menuButton.contains(e.target)) {
                closeMenu();
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') closeMenu();
        });

        mobileNav.addEventListener('click', (e) => {
            if (e.target.tagName === 'A') {
                closeMenu();
            }
        });
    }

    // Preload Navigation Links
    navLinks.forEach(link => {
        const href = link.getAttribute("href");
        if (href) {
            const preloadLink = document.createElement("link");
            preloadLink.rel = "prefetch";
            preloadLink.href = href;
            document.head.appendChild(preloadLink);
        }
    });

    // Hero Slider Functionality
    const heroBg = document.getElementById("hero-bg");
    const heroText = document.getElementById("hero-text");

    if (heroBg && heroText) {
        const slides = [
            { image: "Game1.png", text: "NOT ALL TREASURE IS SILVER AND GOLD." },
            { image: "Game2.png", text: "GAMING BRINGS PEOPLE TOGETHER" },
            { image: "Game3.png", text: "NEVER GIVE UP!" },
            { image: "Game4.png", text: "POWER ISN'T EVERYTHING" }
        ];

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

        let currentIndex = 0;
        const slideDuration = 4000;

        function changeBackground() {
            currentIndex = (currentIndex + 1) % slides.length;
            heroBg.style.opacity = "0";
            heroText.style.opacity = "0";

            setTimeout(() => {
                heroBg.style.backgroundImage = `url('${slides[currentIndex].image}')`;
                heroText.innerHTML = `<h1>${slides[currentIndex].text.replace(/(TREASURE|TOGETHER|NEVER|POWER)/g, '<span>$1</span>')}</h1>`;
                heroBg.style.opacity = "1";
                heroText.style.opacity = "1";
            }, 1000);
        }

        const checkLoad = setInterval(() => {
            if (imagesLoaded === slides.length) {
                clearInterval(checkLoad);
                setInterval(changeBackground, slideDuration);
            }
        }, 100);
    }

    // Logo Click Functionality
    const logo = document.getElementById('logo');
    if (logo) {
        logo.addEventListener('click', () => {
            window.location.href = 'index.html';
        });
        logo.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                window.location.href = 'index.html';
            }
        });
    }
});