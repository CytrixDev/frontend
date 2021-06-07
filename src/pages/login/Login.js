import React, { useState, useEffect } from 'react'
import { Form, FormGroup, Button, Label, Input } from 'reactstrap'
import { useHistory } from 'react-router-dom'
import classes from './Login.module.css'
// import axios from 'axios'
import { users } from '../../middlewares/users/userhelper'

const LoginPage = () => {
	const history = useHistory()
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	useEffect(() => {
		if (JSON.parse(localStorage.getItem('userData'))) {
			history.replace('/app/simulation')
		}
	}, [])

	const checkDB = () => {
		console.log(users)
		const inDB = users.find((user) => user.email === email).length > 0
		console.log(users.find((user) => user.email === email).length > 0)
		// const userData = JSON.parse(localStorage.getItem('userData'))
		// const inLocal = userData.email === email && userData.password === password
		return inDB
	}

	const onFormSubmit = async (e) => {
		e.preventDefault()
		try {
			if (checkDB()) return

			// Url yi almak lazim
			// const res = await axios.post('https://jsonplaceholder.typicode.com/todos')
			// console.log(res)
			localStorage.setItem('userData', JSON.stringify({ email, password }))

			history.push('/app')
		} catch (e) {
			console.log(e.response)
		}
	}

	return (
		<div className={classes.Login}>
			<div className={classes.Container}>
				<div className={classes.Back}>Welcome!</div>
				<div className={classes.Form}>
					<h1 className={[classes.AppName].join(' ')}>Cytrix</h1>
					<Form onSubmit={onFormSubmit}>
						<FormGroup>
							<Label className='text-muted'>Email address</Label>
							<Input
								required
								type='email'
								placeholder='Enter email'
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
						</FormGroup>

						<FormGroup>
							<Label className='text-muted'>Password</Label>
							<Input
								required
								type='password'
								placeholder='Password'
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
						</FormGroup>
						<FormGroup>
							<Button className='w-100 mt-2' color='primary' type='submit'>
								Login
							</Button>
						</FormGroup>

						<FormGroup className='d-flex pl-4 justify-content-between mt-4'>
							<Label check className='text-muted'>
								<Input type='checkbox' /> Remember me
							</Label>
							<div className='text-muted'>Forgot Password</div>
						</FormGroup>

						<div className='d-flex mt-5'>
							<div className='text-muted'>Not a user?</div>
							<div
								className='ml-3 text-primary'
								onClick={() => history.push('/signup')}
							>
								Sign Up
							</div>
						</div>
					</Form>
				</div>
			</div>
		</div>
	)
}

export default LoginPage
