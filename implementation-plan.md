# Implementation Plan: Practical AI Toolkit Website

This document outlines the implementation plan for the Practical AI Toolkit website using the vertical slice method. Each prompt builds incrementally on the previous version, focusing on one functional aspect at a time. Copy and paste these prompts into new Cline conversations to build the website step by step.

## 1. Basic Structure and Home Page

```
Create the initial structure for the Practical AI Toolkit website with a functioning home page. 

Focus on:
- Setting up the basic project structure
- Creating a simple, static home page with an introduction
- Implementing a basic navigation placeholder

Files to create:
- index.html (main entry point)
- styles/main.css (basic styling)
- scripts/main.js (minimal JavaScript)
- README.md (project documentation)

The home page should include:
- Site title "Practical AI Toolkit"
- Brief introduction explaining the site's purpose from the content doc
- Placeholder for navigation

Acceptance criteria:
- Valid HTML5 structure
- Basic styling applied (fonts, colors, spacing)
- Page loads correctly in a browser
- Mobile-responsive with simple media queries
- Clean, readable code with comments
```

## 2. Navigation Structure and Content Framework

```
Expand the Practical AI Toolkit website by implementing a functional navigation system and content framework.

Build on the previous version by:
- Creating the collapsible left sidebar navigation
- Adding a top navigation bar with "About Me" and "Book Me to Speak" button
- Setting up the structure for content sections
- Implementing the first two content sections: "Home" and "What is AI"

Files to modify:
- index.html
- styles/main.css
- scripts/main.js

Files to create:
- content/what-is-ai.html (or sections in index.html)
- styles/navigation.css
- scripts/navigation.js

The navigation should:
- Display all main sections from the content document
- Allow expanding/collapsing of the sidebar on desktop
- Include working links to the available sections

Acceptance criteria:
- Navigation sidebar displays all planned sections
- Content sections "Home" and "What is AI" are complete with proper formatting
- Navigation links work correctly for implemented sections
- Sidebar can be expanded and collapsed
- Top navigation displays correctly
- Design follows a clean, professional aesthetic
- Mobile-responsive (navigation displays correctly on different screen sizes)
```

## 3. Content Sections - When to Use AI and Which AI to Use

```
Expand the Practical AI Toolkit website by adding two more key content sections.

Build on the previous version by implementing:
- "When to Use AI" section with all subsections
- "Which AI to Use" section with all subsections
- Enhanced content formatting for lists, tables, and special elements
- Improved styling for content sections

Files to modify:
- index.html (or create new content HTML files)
- styles/main.css
- navigation files

The new sections should include:
- Complete content for "When to Use AI" with "When Use AI", "Don't Use AI", and "Mindset Needed" subsections
- Complete content for "Which AI to Use" with platform, model and specialized tools subsections
- Proper formatting for lists, headings, and special callouts
- Consistent styling with previous sections

Acceptance criteria:
- All content is properly formatted and styled
- Navigation correctly links to the new sections
- Subsections are clearly distinguished
- Content is readable and well-organized
- Special formatting (lists, tables, etc.) renders correctly
- Mobile-responsive design maintains readability on small screens
```

## 4. Types of Prompting and Frameworks Sections

```
Expand the Practical AI Toolkit website by adding sections on prompting types and frameworks.

Build on the previous version by implementing:
- "Types of Prompting" section with all subsections
- "Prompting Frameworks" section with all subsections
- Interactive elements for showing examples
- Enhanced styling for these technical sections

Files to modify:
- index.html (or related content files)
- styles/main.css
- scripts/main.js

The new sections should include:
- Complete content for "Types of Prompting" with structured vs. conversational approaches
- Complete content for "Prompting Frameworks" with RTCF and other frameworks
- Interactive examples where users can see different prompt styles
- Consistent styling with previous sections

Acceptance criteria:
- Complete content for both sections is properly formatted
- Interactive elements work correctly (expandable examples, etc.)
- Navigation correctly links to the new sections
- Content is technically accurate and well-presented
- Mobile-responsive design maintains functionality on small screens
- Sections follow the established design patterns
```

## 5. Input Types and Tools Sections

