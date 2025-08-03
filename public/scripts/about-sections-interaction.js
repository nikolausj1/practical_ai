/**
 * Practical AI Toolkit
 * About Sections Interaction JavaScript
 */

class AboutSectionsInteraction {
    constructor() {
        this.initSocialLinks();
        this.initBookingButtons();
        this.initTopicItems();
    }
    
    /**
     * Initialize social links hover effects
     */
    initSocialLinks() {
        const socialLinks = document.querySelectorAll('.social-link');
        
        socialLinks.forEach(link => {
            link.addEventListener('mouseenter', () => {
                link.style.transform = 'translateY(-3px)';
                link.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
            });
            
            link.addEventListener('mouseleave', () => {
                link.style.transform = 'translateY(0)';
                link.style.boxShadow = 'none';
            });
        });
    }
    
    /**
     * Initialize booking buttons
     */
    initBookingButtons() {
        const bookingButtons = document.querySelectorAll('.booking-button');
        
        bookingButtons.forEach(button => {
            button.addEventListener('mouseenter', () => {
                button.style.backgroundColor = '#0056b3';
            });
            
            button.addEventListener('mouseleave', () => {
                button.style.backgroundColor = '#0070f3';
            });
            
            // Track clicks for analytics (would be implemented in a real scenario)
            button.addEventListener('click', (e) => {
                console.log('Booking button clicked:', e.target.href);
                // Here you would normally add analytics tracking
            });
        });
    }
    
    /**
     * Initialize topic items hover effects
     */
    initTopicItems() {
        const topicItems = document.querySelectorAll('.topic-item');
        
        topicItems.forEach(item => {
            item.addEventListener('mouseenter', () => {
                item.style.transform = 'translateX(5px)';
                item.style.borderLeft = '3px solid #0070f3';
                item.style.paddingLeft = 'calc(1rem - 3px)';
                
                // Also highlight the icon
                const icon = item.querySelector('.topic-icon');
                if (icon) {
                    icon.style.backgroundColor = '#0070f3';
                    icon.style.color = 'white';
                }
            });
            
            item.addEventListener('mouseleave', () => {
                item.style.transform = 'translateX(0)';
                item.style.borderLeft = 'none';
                item.style.paddingLeft = '1rem';
                
                // Reset icon
                const icon = item.querySelector('.topic-icon');
                if (icon) {
                    icon.style.backgroundColor = '#e6f2ff';
                    icon.style.color = '#0070f3';
                }
            });
        });
    }
    
    /**
     * Initialize expertise cards hover effects
     */
    initExpertiseCards() {
        const expertiseCards = document.querySelectorAll('.expertise-card');
        
        expertiseCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-5px)';
                card.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.1)';
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0)';
                card.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.05)';
            });
        });
    }
    
    /**
     * Initialize audience group hover effects
     */
    initAudienceGroups() {
        const audienceGroups = document.querySelectorAll('.audience-group');
        
        audienceGroups.forEach(group => {
            group.addEventListener('mouseenter', () => {
                group.style.borderLeftWidth = '5px';
                group.style.backgroundColor = '#f0f7ff';
            });
            
            group.addEventListener('mouseleave', () => {
                group.style.borderLeftWidth = '3px';
                group.style.backgroundColor = '#f8f9fa';
            });
        });
    }
}

// Initialize when DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    const aboutSectionsInteraction = new AboutSectionsInteraction();
    // Initialize optional effects
    aboutSectionsInteraction.initExpertiseCards();
    aboutSectionsInteraction.initAudienceGroups();
});
