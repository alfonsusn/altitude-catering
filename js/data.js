// Premium International Catering Packages
window.packages = [
    // INTERNATIONAL BUFFET PACKAGES
    {
        id: 1,
        name: 'Western Premium Buffet',
        category: 'buffet',
        price: 450000,
        perPax: true,
        description: 'A complete western dining experience perfect for corporate events and weddings.',
        items: [
            'Appetizer: Caesar Salad with Grilled Chicken',
            'Soup: Cream of Wild Mushroom with Truffle Oil',
            'Main: Roasted Beef with Red Wine Jus',
            'Main: Pan-Seared Salmon with Lemon Butter',
            'Side: Roasted Herb Potatoes & Seasonal Vegetables',
            'Dessert: Assorted French Pastries & Fresh Fruit Platter',
            'Beverage: Iced Lemon Tea & Infused Water'
        ],
        image: 'images/western_premium_buffet.webp',
        popular: true
    },
    {
        id: 2,
        name: 'European Classic Buffet',
        category: 'buffet',
        price: 385000,
        perPax: true,
        description: 'Classic European dishes that bring elegance to your dining table.',
        items: [
            'Appetizer: Greek Salad with Feta Cheese',
            'Soup: Minestrone Soup',
            'Main: Grilled Chicken Rosemary',
            'Main: Beef Lasagna Classico',
            'Side: Butter Rice & Sautéed Green Beans',
            'Dessert: Chocolate Mousse & Panna Cotta',
            'Beverage: Orange Juice & Mineral Water'
        ],
        image: 'images/european_classic_buffet.webp',
        popular: false
    },
    {
        id: 3,
        name: 'Asian Fusion Deluxe',
        category: 'buffet',
        price: 425000,
        perPax: true,
        description: 'A perfect blend of East meets West flavors for a unique culinary journey.',
        items: [
            'Appetizer: Thai Mango Salad',
            'Soup: Tom Yum Goong (Creamy)',
            'Main: Wok-Fried Black Pepper Beef',
            'Main: Sweet & Sour Fish Fillet',
            'Side: Yang Chow Fried Rice & Stir-Fried Kailan',
            'Dessert: Mango Sticky Rice & Coconut Pudding',
            'Beverage: Thai Tea & Lemongrass Drink'
        ],
        image: 'images/asian_fusion_deluxe.webp',
        popular: true
    },

    // STALL / LIVE STATION PACKAGES
    {
        id: 4,
        name: 'Japanese Teppanyaki Station',
        category: 'stall',
        price: 550000,
        perPax: true,
        description: 'Live cooking station featuring premium Japanese teppanyaki.',
        items: [
            'Live: Wagyu Beef Cubes',
            'Live: Salmon & Prawn Teppanyaki',
            'Side: Garlic Fried Rice',
            'Side: Miso Soup',
            'Side: Yasai Itame (Mixed Vegetables)',
            'Condiments: 3 Kinds of Dipping Sauces'
        ],
        image: 'images/japanese_teppanyaki_station.webp',
        popular: true
    },
    {
        id: 5,
        name: 'Italian Pasta Live Station',
        category: 'stall',
        price: 325000,
        perPax: true,
        description: 'Freshly cooked pasta with choice of premium sauces.',
        items: [
            'Pasta: Spaghetti, Penne, Fettuccine',
            'Sauce: Truffle Cream, Bolognese, Aglio Olio',
            'Topping: Smoked Salmon, Grilled Chicken, Meatballs',
            'Side: Garlic Bread & Bruschetta',
            'Cheese: Grana Padano Wheel Mixing'
        ],
        image: 'images/italian_pasta_station.webp',
        popular: false
    },
    {
        id: 6,
        name: 'BBQ & Grill Station',
        category: 'stall',
        price: 485000,
        perPax: true,
        description: 'Smoky and savory BBQ station for outdoor or semi-outdoor events.',
        items: [
            'Grill: Australian Sirloin Steak',
            'Grill: Lamb Chops with Mint Sauce',
            'Grill: BBQ Chicken Wings',
            'Side: Corn on Cob & Coleslaw',
            'Side: Mashed Potatoes',
            'Sauce: Mushroom, Black Pepper, BBQ'
        ],
        image: 'images/bbq_grill_station.webp',
        popular: true
    },

    // SET MENU / PLATED SERVICE
    {
        id: 7,
        name: 'Royal Western Set Menu',
        category: 'set-menu',
        price: 850000,
        perPax: true,
        description: '4-course plated sit-down dinner service for VIP guests.',
        items: [
            'Starter: Pan-Seared Scallops with Cauliflower Purée',
            'Soup: Lobster Bisque with Cognac Foam',
            'Main: Angus Beef Tenderloin with Truffle Jus',
            'Dessert: Valrhona Chocolate Fondant',
            'Drink: Free Flow Wine & Sparkling Water'
        ],
        image: 'images/royal_western_set.webp',
        popular: false
    },
    {
        id: 8,
        name: 'Mediterranean Family Feast',
        category: 'set-menu',
        price: 650000,
        perPax: true,
        description: 'Shared platter style dining perfect for intimate family gatherings.',
        items: [
            'Platter: Hummus, Babaganoush, Pita Bread',
            'Main: Whole Roasted Lamb Leg',
            'Main: Paella Valenciana (Seafood)',
            'Side: Greek Salad & Roasted Vegetables',
            'Dessert: Baklava & Turkish Delight'
        ],
        image: 'images/mediterranean_family_feast.webp',
        popular: true
    }
];

