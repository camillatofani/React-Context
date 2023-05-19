import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../components/shared/Card'
import Button from '../components/shared/Button'

function AboutPage() {
	return (
		<Card>
			<div className='about'>
				<h1>About this page</h1>
				<p>Lorem ipsum</p>
				<p>Version: 1.0.0</p>
				{/* <Link to={ {
					pathname: '/about',
					search: '?sort=name',
					hash: '#hello
				}}> */}
				<Link to='/'>
					<Button version='secondary'>Back to home</Button>
				</Link>
			</div>
		</Card>
	)
}

export default AboutPage