```
Expand the Practical AI Toolkit website by adding the Input Types and Tools section.

Build on the previous version by implementing:
- Complete "Input Types and Tools" section with all subsections
- Interactive demos or visual examples of different input types
- Enhanced styling for demonstrating tools

Files to modify:
- index.html (or related content files)
- styles/main.css
- scripts/main.js

The Input Types and Tools section should include:
- Subsections on document uploads, image uploads, voice entry, advanced voice mode, video mode, custom instructions, projects, deep research, and canvas
- Visual examples or mockups of these features
- Clear explanations of when and how to use each input type
- Consistent styling with previous sections

Acceptance criteria:
- Complete content for the Input Types and Tools section
- Well-formatted examples and visuals
- Clear organization of the many subsections
- Navigation correctly links to the new section
- Mobile-responsive design maintains readability
- Section follows the established design patterns
```

## 6. General Prompting Tips and Use Cases

```
Expand the Practical AI Toolkit website by adding the General Prompting Tips and Use Cases sections.

Build on the previous version by implementing:
- "General Prompting Tips" section with comprehensive tips and examples
- "Use Cases" section showing practical applications
- Enhanced interactive elements for better user engagement

Files to modify:
- index.html (or related content files)
- styles/main.css
- scripts/main.js

The new sections should include:
- Complete content for "General Prompting Tips" with output formatting, context, language, and other tips
- Complete content for "Use Cases" showing practical examples
- Interactive elements like expandable tip cards or examples
- Consistent styling with previous sections

Acceptance criteria:
- Complete content for both sections is properly formatted
- Interactive elements work correctly
- Tips are organized in a clear, scannable way
- Use cases provide practical value to readers
- Navigation correctly links to the new sections
- Mobile-responsive design maintains functionality
- Sections follow the established design patterns
```

## 7. Image Generation and Best Practices Sections

```
Expand the Practical AI Toolkit website by adding the Image Generation Tips and Best Practices Overview sections.

Build on the previous version by implementing:
- "Image Generation Tips" section with examples
- "Best Practices Overview" section summarizing key recommendations
- Visual examples of AI-generated images
- Enhanced interactive elements

Files to modify:
- index.html (or related content files)
- styles/main.css
- scripts/main.js

The new sections should include:
- Complete content for "Image Generation Tips" with framework, combining images, sketch to render
- Complete content for "Best Practices Overview" with understanding the tool, prompting basics, iteration, tool usage, caution & judgment
- Visual examples or mockups of AI-generated images
- Consistent styling with previous sections

Acceptance criteria:
- Complete content for both sections is properly formatted
- Image examples display correctly
- Best practices are clearly summarized
- Navigation correctly links to the new sections
- Mobile-responsive design maintains functionality
- Sections follow the established design patterns
```

## 8. About Me and About Talk Sections

```
Expand the Practical AI Toolkit website by adding the About Me and About Practical AI Talk sections.

Build on the previous version by implementing:
- "About Me" section with professional bio
- "About Practical AI Talk" section explaining the presentation
- Enhanced styling for these personal sections
- Contact or booking information

Files to modify:
- index.html (or related content files)
- styles/main.css
- scripts/main.js

The new sections should include:
- Complete content for "About Me" with professional bio
- Complete content for "About Practical AI Talk" explaining the presentation
- Styling that distinguishes these sections from the technical content
- Contact information or booking details

Acceptance criteria:
- Complete content for both sections is properly formatted
- Sections have appropriate styling that fits the overall design
- Navigation correctly links to the new sections
- Any contact or booking elements work correctly
- Mobile-responsive design maintains readability
- Sections follow the established design patterns
```

## 9. Responsive Design and Mobile Navigation

```
Enhance the Practical AI Toolkit website with comprehensive responsive design and mobile navigation.

Build on the previous version by implementing:
- Hamburger menu transformation for mobile devices
- Complete responsive layout for all screen sizes
- Touch-friendly interactive elements
- Optimized images and content for mobile

Files to modify:
- index.html (and all content files)
- styles/main.css
- styles/responsive.css (new)
- scripts/main.js
- scripts/mobile.js (new)

Focus on:
- Creating a hamburger menu that replaces the sidebar on mobile
- Ensuring all content is readable on small screens
- Making interactive elements touch-friendly
- Testing and optimizing for various screen sizes
- Maintaining design consistency across devices

Acceptance criteria:
- Navigation transforms appropriately on different screen sizes
- Hamburger menu functions correctly on mobile
- All content is readable without horizontal scrolling
- Interactive elements work on touch devices
- Design is consistent across screen sizes
- Performance is optimized for mobile devices
```

