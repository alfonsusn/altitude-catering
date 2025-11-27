// Simple SPA Router

// Page Templates
const pages = {
    home: () => `
        <!-- Hero Section with Video Background -->
        <section id="home" class="relative min-h-screen flex items-center justify-center text-white pt-20 overflow-hidden">
            <!-- Video Background -->
            <video autoplay loop muted playsinline class="absolute inset-0 w-full h-full object-cover z-0">
                <source src="videos/hero-background.mp4" type="video/mp4">
                <source src="videos/hero-background.webm" type="video/webm">
                <!-- Fallback gradient background -->
            </video>
            
            <!-- Dark Overlay for better text readability -->
            <div class="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
            
            <!-- Content -->
            <div class="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 class="text-3xl md:text-5xl lg:text-7xl font-serif font-bold mb-6 animate-fade-in text-white">
                    Premium Fine Dining<br>
                    <span class="text-white">for Your Special Events</span>
                </h1>
                <p class="text-lg md:text-xl lg:text-2xl mb-8 text-white max-w-3xl mx-auto animate-slide-up">
                    International fine dining catering with exceptional quality and professional service
                </p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
                    <a href="#menu" class="btn-primary text-lg">
                        View Packages
                    </a>
                    <a href="https://wa.me/6281234567890" target="_blank" 
                       class="bg-white hover:bg-gray-100 text-gray-900 px-8 py-3 rounded-full font-semibold transition-all transform hover:scale-105">
                        Contact Us
                    </a>
                </div>
            </div>
        </section>

        <!-- Features Section -->
        <section class="py-20 bg-gray-50">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-16">
                    <h2 class="text-2xl md:text-4xl lg:text-5xl font-serif font-bold mb-4">Why Choose Us?</h2>
                    <p class="text-xl text-gray-600">Our commitment to excellence in every detail</p>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    ${features.map(feature => createFeatureCard(feature)).join('')}
                </div>
            </div>
        </section>

        <!-- Popular Packages Section -->
        <section class="py-20">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-16">
                    <h2 class="text-2xl md:text-4xl lg:text-5xl font-serif font-bold mb-4">Popular Packages</h2>
                    <p class="text-xl text-gray-600">Our customers' favorite selections</p>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    ${packages.filter(item => item.popular).map(item => createMenuCard(item)).join('')}
                </div>
                <div class="text-center mt-12">
                    <a href="#menu" class="btn-primary">View All Packages</a>
                </div>
            </div>
        </section>

        <!-- Testimonials Section -->
        <section class="py-20 bg-gray-50">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-16">
                    <h2 class="text-2xl md:text-4xl lg:text-5xl font-serif font-bold mb-4">Customer Testimonials</h2>
                    <p class="text-xl text-gray-600">What they say about us</p>
                </div>
                <div class="testimonial-carousel gap-6 px-4">
                    ${testimonials.map(testimonial => createTestimonialCard(testimonial)).join('')}
                </div>
            </div>
        </section>

        <!-- CTA Section -->
        <section class="py-20 bg-gradient-to-r from-gold-dark to-gold text-white">
            <div class="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                <h2 class="text-2xl md:text-4xl lg:text-5xl font-serif font-bold mb-6">Ready to Order?</h2>
                <p class="text-xl mb-8">Contact us now for a free consultation and get the best offer</p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="https://wa.me/6281234567890" target="_blank" 
                       class="bg-white hover:bg-gray-100 text-gray-900 px-8 py-3 rounded-full font-semibold transition-all transform hover:scale-105">
                        WhatsApp Now
                    </a>
                    <a href="#contact" 
                       class="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-3 rounded-full font-semibold transition-all">
                        Contact Form
                    </a>
                </div>
            </div>
        </section>
    `,

    menu: () => `
        <section id="menu" class="py-32 bg-gray-50">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-16">
                    <h1 class="text-3xl md:text-5xl lg:text-6xl font-serif font-bold mb-4">Menu & Packages</h1>
                    <p class="text-xl text-gray-600">Premium international fine dining selections for any occasion</p>
                </div>

                <!-- Filter Section with Premium International Categories -->
                <div class="mb-12 bg-white rounded-2xl shadow-lg p-8">
                    <!-- All Menu Button (Prominent) -->
                    <div class="text-center mb-6">
                        <button class="filter-btn active text-lg px-8 py-3" data-category="all" onclick="filterMenu('all')">
                            All Packages
                        </button>
                    </div>
                    
                    <div class="border-t border-gray-200 pt-6">
                        <div class="flex flex-wrap justify-center gap-3">
                            <button class="filter-btn" data-category="buffet" onclick="filterMenu('buffet')">
                                International Buffet
                            </button>
                            <button class="filter-btn" data-category="stall" onclick="filterMenu('stall')">
                                Live Stations
                            </button>
                            <button class="filter-btn" data-category="set-menu" onclick="filterMenu('set-menu')">
                                Set Menu / Plated
                            </button>
                        </div>
                    </div>
                </div>


                <!-- Menu Grid -->
                <div id="menu-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    ${packages.map(item => createMenuCard(item)).join('')}
                </div>
            </div>
        </section>
    `,

    about: () => `
        <section id="about" class="py-32">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <!-- Story Section -->
                <div class="text-center mb-20">
                    <h1 class="text-3xl md:text-5xl lg:text-6xl font-serif font-bold mb-8">About Us</h1>
                    <div class="max-w-4xl mx-auto text-lg text-gray-600 space-y-6 leading-relaxed">
                        <p>
                            Altitude Catering Co was established with a singular vision: to elevate the culinary landscape of Jakarta's events industry. What began as a passionate endeavor in a small kitchen has blossomed into one of the city's most premier catering services, renowned for our unwavering commitment to quality and innovation.
                        </p>
                        <p>
                            For over a decade, we have been the silent partner behind thousands of successful events, from intimate family gatherings to grand corporate galas. We believe that food is not just sustenance, but an experience that brings people together. Our philosophy is rooted in the art of fine dining—where exceptional flavors meet stunning presentation.
                        </p>
                        <p>
                            Our culinary team, led by world-class chefs, meticulously sources the finest local and imported ingredients to craft menus that are both authentic and creative. We pride ourselves on our versatility, offering a diverse range of international cuisines that cater to every palate. Whether it's the delicate precision of Japanese Teppanyaki, the comforting richness of Italian Pasta, or the robust flavors of a Western Buffet, we ensure every dish is a masterpiece.
                        </p>
                        <p>
                            Beyond the food, we are dedicated to providing impeccable service. Our professional staff is trained to anticipate your needs, ensuring that your event runs seamlessly from start to finish. At Altitude Catering Co, we don't just serve food; we create unforgettable memories, one plate at a time.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    `,

    gallery: () => `
        <section id="gallery" class="py-32 bg-gray-50">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-16">
                    <h1 class="text-3xl md:text-5xl lg:text-6xl font-serif font-bold mb-4">Gallery</h1>
                    <p class="text-xl text-gray-600">See our event documentation and menu</p>
                </div>

                <!-- Gallery Filter -->
                <div class="flex flex-wrap justify-center gap-4 mb-12">
                    <button class="filter-btn gallery-filter-btn active" data-gallery-category="all" onclick="filterGallery('all')">All</button>
                    <button class="filter-btn gallery-filter-btn" data-gallery-category="food" onclick="filterGallery('food')">Food</button>
                    <button class="filter-btn gallery-filter-btn" data-gallery-category="event" onclick="filterGallery('event')">Events</button>
                    <button class="filter-btn gallery-filter-btn" data-gallery-category="setup" onclick="filterGallery('setup')">Setup</button>
                </div>

                <!-- Gallery Grid -->
                <div id="gallery-grid" class="gallery-grid">
                    ${galleryImages.map(img => createGalleryItem(img)).join('')}
                </div>
            </div>
        </section>
    `,

    contact: () => `
        <section id="contact" class="py-32 bg-gray-50">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-16">
                    <h1 class="text-3xl md:text-5xl lg:text-6xl font-serif font-bold mb-4">Contact Us</h1>
                    <p class="text-xl text-gray-600">We are ready to help with your special event</p>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <!-- Contact Form -->
                    <div class="bg-white p-8 rounded-xl shadow-lg">
                        <h2 class="text-2xl font-serif font-bold mb-6">Send Message</h2>
                        <form onsubmit="submitContactForm(event)">
                            <div class="mb-4">
                                <label class="block text-gray-700 font-semibold mb-2">Full Name</label>
                                <input type="text" name="name" required class="form-input" placeholder="Your Name">
                            </div>
                            <div class="mb-4">
                                <label class="block text-gray-700 font-semibold mb-2">Email</label>
                                <input type="email" name="email" required class="form-input" placeholder="email@example.com">
                            </div>
                            <div class="mb-4">
                                <label class="block text-gray-700 font-semibold mb-2">Phone Number</label>
                                <input type="tel" name="phone" required class="form-input" placeholder="08xx-xxxx-xxxx">
                            </div>
                            <div class="mb-6">
                                <label class="block text-gray-700 font-semibold mb-2">Message</label>
                                <textarea name="message" required rows="5" class="form-textarea" placeholder="Tell us about your event..."></textarea>
                            </div>
                            <button type="submit" class="btn-primary w-full text-center">Send Message</button>
                        </form>
                    </div>

                    <!-- Contact Information -->
                    <div>
                        <div class="bg-white p-8 rounded-xl shadow-lg mb-6">
                            <h2 class="text-2xl font-serif font-bold mb-6">Contact Information</h2>
                            <div class="space-y-4">
                                <div class="flex items-start">
                                    ${svgIcons.phone}
                                    <div>
                                        <h3 class="font-semibold">Phone</h3>
                                        <p class="text-gray-600">+62 812-3456-7890</p>
                                    </div>
                                </div>
                                <div class="flex items-start">
                                    ${svgIcons.email}
                                    <div>
                                        <h3 class="font-semibold">Email</h3>
                                        <p class="text-gray-600">info@premiumcatering.id</p>
                                    </div>
                                </div>
                                <div class="flex items-start">
                                    ${svgIcons.location}
                                    <div>
                                        <h3 class="font-semibold">Address</h3>
                                        <p class="text-gray-600">Jl. Sudirman No. 123<br>Jakarta Selatan 12345</p>
                                    </div>
                                </div>
                                <div class="flex items-start">
                                    ${svgIcons.time}
                                    <div>
                                        <h3 class="font-semibold">Business Hours</h3>
                                        <p class="text-gray-600">Monday - Friday: 08:00 - 20:00<br>Saturday: 08:00 - 17:00<br>Sunday: Closed</p>
                                    </div>
                                </div>
                            </div>
                            <div class="mt-6">
                                <a href="https://wa.me/6281234567890" target="_blank" 
                                   class="btn-primary w-full text-center block">
                                    ${svgIcons.whatsapp} Chat via WhatsApp
                                </a>
                            </div>
                        </div>

                        <!-- Map -->
                        <div class="bg-white p-4 rounded-xl shadow-lg">
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2167892327947!2d106.82307631476889!3d-6.232823862674879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e945e34b9d%3A0x5371bf2a3aa10eb5!2sJl.%20Jend.%20Sudirman%2C%20Jakarta!5e0!3m2!1sen!2sid!4v1234567890"
                                width="100%" 
                                height="300" 
                                style="border:0; border-radius: 8px;" 
                                allowfullscreen="" 
                                loading="lazy">
                            </iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `
};

// Router Function
function loadPage(page) {
    const app = document.getElementById('app');
    if (pages[page]) {
        app.innerHTML = pages[page]();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// Handle Hash Navigation
function handleNavigation() {
    const hash = window.location.hash.slice(1) || 'home';
    const validPages = ['home', 'menu', 'about', 'gallery', 'contact'];

    if (validPages.includes(hash)) {
        loadPage(hash);
    } else {
        loadPage('home');
    }
}

// Initialize Router
window.addEventListener('hashchange', handleNavigation);
window.addEventListener('load', handleNavigation);
