/**
 * Practical AI Toolkit
 * Image Generation and Best Practices Interaction JavaScript
 */

class ImageBestPracticesInteraction {
    constructor() {
        this.initCopyPromptButtons();
        this.initPlaceholderImages();
    }
    
    /**
     * Initialize copy prompt buttons functionality
     */
    initCopyPromptButtons() {
        const copyButtons = document.querySelectorAll('.copy-prompt-btn');
        
        copyButtons.forEach(button => {
            button.addEventListener('click', () => {
                const promptType = button.getAttribute('data-prompt');
                const promptEl = button.closest('.prompt-text, .combo-example, .prompt-for-sketch').querySelector('p');
                const textToCopy = promptEl.textContent.trim();
                
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
     * Initialize placeholder images with visual styling
     */
    initPlaceholderImages() {
        // Basic cabin image placeholder
        const basicImage = document.querySelector('.basic-image');
        if (basicImage) {
            basicImage.style.backgroundImage = 'linear-gradient(to right, #f0f4f8, #e0e7ff)';
            
            // Add a basic cabin icon
            const cabinIcon = document.createElement('div');
            cabinIcon.innerHTML = '🏠';
            cabinIcon.style.fontSize = '2rem';
            cabinIcon.style.marginBottom = '1rem';
            basicImage.appendChild(cabinIcon);
        }
        
        // Enhanced cabin image placeholder
        const enhancedImage = document.querySelector('.enhanced-image');
        if (enhancedImage) {
            enhancedImage.style.backgroundImage = 'linear-gradient(120deg, #e6f7ff, #f0f7ff, #e0e7ff)';
            
            // Add a fancy cabin icon
            const fancyCabinIcon = document.createElement('div');
            fancyCabinIcon.innerHTML = '🏡';
            fancyCabinIcon.style.fontSize = '3rem';
            fancyCabinIcon.style.marginBottom = '1rem';
            enhancedImage.appendChild(fancyCabinIcon);
        }
        
        // Fusion image placeholder
        const fusionImage = document.querySelector('.fusion-image');
        if (fusionImage) {
            fusionImage.style.backgroundImage = 'linear-gradient(135deg, #e6f7ff, #f0f7ff, #f0f4ff)';
            
            // Add fusion concept icons
            const fusionIcon = document.createElement('div');
            fusionIcon.innerHTML = '📚 + 🌿';
            fusionIcon.style.fontSize = '2rem';
            fusionIcon.style.marginBottom = '1rem';
            fusionImage.appendChild(fusionIcon);
        }
        
        // Blend image placeholder
        const blendImage = document.querySelector('.blend-image');
        if (blendImage) {
            blendImage.style.backgroundImage = 'linear-gradient(135deg, #faf5ff, #f0f7ff, #fff5f7)';
            
            // Add blend concept icons
            const blendIcon = document.createElement('div');
            blendIcon.innerHTML = '⛩️ + 🌃';
            blendIcon.style.fontSize = '2rem';
            blendIcon.style.marginBottom = '1rem';
            blendImage.appendChild(blendIcon);
        }
        
        // Sketch image placeholder
        const sketchImage = document.querySelector('.sketch');
        if (sketchImage) {
            sketchImage.style.backgroundImage = 'linear-gradient(to right, #f8f9fa, #f0f4f8)';
            
            // Add sketch icon
            const sketchIcon = document.createElement('div');
            sketchIcon.innerHTML = '✏️';
            sketchIcon.style.fontSize = '2.5rem';
            sketchIcon.style.marginBottom = '1rem';
            sketchImage.appendChild(sketchIcon);
        }
        
        // Rendered image placeholder
        const renderedImage = document.querySelector('.rendered');
        if (renderedImage) {
            renderedImage.style.backgroundImage = 'linear-gradient(to right, #e6f7ff, #f0f7ff)';
            
            // Add rendered icon
            const renderedIcon = document.createElement('div');
            renderedIcon.innerHTML = '👸';
            renderedIcon.style.fontSize = '2.5rem';
            renderedIcon.style.marginBottom = '1rem';
            renderedImage.appendChild(renderedIcon);
        }
    }
    
    /**
     * Add hover effects to platform tip cards
     */
    addPlatformTipCardEffects() {
        const platformTipCards = document.querySelectorAll('.platform-tip-card');
        
        platformTipCards.forEach(card => {
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
}

// Initialize when DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    const imageBestPracticesInteraction = new ImageBestPracticesInteraction();
});
