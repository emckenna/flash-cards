import './AboutModal.css'

function AboutModal({ isOpen, onClose }) {
  if (!isOpen) return null

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          ✕
        </button>

        <h1 className="modal-title">About Flash Cards</h1>

        <div className="modal-body">
          <section className="about-section">
            <h2>What is this?</h2>
            <p>
              Flash Cards is an interactive learning application designed to help you master any topic through active recall and spaced repetition. Whether you're preparing for interviews, learning new programming concepts, or studying any technical subject, this tool makes learning engaging and effective.
            </p>
          </section>

          <section className="about-section">
            <h2>Why I Built This</h2>
            <p>
              I created this app while preparing for software engineering interviews—specifically to learn the SOLID principles. But I also wanted to practice building applications with LLM AI assistance. The result is a reusable flashcard system that can help anyone learn anything.
            </p>
            <p>
              All flashcard content is stored in simple markdown files that you can view, edit, and version control. No databases, no complex configurations—just markdown and learning.
            </p>
          </section>

          <section className="about-section">
            <h2>Features</h2>
            <ul>
              <li>Beautiful flip animations for engaging interactions</li>
              <li>Markdown-based content that's easy to create and edit</li>
              <li>Auto-discovery of new topics with <code>npm run generate-decks</code></li>
              <li>Progress tracking and navigation controls</li>
              <li>Shuffle mode for better retention</li>
              <li>Responsive design that works everywhere</li>
            </ul>
          </section>

          <section className="about-section">
            <h2>Technology Stack</h2>
            <ul>
              <li><strong>React 19</strong> - Modern UI framework</li>
              <li><strong>Vite</strong> - Lightning-fast build tool</li>
              <li><strong>CSS3</strong> - Beautiful animations and styling</li>
              <li><strong>Markdown</strong> - Simple, readable content format</li>
            </ul>
          </section>

          <section className="about-section">
            <h2>Open Source</h2>
            <p>
              This project is open source and available on GitHub. Feel free to fork it, add your own flashcard topics, or use it as a template for your own learning projects.
            </p>
            <a
              href="https://github.com/emckenna/flash-cards"
              target="_blank"
              rel="noopener noreferrer"
              className="github-link"
            >
              View on GitHub →
            </a>
          </section>

          <section className="about-section">
            <h2>Connect</h2>
            <p>
              I'm currently navigating the job market and building projects to showcase my skills. If you're hiring, looking for opportunities yourself, or just want to connect:
            </p>
            <div className="connect-links">
              <a
                href="https://www.linkedin.com/in/ericmckenna/"
                target="_blank"
                rel="noopener noreferrer"
                className="connect-button linkedin"
              >
                <svg className="icon" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
              <a
                href="https://github.com/emckenna"
                target="_blank"
                rel="noopener noreferrer"
                className="connect-button github"
              >
                <svg className="icon" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </a>
            </div>
          </section>

          <section className="about-section support-section">
            <h2>Support This Project</h2>
            <p>
              If you find this useful, consider buying me a coffee! Your support helps me keep building free tools for the community.
            </p>
            <a
              href="https://ko-fi.com/ericmckenna"
              target="_blank"
              rel="noopener noreferrer"
              className="kofi-button"
            >
              ☕ Buy me a coffee
            </a>
          </section>
        </div>
      </div>
    </div>
  )
}

export default AboutModal
