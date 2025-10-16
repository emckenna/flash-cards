import './CardNavigation.css'

function CardNavigation({
  currentIndex,
  totalCards,
  onNext,
  onPrevious,
  onShuffle,
  onReset,
  canGoNext,
  canGoPrevious
}) {
  return (
    <div className="card-navigation">
      <div className="progress-info">
        Card {currentIndex + 1} of {totalCards}
      </div>

      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${((currentIndex + 1) / totalCards) * 100}%` }}
        />
      </div>

      <div className="nav-controls">
        <button
          className="nav-button"
          onClick={onPrevious}
          disabled={!canGoPrevious}
          title="Previous card"
        >
          ← Previous
        </button>

        <div className="nav-actions">
          <button className="action-button" onClick={onReset} title="Reset to first card">
            ↻ Reset
          </button>
          <button className="action-button" onClick={onShuffle} title="Shuffle cards">
            🔀 Shuffle
          </button>
        </div>

        <button
          className="nav-button"
          onClick={onNext}
          disabled={!canGoNext}
          title="Next card"
        >
          Next →
        </button>
      </div>
    </div>
  )
}

export default CardNavigation
