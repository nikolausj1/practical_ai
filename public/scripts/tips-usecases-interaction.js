/**
 * Practical AI Toolkit
 * Tips and Use Cases Interaction JavaScript
 */

class TipsUsecasesInteraction {
    constructor() {
        this.initExpandableTips();
        this.initCopyButtons();
        this.initUseCaseFilters();
        this.initPreviewToggles();
    }
    
    /**
     * Initialize expandable tips functionality
     */
    initExpandableTips() {
        const expandButtons = document.querySelectorAll('.expand-tip-btn');
        
        expandButtons.forEach(button => {
            button.addEventListener('click', () => {
                const tipCard = button.closest('.tip-card');
                const expandedContent = tipCard.querySelector('.expanded-content');
                
                if (expandedContent.classList.contains('visible')) {
                    expandedContent.classList.remove('visible');
                    button.textContent = 'Show More';
                } else {
                    expandedContent.classList.add('visible');
                    button.textContent = 'Show Less';
                }
            });
        });
    }
    
    /**
     * Initialize copy buttons functionality
     */
    initCopyButtons() {
        // Copy tip buttons
        const copyTipButtons = document.querySelectorAll('.copy-tip-btn');
        
        copyTipButtons.forEach(button => {
            button.addEventListener('click', () => {
                const tipType = button.getAttribute('data-tip');
                const contentEl = button.closest('.tip-example').querySelector('.example-content');
                const textToCopy = contentEl.textContent.trim();
                
                this.copyToClipboard(textToCopy, button);
            });
        });
        
        // Copy use case buttons
        const copyCaseButtons = document.querySelectorAll('.copy-case-btn');
        
        copyCaseButtons.forEach(button => {
            button.addEventListener('click', () => {
                const caseType = button.getAttribute('data-case');
                const contentEl = button.closest('.use-case-example').querySelector('.prompt-content');
                const textToCopy = contentEl.textContent.trim();
                
                this.copyToClipboard(textToCopy, button);
            });
        });
    }
    
    /**
     * Copy text to clipboard and update button text
     * @param {string} text - Text to copy
     * @param {HTMLElement} button - Button element
     */
    copyToClipboard(text, button) {
        const originalText = button.textContent;
        
        navigator.clipboard.writeText(text)
            .then(() => {
                button.textContent = 'Copied!';
                
                setTimeout(() => {
                    button.textContent = originalText;
                }, 2000);
            })
            .catch(err => {
                console.error('Failed to copy: ', err);
                button.textContent = 'Failed';
                
                setTimeout(() => {
                    button.textContent = originalText;
                }, 2000);
            });
    }
    
    /**
     * Initialize use case filters
     */
    initUseCaseFilters() {
        const filterButtons = document.querySelectorAll('.filter-btn');
        const useCaseCards = document.querySelectorAll('.use-case-card');
        
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                const filter = button.getAttribute('data-filter');
                
                // Update active button state
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                
                // Filter use cases
                useCaseCards.forEach(card => {
                    const category = card.getAttribute('data-category');
                    
                    if (filter === 'all' || filter === category) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }
    
    /**
     * Initialize preview toggle functionality
     */
    initPreviewToggles() {
        const previewToggles = document.querySelectorAll('.preview-toggle');
        
        previewToggles.forEach(toggle => {
            toggle.addEventListener('click', () => {
                const previewContent = toggle.nextElementSibling;
                
                if (previewContent.classList.contains('visible')) {
                    previewContent.classList.remove('visible');
                    toggle.textContent = 'Show Example Outcome';
                } else {
                    previewContent.classList.add('visible');
                    toggle.textContent = 'Hide Example Outcome';
                    
                    // Smooth scroll to make content visible
                    previewContent.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                }
            });
        });
    }
    
    /**
     * Add hover effects to all interactive cards
     */
    addCardHoverEffects() {
        const allCards = document.querySelectorAll('.tip-card, .use-case-card');
        
        allCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-5px)';
                card.style.boxShadow = '0 8px 16px rgba(0,0,0,0.1)';
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0)';
                card.style.boxShadow = '0 2px 8px rgba(0,0,0,0.05)';
            });
        });
    }
}

// Initialize when DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    const tipsUsecasesInteraction = new TipsUsecasesInteraction();
});
