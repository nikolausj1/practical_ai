/**
 * Practical AI Toolkit
 * Content Interaction JavaScript
 */

class ContentInteraction {
    constructor() {
        // Initialize components
        this.initShowMoreButtons();
        this.initToolCards();
    }
    
    /**
     * Initialize show more/less buttons
     */
    initShowMoreButtons() {
        const showMoreButtons = document.querySelectorAll('.show-more-btn');
        
        showMoreButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                const container = e.currentTarget.closest('.show-more-container');
                const content = container.querySelector('.show-more-content');
                
                // Toggle visibility
                if (content.classList.contains('visible')) {
                    content.classList.remove('visible');
                    button.textContent = 'Show more examples';
                    
                    // Scroll back to the button if it's out of view
                    button.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                } else {
                    content.classList.add('visible');
                    button.textContent = 'Show fewer examples';
                }
            });
        });
    }
    
    /**
     * Initialize tool cards with hover effects
     */
    initToolCards() {
        const toolCards = document.querySelectorAll('.tool-card');
        
        toolCards.forEach(card => {
            // Optional: Add additional interactivity for tool cards
            card.addEventListener('click', (e) => {
                if (e.target.tagName !== 'A') {
                    const link = card.querySelector('a');
                    if (link) {
                        // Don't automatically navigate, just provide visual feedback
                        card.classList.add('card-active');
                        setTimeout(() => {
                            card.classList.remove('card-active');
                        }, 200);
                    }
                }
            });
        });
    }
    
    /**
     * Helper function to create a toggle element
     * @param {string} labelText - Text for the toggle label
     * @param {string} containerId - ID of the container to toggle
     * @returns {HTMLElement} - The toggle element
     */
    createToggle(labelText, containerId) {
        const toggle = document.createElement('div');
        toggle.className = 'content-toggle';
        toggle.innerHTML = `
            <label class="toggle-label">
                <input type="checkbox" id="toggle-${containerId}">
                <span class="toggle-text">${labelText}</span>
            </label>
        `;
        
        const checkbox = toggle.querySelector('input');
        checkbox.addEventListener('change', (e) => {
            const container = document.getElementById(containerId);
            if (container) {
                if (e.target.checked) {
                    container.classList.add('expanded');
                } else {
                    container.classList.remove('expanded');
                }
            }
        });
        
        return toggle;
    }
    
    /**
     * Calculate reading time for a section
     * @param {HTMLElement} section - The section to calculate reading time for
     * @returns {string} - Formatted reading time
     */
    calculateReadingTime(section) {
        const text = section.textContent;
        const wordCount = text.split(/\s+/).length;
        const readingTime = Math.ceil(wordCount / 200); // Assuming 200 words per minute reading speed
        
        return readingTime <= 1 ? '1 min read' : `${readingTime} min read`;
    }
    
    /**
     * Add reading time indicators to sections
     */
    addReadingTimeIndicators() {
        const sections = document.querySelectorAll('.content-section');
        
        sections.forEach(section => {
            const heading = section.querySelector('h2');
            if (heading) {
                const readingTime = this.calculateReadingTime(section);
                
                const timeIndicator = document.createElement('span');
                timeIndicator.className = 'reading-time';
                timeIndicator.textContent = readingTime;
                
                heading.appendChild(timeIndicator);
            }
        });
    }
}

// Initialize when DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    const contentInteraction = new ContentInteraction();
});
