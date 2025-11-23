import { useState } from 'react'
import './App.css'
import Flashcard from './components/Flashcard'
import TopicSelector from './components/TopicSelector'
import { questionSets } from './data/questions/index'

function App() {
	const topics = Object.keys(questionSets)
	const [selectedTopic, setSelectedTopic] = useState(topics[0])
	const [currentIndex, setCurrentIndex] = useState(0)

	const currentQuestions = questionSets[selectedTopic]

	const handleTopicChange = (newTopic) => {
		setSelectedTopic(newTopic)
		setCurrentIndex(0)
	}

	const nextCard = () => {
		setCurrentIndex((prev) => (prev + 1) % currentQuestions.length)
	}

	const prevCard = () => {
		setCurrentIndex((prev) => (prev - 1 + currentQuestions.length) % currentQuestions.length)
	}

	return (
		<div className="app">
			<header>
				<h1>DevLearn</h1>
				<p>Technical Interview Prep</p>
				<TopicSelector
					topics={topics}
					selectedTopic={selectedTopic}
					onTopicChange={handleTopicChange}
				/>
			</header>

			<main>
				<Flashcard
					question={currentQuestions[currentIndex].question}
					answer={currentQuestions[currentIndex].answer}
					category={currentQuestions[currentIndex].category}
				/>

				<div className="controls">
					<button onClick={prevCard} className="btn">← Previous</button>
					<span className="counter">{currentIndex + 1} / {currentQuestions.length}</span>
					<button onClick={nextCard} className="btn">Next →</button>
				</div>
			</main>
		</div>
	)
}

export default App
