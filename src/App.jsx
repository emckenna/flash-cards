import { useState, useEffect } from 'react'
import LandingPage from './components/LandingPage'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import AboutModal from './components/AboutModal'
import FlashCard from './components/FlashCard'
import CardNavigation from './components/CardNavigation'
import DeckSelector from './components/DeckSelector'
import { parseMarkdownFlashcards } from './utils/markdownParser'
import './App.css'

function App() {
  const [decks, setDecks] = useState([])
  const [currentDeck, setCurrentDeck] = useState(null)
  const [cards, setCards] = useState([])
  const [currentCardIndex, setCurrentCardIndex] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)
  const [showAbout, setShowAbout] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  // Load available decks on mount
  useEffect(() => {
    const loadAvailableDecks = async () => {
      try {
        const response = await fetch('/flashcard-topics/decks.json')
        const decksData = await response.json()

        // Add the full path to each deck's file
        const decksWithPaths = decksData.map(deck => ({
          ...deck,
          file: `/flashcard-topics/${deck.file}`
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
    setCurrentCardIndex(0)
    setIsFlipped(false)
  }

  const handleNavigateHome = () => {
    setCurrentDeck(null)
    setCards([])
  }

  const handleSelectDeck = (deck) => {
    loadDeck(deck)
  }

  if (isLoading) {
    return (
      <div className="app">
        <div className="loading">Loading flashcards...</div>
      </div>
    )
  }

  // Show landing page if no deck is selected
  if (!currentDeck) {
    return (
      <>
        <Navigation
          onNavigateHome={handleNavigateHome}
          onShowAbout={() => setShowAbout(true)}
          showHomeButton={false}
        />
        <div className="app" style={{ paddingTop: '80px' }}>
          <LandingPage decks={decks} onSelectDeck={handleSelectDeck} />
          <Footer />
        </div>
        <AboutModal isOpen={showAbout} onClose={() => setShowAbout(false)} />
      </>
    )
  }

  // Show flashcard view if deck is selected
  return (
    <>
      <Navigation
        onNavigateHome={handleNavigateHome}
        onShowAbout={() => setShowAbout(true)}
        showHomeButton={true}
      />
      <div className="app" style={{ paddingTop: '80px' }}>
        <header className="app-header">
          <h1>{currentDeck?.name} - Flash Cards</h1>
          <DeckSelector
            decks={decks}
            currentDeck={currentDeck}
            onSelectDeck={loadDeck}
          />
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
            onShuffle={handleShuffle}
            onReset={handleReset}
            canGoNext={currentCardIndex < cards.length - 1}
            canGoPrevious={currentCardIndex > 0}
          />
        </main>
        <Footer />
      </div>
      <AboutModal isOpen={showAbout} onClose={() => setShowAbout(false)} />
    </>
  )
}

export default App
