import './TopicSelector.css'

function TopicSelector({ topics, selectedTopic, onTopicChange }) {
	return (
		<div className="topic-selector">
			<label htmlFor="topic-select">Choose Topic:</label>
			<select
				id="topic-select"
				value={selectedTopic}
				onChange={(e) => onTopicChange(e.target.value)}
				className="topic-dropdown"
			>
				{topics.map((topic) => (
					<option key={topic} value={topic}>
						{topic}
					</option>
				))}
			</select>
		</div>
	)
}

export default TopicSelector
