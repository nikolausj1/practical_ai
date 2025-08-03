/**
 * Practical AI Toolkit
 * Prompting Interaction JavaScript
 */

class PromptingInteraction {
    constructor() {
        this.initToggleViews();
        this.initFrameworksInteractions();
    }
    
    /**
     * Initialize toggle views for structured vs conversational examples
     */
    initToggleViews() {
        const toggleButtons = document.querySelectorAll('.toggle-btn');
        
        toggleButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                const targetView = e.currentTarget.dataset.view;
                const container = e.currentTarget.closest('.example-content');
                
                // Update button states
                container.querySelectorAll('.toggle-btn').forEach(btn => {
                    btn.classList.remove('active');
                });
                e.currentTarget.classList.add('active');
                
                // Update views
                container.querySelectorAll('.example-view').forEach(view => {
                    view.classList.remove('active');
                });
                container.querySelector(`.${targetView}-view`).classList.add('active');
            });
        });
    }
    
    /**
     * Initialize framework components interactions
     */
    initFrameworksInteractions() {
        // Add hover effects to framework components
        const frameworkComponents = document.querySelectorAll('.framework-component');
        
        frameworkComponents.forEach(component => {
            component.addEventListener('mouseenter', () => {
                component.style.transform = 'translateY(-3px)';
                component.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.1)';
            });
            
            component.addEventListener('mouseleave', () => {
                component.style.transform = 'translateY(0)';
                component.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.05)';
            });
        });
        
        // Add hover effects to framework cards
        const frameworkCards = document.querySelectorAll('.framework-card');
        
        frameworkCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-3px)';
                card.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.1)';
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0)';
                card.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.05)';
            });
        });
    }
    
    /**
     * Add a copy-to-clipboard button to code examples
     */
    addCopyButtons() {
        const codeBlocks = document.querySelectorAll('pre code');
        
        codeBlocks.forEach(codeBlock => {
            const container = codeBlock.parentElement;
            const copyButton = document.createElement('button');
            copyButton.className = 'copy-btn';
            copyButton.innerHTML = 'Copy';
            copyButton.ariaLabel = 'Copy code to clipboard';
            
            // Insert the button before the pre element
            container.parentNode.insertBefore(copyButton, container);
            
            // Add click event to copy the code
            copyButton.addEventListener('click', () => {
                const code = codeBlock.textContent;
                navigator.clipboard.writeText(code).then(() => {
                    copyButton.innerHTML = 'Copied!';
                    setTimeout(() => {
                        copyButton.innerHTML = 'Copy';
                    }, 2000);
                }).catch(err => {
                    console.error('Failed to copy: ', err);
                    copyButton.innerHTML = 'Failed';
                    setTimeout(() => {
                        copyButton.innerHTML = 'Copy';
                    }, 2000);
                });
            });
        });
    }
    
    /**
     * Highlight active component on scroll
     */
    initScrollHighlighting() {
        const frameworkComponents = document.querySelectorAll('.framework-component');
        
        window.addEventListener('scroll', () => {
            const scrollPosition = window.scrollY;
            
            frameworkComponents.forEach(component => {
                const componentTop = component.getBoundingClientRect().top + window.scrollY;
                const componentHeight = component.offsetHeight;
                
                if (scrollPosition > componentTop - 200 && 
                    scrollPosition < componentTop + componentHeight - 200) {
                    component.classList.add('highlighted');
                } else {
                    component.classList.remove('highlighted');
                }
            });
        });
    }
    
    /**
     * Add expandable code blocks
     */
    initExpandableCodeBlocks() {
        const codeBlocks = document.querySelectorAll('.framework-example');
        
        codeBlocks.forEach(block => {
            const header = block.querySelector('h4');
            const codeContent = block.querySelector('pre');
            
            // Make header clickable to toggle code visibility
            header.style.cursor = 'pointer';
            
            // Set initial state
            if (codeContent.offsetHeight > 300) {
                codeContent.style.maxHeight = '300px';
                codeContent.style.overflow = 'hidden';
                
                // Add expand/collapse button
                const expandButton = document.createElement('button');
                expandButton.className = 'expand-btn';
                expandButton.innerHTML = 'Show more';
                block.appendChild(expandButton);
                
                // Toggle code visibility
                expandButton.addEventListener('click', () => {
                    if (codeContent.style.maxHeight === '300px') {
                        codeContent.style.maxHeight = codeContent.scrollHeight + 'px';
                        expandButton.innerHTML = 'Show less';
                    } else {
                        codeContent.style.maxHeight = '300px';
                        expandButton.innerHTML = 'Show more';
                    }
                });
            }
        });
    }
    
    /**
     * Create expandable examples
     */
    createExpandableExamples() {
        const examples = [
            {
                framework: 'RTCF',
                title: 'Example: Marketing Research Brief',
                content: `**Role:** You are a senior market research analyst with expertise in consumer behavior and trend analysis.

**Task:** Analyze the attached survey data for our new plant-based protein product and identify key market segments, their preferences, and potential messaging strategies.

**Context:** We're launching a new plant-based protein line targeting flexitarians (meat-eaters who are reducing consumption). The product is more expensive than meat but cheaper than competing plant-based options. Our preliminary taste tests show 78% of participants preferred our product to competitors.

**Format:** Provide your analysis in these sections:
1. Executive Summary (3-5 bullet points)
2. Key Market Segments (3-4 segments with demographic details)
3. Segment-Specific Preferences (taste, price sensitivity, ethical concerns)
4. Recommended Messaging for Each Segment (primary selling points)
5. Overall Marketing Strategy Recommendations (channels, tone, imagery)`
            },
            {
                framework: 'TAG',
                title: 'Example: Customer Support Email',
                content: `**Tell:** I need to draft a response to a customer who received a damaged product in the mail.

**Assign:** Act as an experienced customer service manager for a premium home goods brand.

**Guide:** Write a response that:
- Acknowledges the issue and apologizes sincerely
- Shows empathy for their frustration
- Offers an immediate solution (replacement + 20% off next order)
- Explains our quality control improvements
- Asks if there's anything else they need
- Keeps the email under 150 words
- Uses a professional but warm tone`
            }
        ];
        
        const frameworkContainer = document.querySelector('.framework-container');
        
        if (frameworkContainer) {
            const moreExamplesSection = document.createElement('div');
            moreExamplesSection.className = 'more-examples-section';
            
            const toggleButton = document.createElement('button');
            toggleButton.className = 'toggle-examples-btn';
            toggleButton.textContent = 'Show More Examples';
            
            const examplesContainer = document.createElement('div');
            examplesContainer.className = 'more-examples-container';
            examplesContainer.style.display = 'none';
            
            // Add examples to container
            examples.forEach(example => {
                const exampleEl = document.createElement('div');
                exampleEl.className = 'framework-example';
                exampleEl.innerHTML = `
                    <h4>${example.title}</h4>
                    <pre><code>${example.content}</code></pre>
                `;
                examplesContainer.appendChild(exampleEl);
            });
            
            // Add toggle functionality
            toggleButton.addEventListener('click', () => {
                if (examplesContainer.style.display === 'none') {
                    examplesContainer.style.display = 'block';
                    toggleButton.textContent = 'Hide Examples';
                } else {
                    examplesContainer.style.display = 'none';
                    toggleButton.textContent = 'Show More Examples';
                }
            });
            
            moreExamplesSection.appendChild(toggleButton);
            moreExamplesSection.appendChild(examplesContainer);
            
            frameworkContainer.appendChild(moreExamplesSection);
        }
    }
}

// Initialize when DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    const promptingInteraction = new PromptingInteraction();
});