## 10. Visual Polish and Animations

```
Enhance the Practical AI Toolkit website with visual polish, animations, and refined styling.

Build on the previous version by implementing:
- remove content highlight as the user scrolls.. its distracting and moves the content
- make the background of the left side navigation reach the footer. There shouldnt be space between the background of the left nav and the footer. (This happens on "when to Use AI" page) 
- In the "Picking a Platform" section, put claude, gemini, and chatgpt in a list (above) Grok, CoPilot, and DeepSeek as all the options. Don't have a "Other Options" section. Have them all in the same list. 
- In the "Picking a Model" section, call out each model from each of the ChatGPT, Claude, and Gemini models and what they are good for. 
- For the "Specilized Tools" section, add logos for each of the tools. 
- Add images to each of the "What is AI" sections (Model Training, Fine TUning, Alighment, Response Generation)
- Use a code friendly code block for prompts that are shown on the site. This should be true across the entire site. The code block should have a "copy" icon in the corner that the user can click to save it to thier clipboard. Use this for all prompts that are on the site. 
- add logo to the upper right (logo_verticle.png)
- move "about Me" from the top to the left nav. (Leaving only Book Me to Speak at the top)
- Refined color scheme and typography
- Consistent spacing and alignment throughout
- Enhanced visual hierarchy
- Polished UI components (use Magic 21st dev MCP for the best components for the task when it makes sense. I want this site to look amazing.)
- In the RTCF framework section. Make sure the all of the components (RTC and F) all fit on the page horizontally for desktop. They can stack on mobile. But its odd to have the F (format) on a seperate line than the rest. 
- Remove the "Contents" nav header on desktop and the ability to collapse it. 

Files to modify:
- styles/main.css
- styles/animations.css (new)
- scripts/animations.js (new)
- All HTML files for any markup adjustments

Focus on:
- Adding subtle animations for navigation toggles
- Creating smooth transitions between states
- Refining the color scheme and typography
- Ensuring consistent spacing and alignment
- Enhancing visual hierarchy and readability
- Polishing all UI components

Acceptance criteria:
- Animations enhance usability without being distracting
- Color scheme is cohesive and professional
- Typography is consistent and readable
- Spacing and alignment are consistent throughout
- Visual hierarchy guides users through content effectively
- UI components have a polished, professional appearance
- Animations work well across different browsers and devices
```

## 11. Analytics Integration and Performance Optimization

```
Finalize the Practical AI Toolkit website with analytics integration and performance optimization.

Build on the previous version by implementing:
- Google Analytics integration
- Performance optimization for assets
- Loading optimizations
- Final testing and bug fixes
- Deployment preparation

Files to modify:
- index.html (and all content files)
- scripts/analytics.js (new)
- styles and scripts for optimization

Focus on:
- Setting up Google Analytics
- Configuring event tracking for key interactions
- Optimizing images and assets
- Implementing lazy loading where appropriate
- Minifying CSS and JavaScript
- Final testing across browsers and devices
- Preparing for deployment to Vercel

Acceptance criteria:
- Google Analytics is properly integrated
- Event tracking captures key user interactions
- Assets are optimized for fast loading
- Pages load quickly on various connections
- Site functions correctly across modern browsers
- All links and interactive elements work as expected
- Code is clean, commented, and ready for deployment
```

## 12. Final Deployment and Documentation

```
Deploy the Practical AI Toolkit website to production and complete documentation.

Build on the previous version by implementing:
- Production deployment to Vercel
- Complete project documentation
- SEO optimization
- Final accessibility checks
- User testing feedback implementation

Files to modify:
- README.md
- deployment configuration files
- meta tags in HTML files
- Any final adjustments based on testing

Focus on:
- Deploying to Vercel with proper configuration
- Completing comprehensive documentation
- Optimizing meta tags and SEO elements
- Conducting final accessibility checks
- Implementing any feedback from user testing
- Ensuring the site is ready for public use

Acceptance criteria:
- Website is successfully deployed to production
- Documentation is complete and helpful
- SEO elements are properly implemented
- Accessibility standards are met
- All user testing feedback is addressed
- Site is fully functional and ready for public use
```

These prompts provide a systematic approach to building the Practical AI Toolkit website using the vertical slice method. Each prompt builds on the previous one, adding new functionality while maintaining a working product at each stage. Follow them in order for a smooth development process.