// Testimonials Data with Placeholder Images
window.testimonials = [
    {
        id: 1,
        name: 'Ibu Sarah Wijaya',
        role: 'Wedding Event',
        rating: 5,
        text: 'Excellent service! The food was delicious, beautiful presentation, and the team was very professional. My guests were very satisfied with this catering.',
        image: 'https://via.placeholder.com/100x100/D4AF37/1f2937?text=SW'
    },
    {
        id: 2,
        name: 'Bapak Ahmad Hidayat',
        role: 'Corporate Event',
        rating: 5,
        text: 'Have used Altitude Catering Co several times for office events. Always on time and consistent food quality. Highly recommended!',
        image: 'https://via.placeholder.com/100x100/D4AF37/1f2937?text=AH'
    },
    {
        id: 3,
        name: 'Ibu Linda Kusuma',
        role: 'Birthday Party',
        rating: 5,
        text: 'The Tumpeng for my child\'s birthday was amazing! The detail and taste were extraordinary. Thank you Altitude Catering Co!',
        image: 'https://via.placeholder.com/100x100/D4AF37/1f2937?text=LK'
    },
    {
        id: 4,
        name: 'Bapak Dedi Prasetyo',
        role: 'Office Meeting',
        rating: 4,
        text: 'Snack boxes for meetings are very practical and tasty. Competitive price and fast service. Will definitely order again.',
        image: 'https://via.placeholder.com/100x100/D4AF37/1f2937?text=DP'
    }
];

// Gallery Images Data with Placeholders
window.galleryImages = [
    { id: 1, category: 'food', src: 'images/gallery_buffet_display.webp', alt: 'Buffet Display' },
    { id: 2, category: 'food', src: 'images/gallery_meal_box.webp', alt: 'Meal Box Arrangement' },
    { id: 3, category: 'event', src: 'images/gallery_wedding.webp', alt: 'Wedding Catering' },
    { id: 4, category: 'event', src: 'images/gallery_corporate.webp', alt: 'Corporate Event' },
    { id: 5, category: 'food', src: 'images/gallery_tumpeng.webp', alt: 'Ceremonial Rice Display' },
    { id: 6, category: 'setup', src: 'images/gallery_buffet_setup.webp', alt: 'Buffet Setup' },
    { id: 7, category: 'food', src: 'images/gallery_dessert.webp', alt: 'Dessert Table' },
    { id: 8, category: 'event', src: 'images/gallery_birthday.webp', alt: 'Birthday Party' },
    { id: 9, category: 'setup', src: 'images/gallery_table_setting.webp', alt: 'Elegant Table Setting' },
    { id: 10, category: 'food', src: 'images/gallery_snack_box.webp', alt: 'Snack Box Collection' },
    { id: 11, category: 'event', src: 'images/gallery_seminar.webp', alt: 'Seminar Catering' },
    { id: 12, category: 'setup', src: 'images/gallery_outdoor.webp', alt: 'Outdoor Setup' }
];

// Team Members Data with Placeholders
window.teamMembers = [
    {
        id: 1,
        name: 'Chef Bambang Sutomo',
        role: 'Head Chef',
        image: 'https://via.placeholder.com/300x400/D4AF37/1f2937?text=Head+Chef',
        description: '15+ years of Indonesian culinary experience'
    },
    {
        id: 2,
        name: 'Siti Nurhaliza',
        role: 'Event Manager',
        image: 'https://via.placeholder.com/300x400/D4AF37/1f2937?text=Event+Manager',
        description: 'Specialist in large event coordination'
    },
    {
        id: 3,
        name: 'Rudi Hermawan',
        role: 'Operations Manager',
        image: 'https://via.placeholder.com/300x400/D4AF37/1f2937?text=Operations',
        description: 'Ensuring quality & punctuality'
    }
];

// Features Data
window.features = [
    {
        icon: 'quality',
        title: 'Premium Quality',
        description: 'Finest ingredients with authentic international recipes & fine dining techniques'
    },
    {
        icon: 'clock',
        title: 'On-Time Delivery',
        description: 'Always on-time delivery according to your event schedule'
    },
    {
        icon: 'chef',
        title: 'Professional Chefs',
        description: 'Expert certified chefs with international culinary experience'
    },
    {
        icon: 'value',
        title: 'Exceptional Value',
        description: 'Premium quality at competitive pricing for unforgettable events'
    }
];

// Premium International Fine Dining Categories
window.categories = {
    'all': 'All Packages',
    'buffet': 'International Buffet',
    'stall': 'Live Stations',
    'set-menu': 'Set Menu / Plated'
};

// Format currency to Indonesian Rupiah
window.formatCurrency = function (amount) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    }).format(amount);
}
