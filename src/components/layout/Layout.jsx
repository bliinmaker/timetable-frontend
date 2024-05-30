import React from 'react'
import { NavBar } from '../navBar/NavBar'

export const Layout = props => {
	return (
		<div className='layout'>
			<NavBar />
			{props.children}
		</div>
	)
}