import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import AboutPage from './components/AboutPage'
import FlashCard from './components/FlashCard'
import CardNavigation from './components/CardNavigation'
import { parseMarkdownFlashcards } from './utils/markdownParser'
import './App.css'

function App() {
  const [decks, setDecks] = useState([])
  const [currentDeck, setCurrentDeck] = useState(null)
  const [cards, setCards] = useState([])
  const [originalCards, setOriginalCards] = useState([])
  const [currentCardIndex, setCurrentCardIndex] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  // Load available decks on mount
  useEffect(() => {
    const loadAvailableDecks = async () => {
      try {
        const response = await fetch('./flashcard-topics/decks.json')
        const decksData = await response.json()

        // Add the full path to each deck's file
        const decksWithPaths = decksData.map(deck => ({
          ...deck,
          file: `./flashcard-topics/${deck.file}`
        }))

        setDecks(decksWithPaths)
        setIsLoading(false)
      } catch (error) {
        console.error('Error loading decks:', error)
        setIsLoading(false)
      }
    }

    loadAvailableDecks()
  }, [])

  const loadDeck = async (deck) => {
    try {
      const response = await fetch(deck.file)
      const markdown = await response.text()
      const parsedCards = parseMarkdownFlashcards(markdown)
      setCards(parsedCards)
      setOriginalCards(parsedCards)
      setCurrentDeck(deck)
      setCurrentCardIndex(0)
      setIsFlipped(false)
    } catch (error) {
      console.error('Error loading deck:', error)
    }
  }

  const handleNext = () => {
    if (currentCardIndex < cards.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1)
      setIsFlipped(false)
    }
  }

  const handlePrevious = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1)
      setIsFlipped(false)
    }
  }

  const handleFlip = () => {
    setIsFlipped(!isFlipped)
  }

  const handleShuffle = () => {
    const shuffled = [...cards].sort(() => Math.random() - 0.5)
    setCards(shuffled)
    setCurrentCardIndex(0)
    setIsFlipped(false)
  }

  const handleReset = () => {
    setCards(originalCards)
    setCurrentCardIndex(0)
    setIsFlipped(false)
  }

  const handleNavigateHome = () => {
    setCurrentDeck(null)
    setCards([])
    setOriginalCards([])
  }

  const handleSelectDeck = (deck) => {
    loadDeck(deck)
  }

  if (isLoading) {
    return (
      <Router basename="/flash-cards">
        <div className="app">
          <div className="loading">Loading flashcards...</div>
        </div>
      </Router>
    )
  }

  return (
    <Router basename="/flash-cards">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navigation showHomeButton={!!currentDeck} onNavigateHome={handleNavigateHome} />
              <div className="app" style={{ paddingTop: '60px' }}>
                {!currentDeck ? (
                  <LandingPage decks={decks} onSelectDeck={handleSelectDeck} />
                ) : (
                  <>
                    <header className="app-header">
                      <h1>{currentDeck?.name}</h1>
                      <div className="deck-actions">
                        <button className="deck-action-button" onClick={handleReset} title="Reset to first card">
                          ⟲
                        </button>
                        <button className="deck-action-button" onClick={handleShuffle} title="Shuffle cards">
                          ⤨
                        </button>
                      </div>
                    </header>

                    <main className="app-main">
                      <FlashCard
                        card={cards[currentCardIndex]}
                        isFlipped={isFlipped}
                        onFlip={handleFlip}
                      />

                      <CardNavigation
                        currentIndex={currentCardIndex}
                        totalCards={cards.length}
                        onNext={handleNext}
                        onPrevious={handlePrevious}
                        canGoNext={currentCardIndex < cards.length - 1}
                        canGoPrevious={currentCardIndex > 0}
                      />
                    </main>
                  </>
                )}
                <Footer />
              </div>
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <Navigation showHomeButton={true} />
              <div className="app" style={{ paddingTop: '60px' }}>
                <AboutPage />
                <Footer />
              </div>
            </>
          }
        />
      </Routes>
    </Router>
  )
}

export default App
