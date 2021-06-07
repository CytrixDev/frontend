import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './pages/login/Login'
import Landing from './pages/landing/Landing'
import App from './app/AppRouter'
import Signup from './pages/signup/Signup'
import Contact from './pages/contact/contact'
import Prices from './pages/prices/prices'

const router = () => {
	return (
		<Router>
			<Switch>
				<Route path='/signup'>
					<Signup />
				</Route>
				<Route path='/login'>
					<Login />
				</Route>
				<Route path='/app'>
					<App />
				</Route>
				<Route path='/contact'>
					<Contact />
				</Route>
				<Route path='/pricing'>
					<Prices />
				</Route>
				<Route path='/'>
					<Landing />
				</Route>
			</Switch>
		</Router>
	)
}

export default router
