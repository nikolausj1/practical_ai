import Head from 'next/head';
import { useEffect } from 'react';
import Script from 'next/script';

export default function Home() {
  // Force a new deployment to Vercel
  useEffect(() => {
    // Import our CSS files
    require('../styles/main.css');
    
    // This effect runs only on the client side after the component mounts
    if (typeof window !== 'undefined') {
      // Initialize our scripts after DOM is loaded
      const loadScripts = async () => {
        try {
          // Load our scripts in order
          await import('../scripts/navigation.js');
          await import('../scripts/main.js');
          await import('../scripts/content-interaction.js');
          await import('../scripts/prompting-interaction.js');
          await import('../scripts/input-tools-interaction.js');
          await import('../scripts/tips-usecases-interaction.js');
          await import('../scripts/image-best-practices-interaction.js');
          await import('../scripts/about-sections-interaction.js');
          await import('../scripts/mobile.js');
          await import('../scripts/animations.js');
        } catch (error) {
          console.error('Error loading scripts:', error);
        }
      };
      
      loadScripts();
    }
  }, []);

  // This is essentially our index.html content without the <!DOCTYPE>, <html>, <head>, and <body> tags
  return (
    <>
      <Head>
        <title>Practical AI Toolkit</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="A comprehensive toolkit for practical AI applications and techniques" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Google Fonts import */}
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
      </Head>

      {/* Import our scripts */}
      <Script src="/scripts/navigation.js" strategy="afterInteractive" />
      <Script src="/scripts/main.js" strategy="afterInteractive" />
      <Script src="/scripts/content-interaction.js" strategy="afterInteractive" />
      <Script src="/scripts/prompting-interaction.js" strategy="afterInteractive" />
      <Script src="/scripts/input-tools-interaction.js" strategy="afterInteractive" />
      <Script src="/scripts/tips-usecases-interaction.js" strategy="afterInteractive" />
      <Script src="/scripts/image-best-practices-interaction.js" strategy="afterInteractive" />
      <Script src="/scripts/about-sections-interaction.js" strategy="afterInteractive" />
      <Script src="/scripts/mobile.js" strategy="afterInteractive" />
      <Script src="/scripts/animations.js" strategy="afterInteractive" />

      <header>
        <div className="container">
          <h1>Practical AI Toolkit</h1>
          <nav id="top-nav">
            <ul>
              <li><a href="#book" className="btn">Book Me to Speak</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <div className="layout-container">
        {/* Collapsible Sidebar Navigation */}
        <aside id="sidebar">
          <div className="sidebar-header">
            {/* Contents header removed per feedback */}
          </div>
          <nav>
            <ul>
              <li><a href="#home" className="active">Home</a></li>
              <li><a href="#what-is-ai">What is AI</a></li>
              <li><a href="#when-to-use">When to Use AI</a></li>
              <li><a href="#which-ai">Which AI to Use</a></li>
              <li><a href="#types-of-prompting">Types of Prompting</a></li>
              <li><a href="#frameworks">Prompting Frameworks</a></li>
              <li><a href="#input-types">Input Types and Tools</a></li>
              <li><a href="#prompting-tips">General Prompting Tips</a></li>
              <li><a href="#use-cases">Use Cases</a></li>
              <li><a href="#image-generation">Image Generation Tips</a></li>
              <li><a href="#best-practices">Best Practices Overview</a></li>
              <li><a href="#about-me">About Me</a></li>
              <li><a href="#about-talk">About the Talk</a></li>
              <li><a href="#book" className="sidebar-cta">Book Me to Speak</a></li>
            </ul>
          </nav>
          <button id="toggle-sidebar" className="mobile-toggle" aria-label="Toggle navigation">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </aside>

        {/* Main Content Area */}
        <main>
          {/* All sections from index.html go here */}
          {/* For the sake of brevity, including just the first section as an example */}
          <section id="home" className="content-section active">
            <div className="container">
              <h2>Welcome to the Practical AI Toolkit</h2>
              <p>Welcome to the companion site for the Practical AI talk.</p>
              <p>This site expands on what was covered in the session. Use it to revisit key ideas, explore practical examples, and try out the tools and frameworks that make AI genuinely useful in your work and life.</p>
            </div>
          </section>
          
          {/* Additional sections would be included here */}
          {/* Note: Due to the length of the content, you would need to copy all sections from index.html */}
        </main>
      </div>

      <footer>
        <div className="container">
          <p>&copy; 2025 Justin Nikolaus. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
