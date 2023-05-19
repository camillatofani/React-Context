import React, { useState, useContext, useEffect } from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackForm() {
	const [text, setText] = useState('')
	const [rating, setRating] = useState('')
	const [disable, setDisable] = useState(true)
	const [message, setMessage] = useState('')

	const { addFeedback, feedbackEdit, updateFeedback } = useContext(FeedbackContext)

	useEffect(() => {
		if (feedbackEdit.edit === true) {
			setDisable(false)
			setText(feedbackEdit.item.text)
			setRating(feedbackEdit.item.rating)
		}
	}, [feedbackEdit])

	const handleTextChange = (e) => {
		if (text === '') {
			setDisable(true)
			setMessage(null)
		} else if ( text !== '' && text.trim().length <= 10 ) {
			setDisable(true)
			setMessage('Text must be at least 10 characters')
		} else {
			setDisable(false)
			setMessage(null)
		}
		setText(e.target.value)
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		if (rating === null) {
			setMessage('Miss rating')
			return
		}
		let newFeedback = {
			rating: rating,
			text: text
		}
		if (feedbackEdit.edit === true) {
			updateFeedback(feedbackEdit.item.id, newFeedback)
		} else {
			addFeedback(newFeedback)
		}
		setText('')
		setMessage(null)
	}

	return (
		<Card>
			<form onSubmit={ handleSubmit }>
				<h2>Rate our services</h2>
				<RatingSelect select={ (rating) => { setRating(rating) } } />
				<div className='input-group'>
					<input
						onChange={ handleTextChange }
						value={ text }
						type='text'
						placeholder='Write a review' />
						<Button
							type='submit'
							isDisable={ disable }
						>Send</Button>
				</div>
				{ message && <div className='message'>{ message }</div> }
			</form>
		</Card>
	)
}

export default FeedbackForm
