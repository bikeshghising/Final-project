// Cart functionality
let cart = [];
let cartCount = 0;

// DOM elements
const productGrid = document.getElementById('product-grid');
const prevPageBtn = document.getElementById('prev-page');
const nextPageBtn = document.getElementById('next-page');
const pageIndicator = document.getElementById('page-indicator');
const cartLink = document.getElementById('cart-link');
const cartCountElement = document.getElementById('cart-count');
const notification = document.getElementById('notification');

const products = [
    {
        id: 1,
        name: "Ray-Ban Aviator",
        badge: "Bestseller",
        image: "images/Glasses1.jpg",
        rating: "★★★★☆",
        reviews: "(128)",
        price: 150,
        originalPrice: 180,
        description: "Classic aviator style with 100% UV protection lenses",
        category: "sunglasses"
    },
    {
        id: 2,
        name: "Oakley Holbrook",
        badge: "New",
        image: "images/Glasses2.jpg",
        rating: "★★★★★",
        reviews: "(94)",
        price: 120,
        description: "Durable frame with high-definition optics",
        category: "sunglasses"
    },
    {
        id:3,
        name: "Ray-Ban Aviator",
        badge: "Bestseller",
        image: "images/Glasses1.jpg",
        rating: "★★★★☆",
        reviews: "(128)",
        price: "$150",
        originalPrice: "$180",
        description: "Classic aviator style with 100% UV protection lenses"
    },
    {
        id: 5,
        name: "Oakley Holbrook",
        badge: "New",
        image: "images/Glasses2.jpg",
        rating: "★★★★★",
        reviews: "(94)",
        price: "$120",
        description: "Durable frame with high-definition optics"
    },
    {
        id: 6,
        name: "Gucci Round",
        image: "images/Glasses3.jpg",
        rating: "★★★★☆",
        reviews: "(76)",
        price: "$200",
        description: "Luxury acetate frames with gold accents"
    },
    {
        id: 7,
        name: "Prada Square",
        image: "images/Glasses4.jpg",
        rating: "★★★★☆",
        reviews: "(62)",
        price: "$180",
        description: "Modern square frames with lightweight design"
    },
    {
        id: 8,
        name: "Versace Medusa",
        badge: "Popular",
        image: "images/Glasses5.jpg",
        rating: "★★★★★",
        reviews: "(115)",
        price: "$220",
        description: "Signature Medusa logo with polarized lenses"
    },
    {
        id: 9,
        name: "Fendi Cat-eye",
        image: "images/Glasses6.jpg",
        rating: "★★★★☆",
        reviews: "(53)",
        price: "$160",
        description: "Feminine cat-eye shape with FF logo"
    },
    {
        id: 10,
        name: "Chanel Round",
        badge: "Luxury",
        image: "images/Glasses7.jpg",
        rating: "★★★★★",
        reviews: "(87)",
        price: "$250",
        description: "Interlocking CC logo with gradient lenses"
    },
    {
        id: 11,
        name: "Burberry Check",
        image: "images/Glasses8.jpg",
        rating: "★★★★☆",
        reviews: "(68)",
        price: "$190",
        description: "Iconic check pattern on temple tips"
    },
    {
        id: 12,
        name: "D&G Oversized",
        badge: "New",
        image: "images/Glasses9.jpg",
        rating: "★★★★☆",
        reviews: "(42)",
        price: "$210",
        description: "Bold oversized frames with logo detailing"
    },
    {
        id: 13,
        name: "D&G Oversized II",
        badge: "New",
        image: "images/glass10.webp",
        rating: "★★★★☆",
        reviews: "(42)",
        price: "$210",
        description: "Bold oversized frames with logo detailing"
    },
    {
        id: 14,
        name: "Tom Ford Havana",
        badge: "Luxury",
        image: "images/glasses11.jpg",
        rating: "★★★★★",
        reviews: "(89)",
        price: "$275",
        description: "Sophisticated Havana frames with gradient lenses"
    },
    {
        id: 15,
        name: "Persol 714",
        badge: "Classic",
        image: "images/glasses12.jpg",
        rating: "★★★★★",
        reviews: "(112)",
        price: "$195",
        description: "Iconic folding sunglasses with arrow hinge"
    },
    {
        id: 16,
        name: "Maui Jim Ho'okipa",
        image: "images/glasses13.jpg",
        rating: "★★★★★",
        reviews: "(76)",
        price: "$229",
        description: "Polarized lenses with color-enhancing technology"
    },
    {
        id: 17,
        name: "Carrera Champion",
        badge: "Sport",
        image: "images/glasses14.jpg",
        rating: "★★★★☆",
        reviews: "(58)",
        price: "$165",
        description: "Lightweight sports frames with rubber grips"
    },
    {
        id: 18,
        name: "Bottega Veneta Square",
        badge: "New",
        image: "images/glasses15.jpg",
        rating: "★★★★☆",
        reviews: "(34)",
        price: "$240",
        description: "Minimalist square frames with subtle branding"
    },
    {
        id: 19,
        name: "Saint Laurent Loulou",
        badge: "Popular",
        image: "images/glasses16.jpg",
        rating: "★★★★★",
        reviews: "(97)",
        price: "$210",
        description: "Oversized round frames with metal accents"
    },
    {
        id: 20,
        name: "Oliver Peoples Gregory Peck",
        image: "images/glasses13.jpg",
        rating: "★★★★☆",
        reviews: "(63)",
        price: "$285",
        description: "Vintage-inspired frames with modern comfort"
    },
    
];

