import React, { useState } from 'react'
import classes from './Contact.module.css'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'
import { useHistory } from 'react-router-dom'
const Contact = () => {
	const [email, setEmail] = useState('')
	const [message, setMessage] = useState('')
	const history = useHistory()
	const [timeOut, setTimeOut] = useState(false)
	const onFormSubmit = async (e) => {
		e.preventDefault()
		localStorage.setItem('message', JSON.stringify({ email, message }))
		if (email && message) {
			setTimeOut(true)
			setTimeout(() => {
				history.push('/')
			}, 3000)
		}
	}
	return (
		<div className={classes.Login}>
			<div className={classes.Container}>
				<div className={classes.Back}>
					<svg
						width='301'
						height='268'
						viewBox='0 0 301 268'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M83.6111 234.5C70.2333 234.5 56.8556 222.775 50.1667 217.75C16.7222 194.3 6.68889 185.925 0 180.9V251.25C0 260.499 7.48842 268 16.7222 268H150.5C159.734 268 167.222 260.499 167.222 251.25V180.9C160.533 185.925 150.5 194.3 117.056 217.75C110.367 222.775 96.9889 234.5 83.6111 234.5ZM150.5 134H16.7222C7.48842 134 0 141.501 0 150.75V159.125C13.3778 169.175 11.7056 169.175 60.2 204.35C65.2167 207.7 75.25 217.75 83.6111 217.75C91.9722 217.75 102.006 207.7 107.022 206.025C155.517 170.85 153.844 170.85 167.222 160.8V150.75C167.222 141.501 159.734 134 150.5 134ZM284.278 83.75H117.056C107.822 83.75 100.333 91.2509 100.333 100.5V117.25H150.5C167.855 117.25 182.162 130.556 183.793 147.515L183.944 147.4V217.75H284.278C293.512 217.75 301 210.249 301 201V100.5C301 91.2509 293.512 83.75 284.278 83.75ZM267.556 150.75H234.111V117.25H267.556V150.75ZM83.6111 100.5C83.6111 82.0279 98.6141 67 117.056 67H234.111V16.75C234.111 7.50086 226.623 0 217.389 0H50.1667C40.9329 0 33.4444 7.50086 33.4444 16.75V117.25H83.6111V100.5Z'
							fill='white'
						/>
					</svg>
				</div>
				<div className={classes.Form}>
					<h1 className={[classes.AppName].join(' ')}>Contact Us!</h1>
					<Form onSubmit={onFormSubmit}>
						{timeOut ? (
							<div className={classes.Alert}>Message has been sent</div>
						) : (
							<div></div>
						)}
						<FormGroup>
							<Label className='text-muted'>Email</Label>
							<Input
								required
								type='email'
								placeholder='Enter email'
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
						</FormGroup>

						<FormGroup>
							<Label className='text-muted'>Message</Label>
							<Input
								required
								type='textarea'
								placeholder='Type Yo'
								value={message}
								onChange={(e) => setMessage(e.target.value)}
							/>
						</FormGroup>
						<FormGroup>
							<Button className='w-100 mt-2' color='success' type='submit'>
								Submit
							</Button>
						</FormGroup>
					</Form>
				</div>
			</div>
		</div>
	)
}

export default Contact
