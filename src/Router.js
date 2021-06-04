import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './pages/login/Login'
import Landing from './pages/landing/Landing'
import App from './app/AppRouter'
import Signup from "./pages/signup/Signup";

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
				<Route path='/'>
					<Landing />
				</Route>
			</Switch>
		</Router>
	)
}

export default router
