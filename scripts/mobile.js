/**
 * Practical AI Toolkit
 * Mobile-specific JavaScript functionality
 */

class MobileNavigation {
    constructor() {
        this.sidebar = document.getElementById('sidebar');
        this.toggleButton = document.getElementById('toggle-sidebar');
        this.mainContent = document.querySelector('main');
        
        // Create overlay element for mobile sidebar
        this.overlay = document.createElement('div');
        this.overlay.className = 'sidebar-overlay';
        document.body.appendChild(this.overlay);
        
        this.initEventListeners();
    }
    
    /**
     * Initialize event listeners for mobile navigation
     */
    initEventListeners() {
        // Toggle sidebar on button click
        this.toggleButton.addEventListener('click', () => {
            this.toggleSidebar();
        });
        
        // Close sidebar when clicking overlay
        this.overlay.addEventListener('click', () => {
            this.closeSidebar();
        });
        
        // Close sidebar when clicking a navigation link on mobile
        const navLinks = this.sidebar.querySelectorAll('nav ul li a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 768) {
                    this.closeSidebar();
                }
            });
        });
        
        // Handle resize events
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) {
                // Reset sidebar and overlay on larger screens
                this.sidebar.classList.remove('active');
                this.toggleButton.classList.remove('active');
                this.overlay.classList.remove('active');
                this.mainContent.classList.remove('shifted');
            }
        });
        
        // Handle swipe gestures for mobile
        this.initSwipeGestures();
    }
    
    /**
     * Toggle sidebar open/closed state
     */
    toggleSidebar() {
        this.sidebar.classList.toggle('active');
        this.toggleButton.classList.toggle('active');
        this.overlay.classList.toggle('active');
        this.mainContent.classList.toggle('shifted');
        
        // Toggle aria-expanded attribute for accessibility
        const isExpanded = this.sidebar.classList.contains('active');
        this.toggleButton.setAttribute('aria-expanded', isExpanded);
    }
    
    /**
     * Close sidebar
     */
    closeSidebar() {
        this.sidebar.classList.remove('active');
        this.toggleButton.classList.remove('active');
        this.overlay.classList.remove('active');
        this.mainContent.classList.remove('shifted');
        this.toggleButton.setAttribute('aria-expanded', false);
    }
    
    /**
     * Initialize swipe gestures for mobile
     */
    initSwipeGestures() {
        let touchStartX = 0;
        let touchEndX = 0;
        
        // Detect touch start position
        document.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        }, false);
        
        // Detect touch end position and determine swipe direction
        document.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            this.handleSwipe(touchStartX, touchEndX);
        }, false);
    }
    
    /**
     * Handle swipe gesture based on direction
     * @param {number} startX - Touch start X position
     * @param {number} endX - Touch end X position
     */
    handleSwipe(startX, endX) {
        const threshold = 100; // Minimum distance for swipe detection
        
        // Right to left swipe (close sidebar)
        if (startX - endX > threshold && this.sidebar.classList.contains('active')) {
            this.closeSidebar();
        }
        
        // Left to right swipe (open sidebar)
        if (endX - startX > threshold && !this.sidebar.classList.contains('active') && startX < 50) {
            // Only trigger when swipe starts near the edge of the screen
            this.toggleSidebar();
        }
    }
    
    /**
     * Optimize touch targets for mobile
     */
    optimizeTouchTargets() {
        // Make all interactive elements touch-friendly
        const touchElements = document.querySelectorAll('button, .btn, a');
        
        touchElements.forEach(element => {
            // Check if element is too small for touch
            const rect = element.getBoundingClientRect();
            if (rect.width < 44 || rect.height < 44) {
                // Add padding or adjust size for better touch targets
                element.style.minHeight = '44px';
                element.style.minWidth = '44px';
                
                // If it's an inline element, make it inline-block
                const display = window.getComputedStyle(element).display;
                if (display === 'inline') {
                    element.style.display = 'inline-block';
                }
            }
        });
    }
}

/**
 * Initialize responsive image handling
 */
class ResponsiveImages {
    constructor() {
        this.optimizeImages();
        this.lazyLoadImages();
    }
    
    /**
     * Optimize images for mobile devices
     */
    optimizeImages() {
        const images = document.querySelectorAll('img:not([loading="lazy"])');
        
        // Add lazy loading attribute to images
        images.forEach(img => {
            if (!img.hasAttribute('loading')) {
                img.setAttribute('loading', 'lazy');
            }
            
            // Add responsive width if not already set
            if (!img.style.maxWidth) {
                img.style.maxWidth = '100%';
            }
            
            // Add height auto to maintain aspect ratio
            if (!img.style.height) {
                img.style.height = 'auto';
            }
        });
    }
    
    /**
     * Implement lazy loading for images
     */
    lazyLoadImages() {
        // Use Intersection Observer for lazy loading
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        
                        // If there's a data-src attribute, use it
                        if (img.dataset.src) {
                            img.src = img.dataset.src;
                            img.removeAttribute('data-src');
                        }
                        
                        observer.unobserve(img);
                    }
                });
            });
            
            // Observe all images with data-src attribute
            const lazyImages = document.querySelectorAll('img[data-src]');
            lazyImages.forEach(img => {
                imageObserver.observe(img);
            });
        } else {
            // Fallback for browsers without Intersection Observer
            const lazyImages = document.querySelectorAll('img[data-src]');
            lazyImages.forEach(img => {
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
            });
        }
    }
}

/**
 * Handle viewport height issues on mobile browsers
 */
class ViewportHandler {
    constructor() {
        this.setViewportHeight();
        window.addEventListener('resize', this.setViewportHeight.bind(this));
    }
    
    /**
     * Set CSS variable for viewport height to handle mobile browser issues
     */
    setViewportHeight() {
        // First we get the viewport height and multiply it by 1% to get a value for a vh unit
        const vh = window.innerHeight * 0.01;
        // Then we set the value in the --vh custom property to the root of the document
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
}

// Initialize mobile functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    const mobileNav = new MobileNavigation();
    const responsiveImages = new ResponsiveImages();
    const viewportHandler = new ViewportHandler();
    
    // Optimize touch targets after page load
    mobileNav.optimizeTouchTargets();
});
