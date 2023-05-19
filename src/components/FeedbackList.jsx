import React, { useContext } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import FeedbackItem from './FeedbackItem'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackList() {
	const { feedback } = useContext(FeedbackContext)

	if (!feedback || feedback.length === 0) {
		return <h1>No feedback yet</h1>
	}

	return (
		<div className='feedback-list'>
			<AnimatePresence>
				{ feedback.map((item, index) => (
					<motion.div
						key={ item.id }
						initial={{opacity: 0}}
						animate={{opacity: 1}}
						exit={{opacity: 0}}
					>
							<FeedbackItem
								key={ index.id }
								item={ item }
							/>
						</motion.div>
					))}
			</AnimatePresence>
		</div>
	)
}

export default FeedbackList
