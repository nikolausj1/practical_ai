/**
 * Practical AI Toolkit
 * Animation and Visual Polish JavaScript
 */

class AnimationController {
    constructor() {
        // Initialize all animation components
        this.initRippleEffect();
        this.initCardRevealAnimations();
        this.initCodeBlockCopy();
        this.fixSidebarHeight();
        this.initSmoothScrolling();
        this.setupHeaderLogo();
        this.initPromptCodeBlocks();
        
        // Adjust RTCF framework layout
        this.adjustRTCFLayout();
    }
    
    /**
     * Initialize ripple effect on buttons
     */
    initRippleEffect() {
        const buttons = document.querySelectorAll('.btn, .booking-button, .copy-prompt-btn, .copy-case-btn, .copy-tip-btn, .filter-btn');
        
        buttons.forEach(button => {
            button.addEventListener('click', (e) => {
                const x = e.clientX - e.target.getBoundingClientRect().left;
                const y = e.clientY - e.target.getBoundingClientRect().top;
                
                const ripple = document.createElement('span');
                ripple.classList.add('ripple');
                ripple.style.left = `${x}px`;
                ripple.style.top = `${y}px`;
                
                button.appendChild(ripple);
                
                setTimeout(() => {
                    ripple.remove();
                }, 600);
            });
        });
    }
    
