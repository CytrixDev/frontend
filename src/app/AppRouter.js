import React, {useEffect} from 'react'
import styles from './AppRouter.module.css'
import { Route, Switch, useRouteMatch, Redirect } from 'react-router-dom'
import AppSimulation from './app-simulation/AppSimulation'
import Sidebar from '../components/Sidebar/Sidebar'
import Profile from './app-profile/Profile'
import SimulationResult from "./app-simulation/simulation-result/SimulationResult";

const AppRouter = () => {
	const { path } = useRouteMatch()

	useEffect(() => {
		const userData = localStorage.getItem('userData');
		console.log(userData)
	}, [])

	return (
		<div className={styles.App}>
			<Sidebar />
			<div className={styles.main}>
				<Switch>
					<Route path={`${path}/simulation/result`}>
						<SimulationResult />
					</Route>
					<Route path={`${path}/simulation`}>
						<AppSimulation />
					</Route>
					<Route path={`${path}/profile`}>
						<Profile />
					</Route>
					{/*Gave up here*/}
					<Route path={`${path}`}>
						<Redirect to='/app/simulation'/>
					</Route>
				</Switch>
			</div>
		</div>
	)
}

export default AppRouter
