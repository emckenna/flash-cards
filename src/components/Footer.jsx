import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">
          Built with React + Vite + <a href="https://claude.ai" target="_blank" rel="noopener noreferrer" className="claude-link">Claude</a>
        </p>
        <div className="footer-links">
          <a
            href="https://emckenna.github.io"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            Portfolio
          </a>
          <span className="footer-divider">•</span>
          <a
            href="https://github.com/emckenna/flash-cards"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            GitHub
          </a>
          <span className="footer-divider">•</span>
          <a
            href="https://ko-fi.com/ericmckenna"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link kofi-link"
          >
            ☕ Buy me a coffee
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
