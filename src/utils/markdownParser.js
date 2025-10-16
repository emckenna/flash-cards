/**
 * Parses a markdown file into flashcard objects
 *
 * Expected format:
 * # Deck Title
 *
 * ## Category Name (optional)
 *
 * ### Card 1
 * **Q:** Question text here?
 * **A:** Answer text here.
 *
 * ### Card 2
 * **Q:** Another question?
 * **A:** Another answer.
 */

export function parseMarkdownFlashcards(markdown) {
  const cards = []
  const lines = markdown.split('\n')

  let currentCard = null
  let currentCategory = ''
  let isReadingQuestion = false
  let isReadingAnswer = false
  let currentText = []

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim()

    // Category heading (## ...)
    if (line.startsWith('## ') && !line.startsWith('### ')) {
      currentCategory = line.replace('## ', '').trim()
      continue
    }

    // Card heading (### ...)
    if (line.startsWith('### ')) {
      // Save previous card if exists
      if (currentCard && currentCard.question && currentCard.answer) {
        cards.push(currentCard)
      }

      // Start new card
      currentCard = {
        id: cards.length,
        category: currentCategory,
        title: line.replace('### ', '').trim(),
        question: '',
        answer: ''
      }
      isReadingQuestion = false
      isReadingAnswer = false
      currentText = []
      continue
    }

    // Question marker
    if (line.startsWith('**Q:**') || line.startsWith('**Question:**')) {
      if (isReadingAnswer && currentText.length > 0) {
        currentCard.answer = currentText.join('\n').trim()
        currentText = []
      }

      isReadingQuestion = true
      isReadingAnswer = false

      // Get question text from same line if present
      const questionText = line.replace(/\*\*Q(uestion)?:\*\*/, '').trim()
      if (questionText) {
        currentText.push(questionText)
      }
      continue
    }

    // Answer marker
    if (line.startsWith('**A:**') || line.startsWith('**Answer:**')) {
      if (isReadingQuestion && currentText.length > 0) {
        currentCard.question = currentText.join('\n').trim()
        currentText = []
      }

      isReadingQuestion = false
      isReadingAnswer = true

      // Get answer text from same line if present
      const answerText = line.replace(/\*\*A(nswer)?:\*\*/, '').trim()
      if (answerText) {
        currentText.push(answerText)
      }
      continue
    }

    // Continue reading question or answer
    if ((isReadingQuestion || isReadingAnswer) && line) {
      currentText.push(line)
    }

    // Empty line might signal end of current section
    if (!line && currentText.length > 0) {
      if (isReadingQuestion) {
        currentCard.question = currentText.join('\n').trim()
        currentText = []
      } else if (isReadingAnswer) {
        currentCard.answer = currentText.join('\n').trim()
        currentText = []
      }
    }
  }

  // Don't forget the last card
  if (currentCard) {
    if (currentText.length > 0) {
      if (isReadingAnswer) {
        currentCard.answer = currentText.join('\n').trim()
      } else if (isReadingQuestion) {
        currentCard.question = currentText.join('\n').trim()
      }
    }

    if (currentCard.question && currentCard.answer) {
      cards.push(currentCard)
    }
  }

  return cards
}
