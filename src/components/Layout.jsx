import { useState } from 'react'
import { Outlet, Link } from 'react-router-dom'
import NavBar from './NavBar'

const Layout = () => {
	return (
		<>
			<div className='w-full h-screen bg-inherit'>
				<NavBar />
				<div className="flex justify-center w-full h-full">
					<Outlet />
				</div>
			</div>
		</>
	)
}

export default Layout