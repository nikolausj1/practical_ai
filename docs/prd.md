
# Product Requirements Document (PRD): Practical AI Toolkit

## 1. Overview

**Project Name:** Practical AI Toolkit  
**URL:** [www.practicalaitoolkit.com](http://www.practicalaitoolkit.com)  

**Purpose:**  
A public-facing website that complements an in-person or virtual AI presentation. It serves as an educational resource for attendees and a promotional platform to secure future speaking opportunities.

**Primary Goals:**
- Reinforce content from the talk.
- Let users explore AI concepts at their own pace.
- Promote Justin as a speaker.
- Optionally support future growth (e.g. newsletter).
- Track site usage and engagement.

---

## 2. Audience

**Target Users:**
- Working professionals in non-technical roles.
- Beginners or casual users of AI.
- Some are tech-skeptical or unfamiliar with digital tools.
- Motivated to understand AI practically — for personal or work use.
- Accessing the site post-talk or via referral.

**User Mindset:**
- Curious but cautious.
- Prefers plain language, clear structure, and low-pressure exploration.

---

## 3. Core User Flows

Upon landing, users should be able to:

1. **See what's available**
   - Structured sidebar navigation or table of contents.

2. **Browse foundational concepts**
   - "What is AI?", "How it works", etc.

3. **Drill down into practical sections**
   - Prompting basics, tool lists, common mistakes.
   - Content organized into expandable sections with sub-categories only (no deep nesting).

4. **Review material covered in the talk**
   - Find references without needing to take notes.

5. **Contact or book Justin**
   - Trigger form or link via prominent CTA.

6. **(Optional Future Flow)** Sign up for updates or a newsletter.

---

## 4. Feature Requirements

### 🟩 Essential Features

| Feature                          | Description |
|----------------------------------|-------------|
| **Left-Side Collapsible Navigation** | Fixed sidebar with main categories and expandable sub-sections. Transforms into hamburger menu on mobile. |
| **Top Nav Bar**                  | Includes "About Me" and a clear "Book Me to Speak" button. |
| **Clean Content Pages**          | Scrollable HTML sections with headings and links. |
| **Responsive Design**            | Works across desktop, tablet, and mobile. Desktop-first approach with mobile accessibility. |
| **Analytics**                    | Regular Google Analytics integration. |

### 🟨 Nice-to-Have Features

| Feature                          | Description |
|----------------------------------|-------------|
| **Slide-In Contact Form**        | Triggered by CTA, no backend needed (e.g. [Formspree](https://formspree.io)). |
| **Social Sharing Buttons**       | Copy link, share via email or LinkedIn. |
| **Dark Mode Toggle**             | Optional UI enhancement for accessibility. |

---

## 5. Technical Requirements

- **No backend** – front-end stack only.
- **Hostable on static site platforms** – GitHub Pages, Netlify, Vercel.
- **Tech stack:** HTML, CSS, and light JavaScript.
- **Development:** AI-coded in VSCode using Cline.
- **No heavy frameworks** – prefer vanilla JS or lightweight tools like Alpine.js.
- **Performance:** Normal loading times acceptable, semantic HTML, accessible markup.
- **Analytics:** Regular Google Analytics integration.
- **Browser Support:** Modern browsers only (no legacy support needed).
- **Design Tools:** Use Magic21 MCP for UI component creation and design.

---

## 6. Branding & Design

| Element              | Notes |
|----------------------|-------|
| **Website Name**     | Practical AI Toolkit |
| **Logo**             | Will be provided by user |
| **Visual Tone**      | Clean, professional, minimal, approachable |
| **Fonts**            | _TBD — suggest `Inter`, `IBM Plex`, or system defaults unless user specifies_ |
| **Color Palette**    | _TBD — waiting for hex codes or deck reference_ |
| **Imagery**          | Light illustrations or icons, likely aligned with presentation style |
| **Layout**           | Sidebar + scrollable content + top nav. High contrast, lots of white space. |

---

## 7. Content Types

The site will include:

- **Foundational AI Concepts**
- **AI vs. Google Search Comparison**
- **Prompting Frameworks**
- **Tool Recommendations**
- **Tips, Tricks, and Misconceptions**
- **About Me Bio**
- **Speaking Engagement CTA**

---

## 8. Implementation Details

### Content Source
- All content comes from `docs/Website_Content01.md`
- Navigation structure will be provided separately (not extracted from content)

### Hosting & Domain
- Domain already purchased on Porkbun
- DNS not yet configured (setup guidance needed)

---
