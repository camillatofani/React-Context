import React from 'react'
import { Navigate, useNavigate, useParams, Routes, Route } from 'react-router-dom'

function Post() {
	const params = useParams()

	const navigate = useNavigate()
	const status = 200
	if (status === 404) {
		return <Navigate to='/404' />
	}
	const Click = () => {
		console.log('Hello')
		navigate('/about')
	}

	return (
		<>
			<div>
				{/* <h1>
					Post { params.id }
				</h1>
				<p>Author name: { params.name }</p> */}
				<button onClick={ Click }>Click</button>
			</div>
			<Routes>
				<Route path='/show' element={<h1>Show</h1>} />
			</Routes>
		</>
	)
}

export default Post
