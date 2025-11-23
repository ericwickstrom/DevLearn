import { useState } from 'react'
import './App.css'
import Flashcard from './components/Flashcard'
import { questions } from './data/questions'

function App() {
	const [currentIndex, setCurrentIndex] = useState(0)

	const nextCard = () => {
		setCurrentIndex((prev) => (prev + 1) % questions.length)
	}

	const prevCard = () => {
		setCurrentIndex((prev) => (prev - 1 + questions.length) % questions.length)
	}

	return (
		<div className="app">
			<header>
				<h1>DevLearn</h1>
				<p>Technical Interview Prep</p>
			</header>

			<main>
				<Flashcard
					question={questions[currentIndex].question}
					answer={questions[currentIndex].answer}
					category={questions[currentIndex].category}
				/>

				<div className="controls">
					<button onClick={prevCard} className="btn">← Previous</button>
					<span className="counter">{currentIndex + 1} / {questions.length}</span>
					<button onClick={nextCard} className="btn">Next →</button>
				</div>
			</main>
		</div>
	)
}

export default App
