/**
 * Practical AI Toolkit
 * Input Tools Interaction JavaScript
 */

class InputToolsInteraction {
    constructor() {
        this.initMockups();
        this.initVideoPlayer();
        this.initVoiceWaveAnimation();
        this.initSettingsPanel();
    }
    
    /**
     * Initialize mockup interactions
     */
    initMockups() {
        // Add hover effects to mockup containers
        document.querySelectorAll('.mockup-container').forEach(container => {
            container.addEventListener('mouseenter', () => {
                container.style.transform = 'translateY(-5px)';
                container.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.1)';
            });
            
            container.addEventListener('mouseleave', () => {
                container.style.transform = 'translateY(0)';
                container.style.boxShadow = '0 3px 12px rgba(0, 0, 0, 0.1)';
            });
        });
        
        // Add click interactions to upload buttons
        document.querySelectorAll('.upload-button').forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                const originalText = button.textContent;
                button.textContent = 'Selected';
                button.classList.add('selected');
                
                setTimeout(() => {
                    button.textContent = originalText;
                    button.classList.remove('selected');
                }, 1500);
            });
        });
        
        // Make upload zones interactive
        document.querySelectorAll('.upload-zone').forEach(zone => {
            zone.addEventListener('click', () => {
                zone.classList.add('active');
                setTimeout(() => {
                    zone.classList.remove('active');
                }, 300);
            });
        });
    }
    
    /**
     * Initialize video player interaction
     */
    initVideoPlayer() {
        const videoPlayers = document.querySelectorAll('.video-player');
        
        videoPlayers.forEach(player => {
            const playButton = player.querySelector('.play-button');
            const playPauseButton = player.querySelector('.play-pause');
            const progress = player.querySelector('.progress');
            
            if (playButton) {
                playButton.addEventListener('click', () => {
                    playButton.classList.toggle('playing');
                    
                    if (playButton.classList.contains('playing')) {
                        // Simulate video playing
                        let width = 0;
                        const interval = setInterval(() => {
                            width += 1;
                            if (progress) {
                                progress.style.width = `${width}%`;
                            }
                            
                            if (width >= 100) {
                                clearInterval(interval);
                                playButton.classList.remove('playing');
                            }
                        }, 100);
                    }
                });
            }
            
            if (playPauseButton) {
                playPauseButton.addEventListener('click', () => {
                    playPauseButton.classList.toggle('paused');
                });
            }
        });
    }
    
    /**
     * Initialize voice wave animation controls
     */
    initVoiceWaveAnimation() {
        const voiceButtons = document.querySelectorAll('.voice-button');
        
        voiceButtons.forEach(button => {
            button.addEventListener('click', () => {
                const voiceEntry = button.closest('.voice-entry');
                const waveElement = voiceEntry.querySelector('.voice-wave');
                const statusElement = voiceEntry.querySelector('.voice-status');
                
                button.classList.toggle('active');
                
                if (button.classList.contains('active')) {
                    // Simulate recording
                    waveElement.classList.add('recording');
                    button.style.backgroundColor = '#e53e3e';
                    statusElement.textContent = 'Recording...';
                    
                    // Auto stop after 3 seconds
                    setTimeout(() => {
                        waveElement.classList.remove('recording');
                        button.classList.remove('active');
                        button.style.backgroundColor = '#0070f3';
                        statusElement.textContent = 'Listening...';
                    }, 3000);
                } else {
                    waveElement.classList.remove('recording');
                    button.style.backgroundColor = '#0070f3';
                    statusElement.textContent = 'Listening...';
                }
            });
        });
    }
    
    /**
     * Initialize settings panel interaction
     */
    initSettingsPanel() {
        const textareas = document.querySelectorAll('.settings-panel textarea');
        
        textareas.forEach(textarea => {
            textarea.addEventListener('focus', () => {
                textarea.parentElement.classList.add('active');
            });
            
            textarea.addEventListener('blur', () => {
                textarea.parentElement.classList.remove('active');
            });
            
            // Auto expand on input
            textarea.addEventListener('input', function() {
                this.style.height = 'auto';
                this.style.height = (this.scrollHeight) + 'px';
            });
        });
    }
    
    /**
     * Initialize feature items interaction
     */
    initFeatureItems() {
        const featureItems = document.querySelectorAll('.feature-item');
        
        featureItems.forEach(item => {
            item.addEventListener('mouseenter', () => {
                const iconWrapper = item.querySelector('.icon-wrapper');
                if (iconWrapper) {
                    iconWrapper.style.transform = 'scale(1.1) rotate(5deg)';
                }
            });
            
            item.addEventListener('mouseleave', () => {
                const iconWrapper = item.querySelector('.icon-wrapper');
                if (iconWrapper) {
                    iconWrapper.style.transform = 'scale(1) rotate(0)';
                }
            });
        });
    }
    
    /**
     * Initialize use case cards interaction
     */
    initUseCaseCards() {
        const useCaseCards = document.querySelectorAll('.use-case-card');
        
        useCaseCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-5px)';
                card.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.08)';
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0)';
                card.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.05)';
            });
        });
    }
    
    /**
     * Initialize all interactive elements
     */
    initAll() {
        this.initMockups();
        this.initVideoPlayer();
        this.initVoiceWaveAnimation();
        this.initSettingsPanel();
        this.initFeatureItems();
        this.initUseCaseCards();
    }
}

// Initialize when DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    const inputToolsInteraction = new InputToolsInteraction();
    inputToolsInteraction.initAll(); // Initialize all interactions
});
