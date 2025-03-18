document.addEventListener("DOMContentLoaded", async () => {document.addEventListener("DOMContentLoaded", async () => {
    // Load content sections
    const loadContent = async (id, file) => {
        try {
            const response = await fetch(file);
            if (!response.ok) throw new Error(`Error loading ${file}: ${response.statusText}`);
            document.getElementById(id).innerHTML = await response.text();
        } catch (error) {
            console.error(`Failed to load ${file}:`, error);
        }
    };

    await Promise.all([
        loadContent("header", "header.html"),
        loadContent("body", "body.html"),
        loadContent("footer", "footer.html")
    ]);

    // Mobile Menu Functionality
    const menuButton = document.getElementById('menuButton');
    const mobileNav = document.getElementById('mobileNav');
    if (menuButton && mobileNav) {
        const backdrop = document.createElement('div');
        backdrop.className = 'menu-backdrop';
        document.body.appendChild(backdrop);

        const toggleMenu = () => {
            const isOpen = mobileNav.classList.contains('open');
            if (isOpen) {
                closeMenu();
            } else {
                openMenu();
            }
        };

        const openMenu = () => {
            mobileNav.classList.add('open');
            backdrop.classList.add('active');
            document.body.classList.add('no-scroll');
        };

        const closeMenu = () => {
            mobileNav.classList.remove('open');
            backdrop.classList.remove('active');
            document.body.classList.remove('no-scroll');
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
        const slideDuration = 7000;

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
});