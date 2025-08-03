/**
 * Practical AI Toolkit
 * Main JavaScript File
 */

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize navigation
    const navigation = new Navigation();
    
    // Additional functionality can be added here
    
    // Initialize smooth scrolling for in-page links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            // Let the Navigation class handle actual navigation links
            if (this.closest('nav')) return;
            
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add functionality to highlight active subsections based on scroll position
    const subsections = document.querySelectorAll('.subsection');
    if (subsections.length > 0) {
        window.addEventListener('scroll', function() {
            const scrollPosition = window.scrollY + 100; // Offset for header
            
            subsections.forEach(subsection => {
                const subsectionTop = subsection.offsetTop;
                const subsectionHeight = subsection.offsetHeight;
                
                if (scrollPosition >= subsectionTop && 
                    scrollPosition < subsectionTop + subsectionHeight) {
                    subsection.classList.add('active-subsection');
                } else {
                    subsection.classList.remove('active-subsection');
                }
            });
        });
    }
    
    // Initialize interactive components
    initializeInteractiveComponents();
});

/**
 * Initialize all interactive components
 */
function initializeInteractiveComponents() {
    // Initialize show more/less toggles
    initializeShowMoreButtons();
    
    // Initialize copy code buttons
    initializeCopyButtons();
    
    // Call other initialization functions if needed
}

/**
 * Initialize show more/less buttons
 */
function initializeShowMoreButtons() {
    const showMoreButtons = document.querySelectorAll('.show-more-btn');
    
    showMoreButtons.forEach(button => {
        button.addEventListener('click', function() {
            const container = this.closest('.show-more-container');
            const content = container.querySelector('.show-more-content');
            
            if (content.classList.contains('visible')) {
                content.classList.remove('visible');
                this.textContent = 'Show more examples';
            } else {
                content.classList.add('visible');
                this.textContent = 'Show fewer examples';
            }
        });
    });
}

/**
 * Initialize copy code buttons
 */
function initializeCopyButtons() {
    // Find all code blocks
    const codeBlocks = document.querySelectorAll('pre code');
    
    codeBlocks.forEach(codeBlock => {
        const container = codeBlock.parentElement;
        
        // Create copy button
        const copyButton = document.createElement('button');
        copyButton.className = 'copy-button';
        copyButton.innerHTML = '<span>Copy</span>';
        copyButton.title = 'Copy to clipboard';
        
        // Insert the button before the pre element
        container.parentNode.insertBefore(copyButton, container);
        
        // Add click event
        copyButton.addEventListener('click', function() {
            const code = codeBlock.textContent;
            navigator.clipboard.writeText(code).then(() => {
                const span = this.querySelector('span');
                const originalText = span.textContent;
                span.textContent = 'Copied!';
                
                setTimeout(() => {
                    span.textContent = originalText;
                }, 2000);
            }).catch(err => {
                console.error('Failed to copy code: ', err);
            });
        });
    });
}
