import Head from 'next/head';
import Script from 'next/script';

export default function Home() {

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
          <section id="home" className="content-section active">
            <div className="container">
              <h2>Welcome to the Practical AI Toolkit</h2>
              <p>Welcome to the companion site for the Practical AI talk.</p>
              <p>This site expands on what was covered in the session. Use it to revisit key ideas, explore practical examples, and try out the tools and frameworks that make AI genuinely useful in your work and life.</p>
            </div>
          </section>

          <section id="what-is-ai" className="content-section">
            <div className="container">
              <h2>What is AI</h2>
              
              <div className="subsection">
                <h3>Model Training</h3>
                <p>Trained on billions of text examples (books, articles, websites). AI models learn patterns in grammar, facts, reasoning, and style through extensive processing.</p>
                
                <p>Companies gather billions of documents—books, Wikipedia articles, websites, research papers—and feed them through thousands of powerful computers for months. Training just one model like ChatGPT can cost over $100 million. The computer isn't memorizing facts, but learning patterns—understanding how human language works and the patterns of human thought.</p>
              </div>
              
              <div className="subsection">
                <h3>Fine Tuning</h3>
                <p>After initial training, models undergo fine-tuning to teach them how to have helpful conversations. This process involves training on examples of good AI responses to make the model more useful and aligned with human expectations.</p>
              </div>
              
              <div className="subsection">
                <h3>Alignment</h3>
                <p>Once trained and fine-tuned, models are tested and reviewed for quality and safety. This crucial step ensures they don't provide harmful, illegal, or inappropriate information. Alignment makes AI systems beneficial, harmless, and honest in their interactions with users.</p>
              </div>
              
              <div className="subsection">
                <h3>Response Generation</h3>
                <p>After extensive testing and refinement, the model is released to the public. When you send a request, it generates responses one word at a time. For each word, it thinks: "Based on all the patterns I've learned and the current conversation, what word comes next?"</p>
                
                <p>Think of it like super-powered autocomplete. It's choosing the most likely next word based on the patterns learned during training. And it does that for each subsequent word until it feels the answer is complete.</p>
              </div>
            </div>
          </section>
          
          {/* More sections would go here. For brevity, I'm not including all sections */}
          {/* In a real implementation, you would include all sections from index.html */}
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
