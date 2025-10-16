import './DeckSelector.css'

function DeckSelector({ decks, currentDeck, onSelectDeck }) {
  if (decks.length <= 1) {
    return null
  }

  return (
    <div className="deck-selector">
      <label htmlFor="deck-select">Choose a deck:</label>
      <select
        id="deck-select"
        value={currentDeck?.id || ''}
        onChange={(e) => {
          const deck = decks.find(d => d.id === e.target.value)
          if (deck) onSelectDeck(deck)
        }}
      >
        {decks.map(deck => (
          <option key={deck.id} value={deck.id}>
            {deck.name}
          </option>
        ))}
      </select>
    </div>
  )
}

export default DeckSelector
