// Product interaction functions
function handleClick(productName) {
    // Enhanced with animation and confirmation
    const button = event.target;
    button.innerHTML = '<span class="spinner"></span> Adding...';
    button.disabled = true;
    
    setTimeout(() => {
        button.innerHTML = '✓ Added to Cart';
        showNotification(`${productName} added to your cart!`);
        
        // Reset button after 2 seconds
        setTimeout(() => {
            button.innerHTML = 'Add to Cart';
            button.disabled = false;
        }, 2000);
    }, 800);
}

function handleMouseOver() {
    event.target.style.transform = 'scale(1.02)';
    event.target.style.boxShadow = '0 5px 15px rgba(0,0,0,0.2)';
}

function handleMouseOut() {
    event.target.style.transform = 'scale(1)';
    event.target.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Initialize product page
document.addEventListener('DOMContentLoaded', () => {
    // Add any initialization code here
    console.log('Product page loaded');
});