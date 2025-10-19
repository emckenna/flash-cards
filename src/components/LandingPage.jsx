import { useState, useEffect } from 'react'
import { parseMarkdownFlashcards } from '../utils/markdownParser'
import './LandingPage.css'

function LandingPage({ decks, onSelectDeck }) {
  const [deckCounts, setDeckCounts] = useState({})

  useEffect(() => {
    // Load card counts for each deck
    const loadCardCounts = async () => {
      const counts = {}

      for (const deck of decks) {
        try {
          const response = await fetch(deck.file)
          const markdown = await response.text()
          const cards = parseMarkdownFlashcards(markdown)
          counts[deck.id] = cards.length
        } catch (error) {
          console.error(`Error loading card count for ${deck.id}:`, error)
          counts[deck.id] = 0
        }
      }

      setDeckCounts(counts)
    }

    if (decks.length > 0) {
      loadCardCounts()
    }
  }, [decks])

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
              {deckCounts[deck.id] !== undefined && (
                <p className="deck-card-count">
                  {deckCounts[deck.id]} {deckCounts[deck.id] === 1 ? 'card' : 'cards'}
                </p>
              )}
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