// Pagination variables
const productsPerPage = 10;
let currentPage = 1;
const totalPages = Math.ceil(products.length / productsPerPage);

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    displayProducts();
    updateCartCount();
});

// Display products for current page
function displayProducts() {
    productGrid.innerHTML = '';
    
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const productsToShow = products.slice(startIndex, endIndex);

    productsToShow.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'card';
        
        let badgeHtml = '';
        if (product.badge) {
            const badgeClass = product.badge === 'New' ? 'new' : '';
            badgeHtml = `<div class="badge ${badgeClass}">${product.badge}</div>`;
        }
        
        let originalPriceHtml = '';
        if (product.originalPrice) {
            originalPriceHtml = `<span class="original-price">$${product.originalPrice}</span>`;
        }

        productCard.innerHTML = `
            ${badgeHtml}
            <img src="${product.image}" alt="${product.name}" loading="lazy">
            <div class="card-content">
                <h3>${product.name}</h3>
                <div class="rating">
                    ${product.rating} <span class="review-count">${product.reviews}</span>
                </div>
                <p class="price">$${product.price} ${originalPriceHtml}</p>
                <p class="description">${product.description}</p>
                <button class="btn" onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
        `;
        
        productGrid.appendChild(productCard);
    });

    // Update pagination controls
    pageIndicator.textContent = `Page ${currentPage} of ${totalPages}`;
    prevPageBtn.disabled = currentPage === 1;
    nextPageBtn.disabled = currentPage === totalPages;
}

// Pagination event listeners
prevPageBtn.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        displayProducts();
        window.scrollTo({top: 0, behavior: 'smooth'});
    }
});

nextPageBtn.addEventListener('click', () => {
    if (currentPage < totalPages) {
        currentPage++;
        displayProducts();
        window.scrollTo({top: 0, behavior: 'smooth'});
    }
});

// Cart functionality
function addToCart(productId) {
    const button = event.target;
    const product = products.find(p => p.id === productId);
    
    // Button loading state
    button.innerHTML = '<span class="spinner"></span> Adding...';
    button.disabled = true;
    
    // Simulate API call delay
    setTimeout(() => {
        // Add to cart
        const existingItem = cart.find(item => item.id === productId);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({
                ...product,
                quantity: 1
            });
        }
        
        // Update cart count
        cartCount++;
        updateCartCount();
        
        // Show success state
        button.innerHTML = '✓ Added!';
        showNotification(`${product.name} added to cart`);
        
        // Reset button after delay
        setTimeout(() => {
            button.innerHTML = 'Add to Cart';
            button.disabled = false;
        }, 2000);
        
        // Save to localStorage
        localStorage.setItem('cart', JSON.stringify(cart));
        localStorage.setItem('cartCount', cartCount);
    }, 800);
}

function updateCartCount() {
    cartCountElement.textContent = cartCount;
    
    // Add animation when count changes
    if (cartCount > 0) {
        cartLink.classList.add('has-items');
        cartCountElement.classList.add('animate');
        setTimeout(() => {
            cartCountElement.classList.remove('animate');
        }, 300);
    } else {
        cartLink.classList.remove('has-items');
    }
}

function showNotification(message) {
    notification.textContent = message;
    notification.classList.add('show');
    
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

// Load cart from localStorage on page load
function loadCart() {
    const savedCart = localStorage.getItem('cart');
    const savedCount = localStorage.getItem('cartCount');
    
    if (savedCart) {
        cart = JSON.parse(savedCart);
        cartCount = savedCount ? parseInt(savedCount) : cart.reduce((sum, item) => sum + item.quantity, 0);
    }
}

// Initialize cart
loadCart();