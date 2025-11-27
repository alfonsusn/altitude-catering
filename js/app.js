// Main Application Script

// Initialize Application
document.addEventListener('DOMContentLoaded', function () {
    initializeNavigation();
    initializeLightbox();
    initializeScrollEffects();
});

// Navigation Functions
function initializeNavigation() {
    const navbar = document.getElementById('navbar');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    // Function to update navbar background based on page
    function updateNavbarBackground() {
        const hash = window.location.hash.slice(1) || 'home';

        // Only transparent on home page at top
        if (hash === 'home' && window.scrollY <= 50) {
            navbar.classList.remove('scrolled');
        } else {
            // All other pages or scrolled - add dark background
            navbar.classList.add('scrolled');
        }
    }

    // Scroll effect for navbar
    window.addEventListener('scroll', function () {
        updateNavbarBackground();
    });

    // Update on hash change (page navigation)
    window.addEventListener('hashchange', function () {
        updateNavbarBackground();
    });

    // Initial update
    updateNavbarBackground();

    // Mobile menu toggle
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function () {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Close mobile menu when clicking a link
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', function () {
            mobileMenu.classList.add('hidden');
        });
    });

    // Update active nav link based on scroll position
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', function () {
        let current = '';
        const sections = document.querySelectorAll('section[id]');

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (window.pageYOffset >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('text-gold');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('text-gold');
            }
        });
    });
}

// Lightbox Functions
function initializeLightbox() {
    const lightbox = document.getElementById('lightbox');
    const closeBtn = document.getElementById('lightbox-close');
    const prevBtn = document.getElementById('lightbox-prev');
    const nextBtn = document.getElementById('lightbox-next');

    if (closeBtn) {
        closeBtn.addEventListener('click', closeLightbox);
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', () => navigateLightbox(-1));
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => navigateLightbox(1));
    }

    // Close lightbox on ESC key
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && !lightbox.classList.contains('hidden')) {
            closeLightbox();
        } else if (e.key === 'ArrowLeft' && !lightbox.classList.contains('hidden')) {
            navigateLightbox(-1);
        } else if (e.key === 'ArrowRight' && !lightbox.classList.contains('hidden')) {
            navigateLightbox(1);
        }
    });

    // Close on click outside
    if (lightbox) {
        lightbox.addEventListener('click', function (e) {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });
    }
}

// Scroll Effects and Animations
function initializeScrollEffects() {
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements on page load and route changes
    const observeElements = () => {
        const elementsToAnimate = document.querySelectorAll('.menu-card, .testimonial-slide, .gallery-item');
        elementsToAnimate.forEach(element => {
            observer.observe(element);
        });
    };

    // Initial observation
    observeElements();

    // Re-observe on hash change (page navigation)
    window.addEventListener('hashchange', () => {
        setTimeout(observeElements, 100);
    });
}

// Smooth Scroll for Anchor Links
document.addEventListener('click', function (e) {
    if (e.target.matches('a[href^="#"]')) {
        e.preventDefault();
        const targetId = e.target.getAttribute('href');

        if (targetId === '#' || targetId === '') return;

        // Update hash without jumping
        history.pushState(null, null, targetId);

        // Trigger navigation
        handleNavigation();
    }
});

// Testimonial Carousel Auto-scroll
function initializeTestimonialCarousel() {
    const carousel = document.querySelector('.testimonial-carousel');

    if (carousel) {
        let scrollAmount = 0;
        const scrollStep = carousel.offsetWidth / 3;

        setInterval(() => {
            scrollAmount += scrollStep;

            if (scrollAmount >= carousel.scrollWidth - carousel.offsetWidth) {
                scrollAmount = 0;
            }

            carousel.scrollTo({
                left: scrollAmount,
                behavior: 'smooth'
            });
        }, 5000);
    }
}

// Initialize carousel when home page loads
window.addEventListener('hashchange', function () {
    const hash = window.location.hash.slice(1);
    if (hash === 'home' || hash === '') {
        setTimeout(initializeTestimonialCarousel, 500);
    }
});

// Performance Optimization: Lazy Load Images
function lazyLoadImages() {
    const images = document.querySelectorAll('img[loading="lazy"]');

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('fade-in');
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// Call lazy load on page load and navigation
window.addEventListener('load', lazyLoadImages);
window.addEventListener('hashchange', () => {
    setTimeout(lazyLoadImages, 100);
});

// Utility: Debounce function for scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Console log for debugging
console.log('Altitude Catering Co Website Loaded Successfully ✨');
console.log('Total Packages:', packages.length);
console.log('Total Testimonials:', testimonials.length);
console.log('Total Gallery Images:', galleryImages.length);
