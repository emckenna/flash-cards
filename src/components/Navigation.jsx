import './Navigation.css'

function Navigation({ onNavigateHome, onShowAbout, showHomeButton }) {
  return (
    <nav className="navigation">
      <div className="nav-content">
        <div className="nav-left">
          {showHomeButton && (
            <button className="nav-button" onClick={onNavigateHome}>
              ← Back to Topics
            </button>
          )}
        </div>
        <div className="nav-right">
          <button className="nav-button" onClick={onShowAbout}>
            About
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
