import React, { useEffect, useState } from 'react'
import styles from './Profile.module.css'
import { Row, Col, FormGroup, Label, Button, Input } from 'reactstrap'
import { useHistory } from 'react-router-dom'
import { users } from '../../middlewares/users/userhelper'

export const Profile = () => {
	const [userData, setUserData] = useState(null)
	const history = useHistory()

	// eslint-disable-next-line no-unused-vars
	const [editData, setEditData] = useState(false)

	const [editName, setEditName] = useState(null)
	//
	//
	const [editLastName, setEditLastName] = useState(null)

	useEffect(() => {
		if (!JSON.parse(localStorage.getItem('userData'))) {
			history.replace('/login')
		}
		let user = users.find(
			(user) =>
				user.email === JSON.parse(localStorage.getItem('userData')).email
		)
		if (!user) user = JSON.parse(localStorage.getItem('userData'))
		setUserData(user)
		setEditName(user.firstName)
		setEditLastName(user.lastName)
	}, [])

	return (
		<div className={styles.profileBody}>
			<h1 className='mt-0 mb-5'>Account</h1>
			<div>
				<Row>
					<Col className='d-flex justify-content-center align-items-center mb-5'>
						<img className={styles.pP} src='https://www.gravatar.com/avatar' />
					</Col>
				</Row>
				<Row className='d-flex justify-content-center align-items-center'>
					<Col sm='6'>
						<FormGroup className='d-flex flex-column'>
							<Label for='name'>First Name</Label>
							{userData && !editData ? (
								<Label style={{ fontWeight: 'bold' }}>
									{userData.firstName}
								</Label>
							) : userData && editData ? (
								<Input
									type='text'
									placeholder={userData.firstName}
									value={editName}
									onChange={(event) => {
										setEditName(event.target.value)
									}}
								/>
							) : (
								<div>Loading</div>
							)}
							{/*<Input*/}
							{/*	type='text'*/}
							{/*	name='name'*/}
							{/*	id='name'*/}
							{/*	disabled*/}
							{/*	placeholder='John'*/}
							{/*/>*/}
						</FormGroup>
					</Col>
					<Col sm='6'>
						<FormGroup>
							<Label for='surname'>Last Name</Label>
							{userData && !editData ? (
								<Label style={{ fontWeight: 'bold' }}>
									{userData.lastName}
								</Label>
							) : userData && editData ? (
								<Input
									type='text'
									placeholder={userData.lastName}
									value={editLastName}
									onChange={(event) => {
										setEditLastName(event.target.value)
									}}
								/>
							) : (
								<div>Loading</div>
							)}
							{/*<Input*/}
							{/*	type='text'*/}
							{/*	name='surname'*/}
							{/*	id='surname'*/}
							{/*	disabled*/}
							{/*	placeholder='Doe'*/}
							{/*/>*/}
						</FormGroup>
					</Col>
				</Row>
				<Row className='d-flex justify-content-start align-items-center'>
					<Col sm='6'>
						<FormGroup className='d-flex flex-column'>
							<Label for='name'>Email</Label>
							{userData && !editData ? (
								<Label style={{ fontWeight: 'bold' }}>{userData.email}</Label>
							) : userData && editData ? (
								<Input type='email' placeholder={userData.email} readOnly />
							) : (
								<div>Loading</div>
							)}
							{/*<Input*/}
							{/*	type='text'*/}
							{/*	name='email'*/}
							{/*	id='email'*/}
							{/*	disabled*/}
							{/*	placeholder='johndoe@mail.com'*/}
							{/*/>*/}
						</FormGroup>
					</Col>
					{/*<Col sm='6'>*/}
					{/*	<FormGroup className='d-flex flex-column'>*/}
					{/*		<Label for='password'>Password</Label>*/}
					{/*		{userData ? (*/}
					{/*			<Label style={{ fontWeight: 'bold' }}>*/}
					{/*				{userData.password}*/}
					{/*			</Label>*/}
					{/*		) : (*/}
					{/*			<div>Loading</div>*/}
					{/*		)}*/}
					{/*		<Input*/}
					{/*			type='password'*/}
					{/*			name='password'*/}
					{/*			id='password'*/}
					{/*			disabled*/}
					{/*			placeholder='***'*/}
					{/*		/>*/}
					{/*	</FormGroup>*/}
					{/*</Col>*/}
				</Row>
				{userData ? (
					<Row className='d-flex justify-content-center align-items-center mt-3'>
						<Col sm='6'>
							<FormGroup className='d-flex flex-column'>
								{editData ? (
									<Button
										disabled={userData.firstName === 'guest'}
										onClick={() => {
											setEditData(!editData)
											console.log(editName)
											console.log(editLastName)
										}}
										className='w-100'
										color='success'
									>
										Save
									</Button>
								) : (
									<Button
										disabled={userData.firstName === 'guest'}
										onClick={() => {
											setEditData(!editData)
											console.log(editData)
										}}
										className='w-100'
										color='primary'
									>
										Edit
									</Button>
								)}
							</FormGroup>
						</Col>
						<Col sm='6'>
							<FormGroup className='d-flex flex-column'>
								{editData ? (
									<Button
										disabled={userData.firstName === 'guest'}
										onClick={() => {
											setEditData(!editData)
											console.log(editData)
										}}
										className='w-100'
										color='danger'
										outline
									>
										Cancel
									</Button>
								) : (
									<Button
										disabled={userData.firstName === 'guest'}
										onClick={() => {
											localStorage.clear()
											history.push('/login')
										}}
										className='w-100'
										color='danger'
										outline
									>
										Delete
									</Button>
								)}
							</FormGroup>
						</Col>
					</Row>
				) : (
					<div>Loading...</div>
				)}
			</div>
		</div>
	)
}

export default Profile
