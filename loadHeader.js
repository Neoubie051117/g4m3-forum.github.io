document.addEventListener("DOMContentLoaded", () => {
    // Initial Fade-in Effect
    document.body.style.opacity = 0;
    document.body.style.transition = "opacity 0.5s ease-in-out";
    setTimeout(() => (document.body.style.opacity = 1), 50);

    // Load Header HTML
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.body.insertAdjacentHTML('afterbegin', data);

            // Add Global Styles
            const style = document.createElement('style');
            style.innerHTML = `
                body {
                    overflow: hidden !important;
                    -ms-overflow-style: none !important;
                    scrollbar-width: none !important;
                }
                body::-webkit-scrollbar {
                    display: none !important;
                }
                .fade-transition {
                    opacity: 0;
                    transition: opacity 0.3s ease-in-out;
                }
                img[data-src] {
                    filter: blur(5px);
                    transition: filter 0.3s ease-in-out;
                }
                img.loaded {
                    filter: blur(0);
                }
            `;
            document.head.appendChild(style);

            // Mobile Menu Logic
            const menuButton = document.getElementById('menuButton');
            const mobileNav = document.getElementById('mobileNav');
            const navLinks = document.querySelectorAll(".nav-link, .sign-up");
            const mobileNavLinks = mobileNav ? mobileNav.querySelectorAll("a") : [];

            if (menuButton && mobileNav) {
                const backdrop = document.createElement('div');
                backdrop.className = 'menu-backdrop fade-transition';
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
                    if (e.target.tagName === 'A') closeMenu();
                });
            }

            // Preload Links
            const preloadLinks = [...navLinks, ...mobileNavLinks].filter(link => link.href);
            preloadLinks.forEach(link => {
                const preloadLink = document.createElement("link");
                preloadLink.rel = "prefetch";
                preloadLink.href = link.href;
                document.head.appendChild(preloadLink);
            });

            // Logo Navigation
            const logo = document.getElementById('logo');
            if (logo) {
                logo.addEventListener('click', (e) => {
                    e.preventDefault();
                    fadeOutAndNavigate('index.html');
                });
                logo.addEventListener('keydown', (e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        fadeOutAndNavigate('index.html');
                    }
                });
            }

            // Highlight Active Link
            const currentPage = window.location.pathname.split('/').pop() || 'index.html';
            const normalizeUrl = (url) => url.replace(/\/$/, '').toLowerCase();

            const highlightActiveLink = () => {
                [...navLinks, ...mobileNavLinks].forEach(link => {
                    const linkHref = link.getAttribute('href');
                    link.classList.toggle('active', normalizeUrl(linkHref) === normalizeUrl(currentPage));
                });
            };

            highlightActiveLink();
            if (mobileNav) mobileNav.addEventListener('click', highlightActiveLink);

            // Lazy Load Images
            const images = document.querySelectorAll('img[data-src]');
            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.classList.add('loaded');
                        imageObserver.unobserve(img);
                    }
                });
            }, { threshold: 0.1 });

            images.forEach(img => imageObserver.observe(img));
        })
        .catch(error => console.error('Error loading the header:', error));

    // Smooth Page Transitions
    document.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", (e) => {
            const href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !href.includes("mailto:")) {
                e.preventDefault();
                fadeOutAndNavigate(href);
            }
        });
    });

    // Reusable Function for Fade-out and Navigation
    function fadeOutAndNavigate(url) {
        document.body.style.opacity = 0;
        setTimeout(() => (window.location.href = url), 300);
    }
});