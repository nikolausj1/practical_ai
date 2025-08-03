/**
 * Practical AI Toolkit
 * Navigation JavaScript
 */

class Navigation {
    constructor() {
        // DOM Elements
        this.sidebar = document.getElementById('sidebar');
        this.collapseSidebarBtn = document.getElementById('collapse-sidebar');
        this.toggleSidebarBtn = document.getElementById('toggle-sidebar');
        this.navLinks = document.querySelectorAll('nav a');
        this.contentSections = document.querySelectorAll('.content-section');
        
        // Initialize
        this.init();
    }
    
    /**
     * Initialize navigation functionality
     */
    init() {
        this.setupEventListeners();
        this.checkInitialState();
    }
    
    /**
     * Set up all event listeners
     */
    setupEventListeners() {
        // Desktop: Collapse sidebar
        if (this.collapseSidebarBtn) {
            this.collapseSidebarBtn.addEventListener('click', this.handleSidebarCollapse.bind(this));
        }
        
        // Mobile: Toggle sidebar
        if (this.toggleSidebarBtn) {
            this.toggleSidebarBtn.addEventListener('click', this.handleSidebarToggle.bind(this));
        }
        
        // Navigation links
        this.navLinks.forEach(link => {
            link.addEventListener('click', this.handleNavigation.bind(this));
        });
        
        // Close sidebar when clicking outside (mobile only)
        document.addEventListener('click', this.handleOutsideClick.bind(this));
        
        // Handle window resize
        window.addEventListener('resize', this.handleResize.bind(this));
    }
    
    /**
     * Check if URL has a hash and navigate to that section
     */
    checkInitialState() {
        // Check URL hash on page load
        if (window.location.hash) {
            const sectionId = window.location.hash.substring(1);
            this.navigateToSection(sectionId);
        }
        
        // Check for collapsed state in localStorage
        const sidebarState = localStorage.getItem('sidebarCollapsed');
        if (sidebarState === 'true' && window.innerWidth > 768) {
            this.sidebar.classList.add('collapsed');
            this.updateCollapseIcon();
        }
    }
    
    /**
     * Handle desktop sidebar collapse/expand
     */
    handleSidebarCollapse(e) {
        e.preventDefault();
        this.sidebar.classList.toggle('collapsed');
        
        // Store preference
        localStorage.setItem('sidebarCollapsed', this.sidebar.classList.contains('collapsed'));
        
        this.updateCollapseIcon();
    }
    
    /**
     * Update the collapse icon direction
     */
    updateCollapseIcon() {
        if (this.collapseSidebarBtn) {
            const icon = this.collapseSidebarBtn.querySelector('.collapse-icon');
            if (icon) {
                if (this.sidebar.classList.contains('collapsed')) {
                    icon.textContent = '▶';
                } else {
                    icon.textContent = '◀';
                }
            }
        }
    }
    
    /**
     * Handle mobile sidebar toggle
     */
    handleSidebarToggle(e) {
        e.preventDefault();
        this.sidebar.classList.toggle('open');
    }
    
    /**
     * Handle navigation link clicks
     */
    handleNavigation(e) {
        e.preventDefault();
        const sectionId = e.currentTarget.getAttribute('href').substring(1);
        this.navigateToSection(sectionId);
        
        // Update URL hash
        window.location.hash = sectionId;
        
        // Close sidebar on mobile after navigation
        if (window.innerWidth <= 768 && this.sidebar.classList.contains('open')) {
            this.sidebar.classList.remove('open');
        }
    }
    
    /**
     * Navigate to a specific section
     * @param {string} sectionId - The ID of the section to display
     */
    navigateToSection(sectionId) {
        // Hide all sections
        this.contentSections.forEach(section => {
            section.classList.remove('active');
        });
        
        // Remove active class from all nav links
        this.navLinks.forEach(link => {
            link.classList.remove('active');
        });
        
        // Show the selected section
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.classList.add('active');
            
            // Scroll to top of section
            targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        
        // Add active class to the clicked nav link
        const activeLink = document.querySelector(`nav a[href="#${sectionId}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }
    }
    
    /**
     * Close sidebar when clicking outside (mobile only)
     */
    handleOutsideClick(e) {
        if (window.innerWidth <= 768 && 
            this.sidebar.classList.contains('open') && 
            !this.sidebar.contains(e.target) && 
            e.target !== this.toggleSidebarBtn &&
            !this.toggleSidebarBtn.contains(e.target)) {
            this.sidebar.classList.remove('open');
        }
    }
    
    /**
     * Handle window resize events
     */
    handleResize() {
        // If transitioning from mobile to desktop view
        if (window.innerWidth > 768 && this.sidebar.classList.contains('open')) {
            this.sidebar.classList.remove('open');
        }
    }
}

// Export Navigation class
window.Navigation = Navigation;
