import { createContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
	const [feedback, setFeedback] = useState([
		{
			id: 1,
			text: 'Feedback number 1',
			rating: 9
		},
		{
			id: 2,
			text: 'Feedback number 2',
			rating: 5
		},
		{
			id: 3,
			text: 'Feedback number 3',
			rating: 6
		}
	])
	const [feedbackEdit, setFeedbackEdit] = useState({
		item: {},
		edit: false
	})

	const addFeedback = (newFeedback) => {
		newFeedback.id = uuidv4()
		setFeedback([ newFeedback, ...feedback])
	}

	const deleteFeedback = (id) => {
		if (window.confirm('Sure dude?')) {
			setFeedback(feedback.filter(singleFeedback => singleFeedback.id !== id))
		}
	}

	const editFeeedback = (item) => {
		setFeedbackEdit({ item, edit: true })
	}

	const updateFeedback = (id, updItem) => {
		setFeedback(feedback.map((item) => item.id === id ? {
			...item, ...updItem
		} : item ))
	}

	return (
		<FeedbackContext.Provider value={ {
			feedback,
			addFeedback,
			deleteFeedback,
			feedbackEdit,
			editFeeedback,
			updateFeedback
		} }>
			{ children }
		</FeedbackContext.Provider>
	)
}

export default FeedbackContext
