import React from 'react'
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom'
import Card from './components/shared/Card'
import Header from './components/Header'
import FeedbackForm from './components/FeedbackForm'
import FeedbackStats from './components/FeedbackStats'
import FeedbackList from './components/FeedbackList'
import AboutIconLink from './components/AboutIconLink'
import AboutPage from './pages/AboutPage'
// import Post from './pages/Post'
import { FeedbackProvider } from './context/FeedbackContext'

function App() {
	return (
		<FeedbackProvider>
			<Router>
				<Header />
				<div className='container'>
					<Card>
						<NavLink to='/' className='normalLink' activeclassname='active'>Home</NavLink>
						<NavLink to='/about' className='normalLink' activeclassname='active'>About</NavLink>
						{/* <NavLink to='/post/30/camilla' activeclassname='active'>Post</NavLink> */ }
					</Card>
					<Routes>
						<Route exact path='/' element={
							<>
								<FeedbackForm />
								<FeedbackStats />
								<FeedbackList />
								<AboutIconLink />
							</>
						}>
						</Route>
						<Route exact path='/about' element={ <AboutPage /> } />
						{/* <Route path='/post/:id/:name' element={ <Post /> } />
						<Route path='/post/*' element={ <Post /> } /> */}
					</Routes>
				</div>
			</Router>
		</FeedbackProvider>
  );
}

export default App
