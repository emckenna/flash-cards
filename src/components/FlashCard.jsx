import Markdown from 'react-markdown'
import './FlashCard.css'

function FlashCard({ card, isFlipped, onFlip }) {
  return (
    <div className="flashcard-container" onClick={onFlip}>
      <div className={`flashcard ${isFlipped ? 'flipped' : ''}`}>
        <div className="flashcard-face flashcard-front">
          <div className="flashcard-content">
            {card.category && (
              <div className="flashcard-category">{card.category}</div>
            )}
            <div className="flashcard-text">
              <Markdown>{card.question}</Markdown>
            </div>
            <div className="flashcard-hint">Click to reveal answer</div>
          </div>
        </div>
        <div className="flashcard-face flashcard-back">
          <div className="flashcard-content">
            {card.category && (
              <div className="flashcard-category">{card.category}</div>
            )}
            <div className="flashcard-text">
              <Markdown>{card.answer}</Markdown>
            </div>
            <div className="flashcard-hint">Click to see question</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FlashCard
