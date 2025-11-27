// Reusable Components

// Create Menu Card Component
function createMenuCard(item) {
    const priceText = item.perPax ? `${formatCurrency(item.price)}/pax` : formatCurrency(item.price);

    // Create list of items if available
    let itemsListHtml = '';
    if (item.items && item.items.length > 0) {
        itemsListHtml = `
            <div class="mt-4 mb-4 bg-gray-50 p-3 rounded-lg">
                <h4 class="font-semibold text-sm mb-2 text-gray-700">Package Includes:</h4>
                <ul class="text-sm text-gray-600 space-y-1 list-disc list-inside">
                    ${item.items.map(i => `<li>${i}</li>`).join('')}
                </ul>
            </div>
        `;
    }

    return `
        <div class="menu-card bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all h-full flex flex-col">
            <div class="relative overflow-hidden h-64 flex-shrink-0">
                <img src="${item.image}" alt="${item.name}" class="w-full h-full object-cover">
                ${item.popular ? '<span class="badge badge-gold absolute top-4 right-4">Popular</span>' : ''}
            </div>
            <div class="p-6 flex flex-col flex-grow">
                <span class="text-sm text-gray-500 mb-2 block">${categories[item.category]}</span>
                <h3 class="text-2xl font-serif font-bold mb-2">${item.name}</h3>
                <p class="text-gray-600 mb-2">${item.description}</p>
                
                ${itemsListHtml}
                
                <div class="mt-auto pt-4 flex justify-between items-center border-t border-gray-100">
                    <span class="text-xl font-bold gradient-text">${priceText}</span>
                    <button onclick="openOrderForm('${item.name}')" class="btn-primary text-sm px-4 py-2">
                        Order Now
                    </button>
                </div>
            </div>
        </div>
    `;
}

// Create Testimonial Card Component
function createTestimonialCard(testimonial) {
    const starSVG = `<svg class="w-5 h-5 inline-block text-gold fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>`;
    const stars = starSVG.repeat(testimonial.rating);

    return `
        <div class="testimonial-slide min-w-full md:min-w-[48%] lg:min-w-[32%] bg-white p-8 rounded-xl shadow-lg">
            <div class="flex items-center mb-4">
                <img src="${testimonial.image}" alt="${testimonial.name}" class="w-16 h-16 rounded-full object-cover mr-4">
                <div>
                    <h4 class="font-bold text-lg">${testimonial.name}</h4>
                    <p class="text-sm text-gray-500">${testimonial.role}</p>
                </div>
            </div>
            <div class="star-rating mb-3">${stars}</div>
            <p class="text-gray-700 italic">"${testimonial.text}"</p>
        </div>
    `;
}

// Create Gallery Item Component
function createGalleryItem(image) {
    return `
        <div class="gallery-item" onclick="openLightbox('${image.src}', ${image.id})">
            <img src="${image.src}" alt="${image.alt}" loading="lazy">
            <div class="gallery-overlay-text">
                <p>${image.alt}</p>
            </div>
        </div>
    `;
}

// Create Team Member Card
function createTeamCard(member) {
    return `
        <div class="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <img src="${member.image}" alt="${member.name}" class="w-full h-80 object-cover">
            <div class="p-6 text-center">
                <h3 class="text-xl font-serif font-bold mb-2">${member.name}</h3>
                <p class="text-gold font-semibold mb-2">${member.role}</p>
                <p class="text-gray-600">${member.description}</p>
            </div>
        </div>
    `;
}

// Create Feature Card
function createFeatureCard(feature) {
    return `
        <div class="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            ${svgIcons[feature.icon] || ''}
            <h3 class="text-xl font-serif font-bold mb-3">${feature.title}</h3>
            <p class="text-gray-600">${feature.description}</p>
        </div>
    `;
}

// Filter Menu Items
function filterMenu(category) {
    // Use packages instead of menuItems
    const filtered = category === 'all'
        ? packages
        : packages.filter(item => item.category === category);

    const menuGrid = document.getElementById('menu-grid');
    if (menuGrid) {
        menuGrid.innerHTML = filtered.map(item => createMenuCard(item)).join('');
        menuGrid.classList.add('fade-in');
    }

    // Update active filter button
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-category="${category}"]`)?.classList.add('active');
}

// Lightbox Functions
let currentLightboxIndex = 0;
let currentGalleryCategory = 'all';

function openLightbox(src, index) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');

    currentLightboxIndex = index - 1; // Adjust for array index
    lightboxImg.src = src;
    lightbox.classList.remove('hidden');
    lightbox.classList.add('flex');

    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.add('hidden');
    lightbox.classList.remove('flex');
    document.body.style.overflow = 'auto';
}

function navigateLightbox(direction) {
    const images = currentGalleryCategory === 'all'
        ? galleryImages
        : galleryImages.filter(img => img.category === currentGalleryCategory);

    currentLightboxIndex += direction;

    if (currentLightboxIndex < 0) {
        currentLightboxIndex = images.length - 1;
    } else if (currentLightboxIndex >= images.length) {
        currentLightboxIndex = 0;
    }

    const lightboxImg = document.getElementById('lightbox-img');
    lightboxImg.src = images[currentLightboxIndex].src;
}

// Filter Gallery
function filterGallery(category) {
    currentGalleryCategory = category;
    const filtered = category === 'all'
        ? galleryImages
        : galleryImages.filter(img => img.category === category);

    const galleryGrid = document.getElementById('gallery-grid');
    if (galleryGrid) {
        galleryGrid.innerHTML = filtered.map(img => createGalleryItem(img)).join('');
        galleryGrid.classList.add('fade-in');
    }

    // Update active filter button
    document.querySelectorAll('.gallery-filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-gallery-category="${category}"]`)?.classList.add('active');
}

// Open Order Form (Modal or WhatsApp)
function openOrderForm(itemName) {
    const message = `Hello, I would like to order the ${itemName} package. Please provide more information.`;
    const whatsappUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

// Email Form Submission using EmailJS
function submitContactForm(event) {
    event.preventDefault();

    const form = event.target;
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;

    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span class="loader inline-block"></span>';

    // Get form data
    const formData = {
        name: form.querySelector('[name="name"]').value,
        email: form.querySelector('[name="email"]').value,
        phone: form.querySelector('[name="phone"]').value,
        message: form.querySelector('[name="message"]').value
    };

    // Simulate email sending (Replace with actual EmailJS code)
    setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;

        alert('Thank you! Your message has been sent. We will contact you shortly.');
        form.reset();

        // Actual EmailJS implementation would look like:
        // emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData)
        //     .then(() => { /* success */ })
        //     .catch(() => { /* error */ });
    }, 1500);
}

// Smooth Scroll to Section
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}
