import './LandingPage.css'

function LandingPage({ decks, onSelectDeck }) {
  return (
    <div className="landing-page">
      <header className="landing-header">
        <h1 className="landing-title">Flash Cards</h1>
        <p className="landing-subtitle">
          Learn anything through active recall and spaced repetition
        </p>
      </header>

      <main className="landing-main">
        <h2 className="decks-heading">Choose a Topic</h2>

        <div className="decks-grid">
          {decks.map((deck) => (
            <button
              key={deck.id}
              className="deck-card"
              onClick={() => onSelectDeck(deck)}
            >
              <h3 className="deck-card-title">{deck.name}</h3>
              <p className="deck-card-description">{deck.description}</p>
              <div className="deck-card-arrow">→</div>
            </button>
          ))}
        </div>

        {decks.length === 0 && (
          <div className="no-decks">
            <p>No flashcard decks found.</p>
            <p className="no-decks-help">
              Add markdown files to <code>flashcard-topics/</code> and run{' '}
              <code>npm run generate-decks</code>
            </p>
          </div>
        )}
      </main>
    </div>
  )
}

export default LandingPage
