import React from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import classes from './Sidebar.module.css'

const Sidebar = () => {
	const history = useHistory()
	return (
		<div className={classes.Sidebar}>
			<h1>Cytrix</h1>
			<div className={classes.Links}>
				<NavLink
					className={classes.Link}
					to='/app/simulation'
					activeClassName={classes.selected}
				>
					<i className='fas fa-network-wired'></i>Simulator
				</NavLink>
				<NavLink
					className={classes.Link}
					to='/app/profile'
					activeClassName={classes.selected}
				>
					<i className='fas fa-user'></i>Account
				</NavLink>
				<div
					className={classes.Link}
					onClick={() => {
						localStorage.clear()
						history.replace('/login')
					}}
					activeClassName={classes.selected}
				>
					<i className='fas fa-sign-out-alt'></i>Logout
				</div>
			</div>
		</div>
	)
}

export default Sidebar
