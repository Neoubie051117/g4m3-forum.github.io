document.addEventListener("DOMContentLoaded", () => {
    // Initial Fade-in Effect for Content
    const content = document.querySelector('.content');
    if (content) {
        content.style.opacity = 0;
        content.style.transition = "opacity 0.5s ease-in-out";
        setTimeout(() => content.style.opacity = 1, 50);
    }

    // Load Header HTML
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.body.insertAdjacentHTML('afterbegin', data);
            requestAnimationFrame(initializeHeader); // Ensure header elements exist before running scripts
        })
        .catch(error => console.error('Error loading the header:', error));

    function initializeHeader() {
        const menuButton = document.getElementById('menuButton');
        const mobileNav = document.getElementById('mobileNav');
        const navLinks = document.querySelectorAll(".nav-link, .sign-up");
        const logo = document.getElementById('logo');

        if (logo) {
            logo.style.cursor = "pointer"; // Make logo look clickable
            logo.addEventListener("click", () => {
                window.location.href = "index.html"; // Redirect to index.html
            });
        }

        if (menuButton && mobileNav) {
            const backdrop = document.createElement('div');
            backdrop.className = 'menu-backdrop fade-transition';
            document.body.appendChild(backdrop);

            const toggleMenu = () => {
                const isOpen = mobileNav.classList.toggle('open');
                backdrop.classList.toggle('active', isOpen);
                document.body.style.overflow = isOpen ? 'hidden' : 'auto';
                menuButton.classList.toggle('open', isOpen);
            };

            const closeMenu = () => {
                mobileNav.classList.remove('open');
                backdrop.classList.remove('active');
                document.body.style.overflow = 'auto';
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
                if (e.target.tagName === 'A') closeMenu();
            });
        }

        highlightActiveLink(navLinks);
        addPageTransition(navLinks);
    }

    function highlightActiveLink(navLinks) {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        navLinks.forEach(link => {
            if (link.getAttribute('href') === currentPage) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    function addPageTransition(navLinks) {
        navLinks.forEach(link => {
            link.addEventListener("click", (e) => {
                const href = link.getAttribute("href");
                if (href && !href.startsWith("#") && !href.includes("mailto:")) {
                    e.preventDefault();
                    fadeOutAndNavigate(href);
                }
            });
        });
    }

    function fadeOutAndNavigate(url) {
        const content = document.querySelector('.content');
        if (content) {
            content.style.opacity = 0;
            setTimeout(() => window.location.href = url, 500);
        } else {
            window.location.href = url;
        }
    }
});
