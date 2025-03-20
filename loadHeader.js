document.addEventListener("DOMContentLoaded", () => {
    // Initial Fade-in Effect
    document.body.style.opacity = 0;
    document.body.style.transition = "opacity 0.3s ease-in-out";
    setTimeout(() => document.body.style.opacity = 1, 50);

    // Load Header HTML
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.body.insertAdjacentHTML('afterbegin', data);

            // Forcefully Hide Scrollbars While Allowing Scrolling
            const style = document.createElement('style');
            style.innerHTML = `
                body {
                    overflow: hidden !important; /* Prevent flickering */
                }
                body {
                    -ms-overflow-style: none !important;  /* IE and Edge */
                    scrollbar-width: none !important;     /* Firefox */
                    overflow: auto !important; /* Ensure scrolling still works */
                }
                body::-webkit-scrollbar {
                    display: none !important; /* Chrome, Safari, and Opera */
                }
                .fade-transition {
                    opacity: 0;
                    transition: opacity 0.2s ease-in-out;
                }
            `;
            document.head.appendChild(style);

            // Handle Mobile Menu
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
                    if (e.target.tagName === 'A') {
                        closeMenu();
                    }
                });
            }

            // Preload Links for Faster Page Load
            [...navLinks, ...mobileNavLinks].forEach(link => {
                const href = link.getAttribute("href");
                if (href) {
                    const preloadLink = document.createElement("link");
                    preloadLink.rel = "prefetch";
                    preloadLink.href = href;
                    document.head.appendChild(preloadLink);
                }
            });

            // Logo Navigation
            const logo = document.getElementById('logo');
            if (logo) {
                logo.addEventListener('click', (e) => {
                    e.preventDefault();
                    window.location.href = 'index.html';
                });
                logo.addEventListener('keydown', (e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        window.location.href = 'index.html';
                    }
                });
            }

            // Highlight Active Page in Both Desktop and Mobile Navigation
            const currentPage = window.location.pathname.split('/').pop() || 'index.html';
            const normalizeUrl = (url) => url.replace(/\/$/, '').toLowerCase(); // Normalize URL

            const highlightActiveLink = () => {
                [...navLinks, ...mobileNavLinks].forEach(link => {
                    const linkHref = link.getAttribute('href');
                    if (normalizeUrl(linkHref) === normalizeUrl(currentPage)) {
                        link.classList.add('active');
                    } else {
                        link.classList.remove('active'); // Ensure no other links are marked as active
                    }
                });
            };

            // Run the highlight function after the mobile nav is fully loaded
            highlightActiveLink();

            // Re-run the highlight function if the mobile nav is dynamically opened
            if (mobileNav) {
                mobileNav.addEventListener('click', highlightActiveLink);
            }
        })
        .catch(error => console.error('Error loading the header:', error));

    // Smooth Page Transitions
    document.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", (e) => {
            const href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !href.includes("mailto:")) {
                e.preventDefault();
                document.body.style.opacity = 0; // Fade out effect before navigating
                setTimeout(() => {
                    window.location.href = href;
                }, 200);
            }
        });
    });
});