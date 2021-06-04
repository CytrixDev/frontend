import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './Sidebar.module.css'

const Sidebar = () => {
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
					<i className='fas fa-user'></i>Profile
				</NavLink>
				<NavLink
					className={classes.Link}
					to='/login'
					activeClassName={classes.selected}
				>
					<i className='fas fa-sign-out-alt'></i>Logout
				</NavLink>
			</div>
		</div>
	)
}

export default Sidebar
