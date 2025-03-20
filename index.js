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