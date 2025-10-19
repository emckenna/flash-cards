import './CardNavigation.css'

function CardNavigation({
  currentIndex,
  totalCards,
  onNext,
  onPrevious,
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

      <div className="nav-main-buttons">
        <button
          className="nav-button"
          onClick={onPrevious}
          disabled={!canGoPrevious}
          title="Previous card"
        >
          ← Previous
        </button>

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
