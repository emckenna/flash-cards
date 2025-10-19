import { Link } from 'react-router-dom'
import './Navigation.css'

function Navigation({ showHomeButton, onNavigateHome }) {
  return (
    <nav className="navigation">
      <div className="nav-content">
        <div className="nav-left">
          {showHomeButton && (
            <Link to="/" className="nav-button" onClick={onNavigateHome}>
              ← Back to Topics
            </Link>
          )}
        </div>
        <div className="nav-right">
          <Link to="/about" className="nav-button">
            About
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
