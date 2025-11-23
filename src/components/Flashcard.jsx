import { useState } from 'react'
import './Flashcard.css'

function Flashcard({ question, answer, category }) {
	const [isFlipped, setIsFlipped] = useState(false)

	const handleFlip = () => {
		setIsFlipped(!isFlipped)
	}

	return (
		<div className="flashcard-container">
			<div className="category-tag">{category}</div>
			<div
				className={`flashcard ${isFlipped ? 'flipped' : ''}`}
				onClick={handleFlip}
			>
				<div className="flashcard-inner">
					<div className="flashcard-front">
						<h2>Question</h2>
						<p>{question}</p>
						<span className="tap-hint">Tap to reveal answer</span>
					</div>
					<div className="flashcard-back">
						<h2>Answer</h2>
						<p>{answer}</p>
						<span className="tap-hint">Tap to see question</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Flashcard