    /**
     * Initialize card reveal animations using Intersection Observer
     */
    initCardRevealAnimations() {
        const cards = document.querySelectorAll('.practice-card, .expertise-card, .use-case-card, .framework-card, .tool-card, .tip-card');
        
        // Add card-reveal class to all cards
        cards.forEach(card => {
            card.classList.add('card-reveal');
        });
        
        // Create intersection observer
        if ('IntersectionObserver' in window) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            });
            
            // Observe all cards
            cards.forEach(card => {
                observer.observe(card);
            });
        } else {
            // Fallback for browsers without Intersection Observer
            cards.forEach(card => {
                card.classList.add('visible');
            });
        }
    }
    
    /**
     * Initialize code block copy functionality
     */
    initCodeBlockCopy() {
        const codeBlocks = document.querySelectorAll('pre');
        
        codeBlocks.forEach(block => {
            // Create container for the code block
            const container = document.createElement('div');
            container.classList.add('code-block');
            block.parentNode.insertBefore(container, block);
            container.appendChild(block);
            
            // Create copy button
            const copyButton = document.createElement('button');
            copyButton.classList.add('code-copy-btn');
            copyButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>';
            copyButton.setAttribute('aria-label', 'Copy code');
            copyButton.setAttribute('title', 'Copy code');
            container.appendChild(copyButton);
            
            // Add click event to copy button
            copyButton.addEventListener('click', () => {
                const code = block.textContent;
                navigator.clipboard.writeText(code).then(() => {
                    copyButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>';
                    setTimeout(() => {
                        copyButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>';
                    }, 2000);
                });
            });
        });
    }
    
    /**
     * Fix sidebar height to reach the footer
     */
    fixSidebarHeight() {
        const sidebar = document.getElementById('sidebar');
        const footer = document.querySelector('footer');
        
        if (sidebar && footer) {
            // Set the initial height
            this.adjustSidebarHeight();
            
            // Adjust on resize
            window.addEventListener('resize', () => {
                this.adjustSidebarHeight();
            });
            
            // Adjust on scroll
            window.addEventListener('scroll', () => {
                this.adjustSidebarHeight();
            });
        }
    }
    
    /**
     * Helper to adjust sidebar height
     */
    adjustSidebarHeight() {
        const sidebar = document.getElementById('sidebar');
        const footer = document.querySelector('footer');
        const main = document.querySelector('main');
        
        if (sidebar && footer && main) {
            const footerTop = footer.getBoundingClientRect().top;
            const mainBottom = main.getBoundingClientRect().bottom;
            const windowHeight = window.innerHeight;
            
            if (footerTop > windowHeight) {
                sidebar.style.height = '100%';
            } else {
                const newHeight = mainBottom;
                sidebar.style.height = `${newHeight}px`;
            }
        }
    }
    
    /**
     * Initialize smooth scrolling
     */
    initSmoothScrolling() {
        const navLinks = document.querySelectorAll('#sidebar nav ul li a, #top-nav ul li a');
        
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                // Only process internal links
                if (link.getAttribute('href').startsWith('#')) {
                    e.preventDefault();
                    
                    const targetId = link.getAttribute('href');
                    const targetElement = document.querySelector(targetId);
                    
                    if (targetElement) {
                        // Remove active class from all links
                        navLinks.forEach(navLink => {
                            navLink.classList.remove('active');
                        });
                        
                        // Add active class to clicked link
                        link.classList.add('active');
                        
                        // Scroll to target section
                        window.scrollTo({
                            top: targetElement.offsetTop - 80, // Account for header
                            behavior: 'smooth'
                        });
                        
                        // Update URL hash
                        history.pushState(null, null, targetId);
                        
                        // Show the target section
                        const sections = document.querySelectorAll('.content-section');
                        sections.forEach(section => {
                            section.classList.remove('active');
                        });
                        
                        targetElement.classList.add('active');
                    }
                }
            });
        });
    }
    
    /**
     * Set up header logo
     */
    setupHeaderLogo() {
        const header = document.querySelector('header .container');
        const h1 = document.querySelector('header h1');
        
        if (header && h1) {
            // Create logo container
            const logoContainer = document.createElement('div');
            logoContainer.classList.add('header-logo-container');
            
            // Create and set up logo image
            const logoImg = document.createElement('img');
            logoImg.src = 'public/logo_vertical.png';
            logoImg.alt = 'Practical AI Toolkit Logo';
            logoImg.classList.add('header-logo');
            logoImg.style.height = '40px';
            logoImg.style.marginRight = '10px';
            
            // Replace h1 with logo
            logoContainer.appendChild(logoImg);
            header.insertBefore(logoContainer, header.firstChild);
            h1.style.display = 'none'; // Hide the text heading
            
            // Style the header container for logo placement
            header.style.display = 'flex';
            header.style.justifyContent = 'space-between';
            header.style.alignItems = 'center';
            
            // Right align the Book me button
            const topNav = document.querySelector('#top-nav');
            if (topNav) {
                topNav.style.marginLeft = 'auto';
            }
        }
    }
    
    /**
     * Create styled prompt code blocks
     */
    initPromptCodeBlocks() {
        // Find all prompt examples
        const promptTexts = document.querySelectorAll('.prompt-text p, .example-content:not(.bad-example) p, .component-example');
        
        promptTexts.forEach(promptText => {
            // Skip if already processed or contains HTML elements
            if (promptText.querySelector('pre') || promptText.innerHTML.includes('<') && promptText.innerHTML.includes('>')) {
                return;
            }
            
            // Get the text content
            const text = promptText.textContent.trim();
            
            // Skip very short texts that might not be prompts
            if (text.length < 30 && !promptText.closest('.prompt-text')) {
                return;
            }
            
            // Create code block
            const pre = document.createElement('pre');
            const code = document.createElement('code');
            code.textContent = text;
            pre.appendChild(code);
            
            // Replace the original content with the code block
            promptText.textContent = '';
            promptText.appendChild(pre);
        });
        
        // Initialize copy buttons after creating code blocks
        this.initCodeBlockCopy();
    }
    
    /**
     * Adjust RTCF framework layout
     */
    adjustRTCFLayout() {
        const frameworkComponents = document.querySelector('.framework-components');
        
        if (frameworkComponents) {
            frameworkComponents.style.display = 'flex';
            frameworkComponents.style.flexWrap = 'nowrap';
            frameworkComponents.style.gap = '1rem';
            frameworkComponents.style.overflowX = 'auto';
            frameworkComponents.style.paddingBottom = '1rem';
            
            // Adjust framework component styles
            const components = frameworkComponents.querySelectorAll('.framework-component');
            components.forEach(component => {
                component.style.flex = '1';
                component.style.minWidth = '200px';
            });
        }
    }
}

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    const animationController = new AnimationController();
});
