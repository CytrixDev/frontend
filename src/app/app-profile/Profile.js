import React from 'react'
import styles from './Profile.module.css'
import { Row, Col, FormGroup, Label, Input, Button } from 'reactstrap'
export const Profile = () => {
	return (
		<div className={styles.profileBody}>
			<h1 className='mt-0 mb-5'>Profile</h1>
			<div>
				<Row>
					<Col className='d-flex justify-content-center align-items-center mb-5'>
						<img className={styles.pP} src='/person.jpg' />
					</Col>
				</Row>
				<Row className='d-flex justify-content-center align-items-center'>
					<Col sm='6'>
						<FormGroup>
							<Label for='name'>First Name</Label>
							<Input
								type='text'
								name='name'
								id='name'
								disabled
								placeholder='John'
							/>
						</FormGroup>
					</Col>
					<Col sm='6'>
						<FormGroup>
							<Label for='surname'>Last Name</Label>
							<Input
								type='text'
								name='surname'
								id='surname'
								disabled
								placeholder='Doe'
							/>
						</FormGroup>
					</Col>
				</Row>
				<Row className='d-flex justify-content-center align-items-center'>
					<Col sm='6'>
						<FormGroup>
							<Label for='name'>Email</Label>
							<Input
								type='text'
								name='email'
								id='email'
								disabled
								placeholder='johndoe@mail.com'
							/>
						</FormGroup>
					</Col>
					<Col sm='6'>
						<FormGroup>
							<Label for='password'>Password</Label>
							<Input
								type='password'
								name='password'
								id='password'
								disabled
								placeholder='***'
							/>
						</FormGroup>
					</Col>
				</Row>
				<Row className='d-flex justify-content-center align-items-center mt-3'>
					<Col sm='6'>
						<FormGroup>
							<Button className='w-100' color='primary'>
								Edit
							</Button>
						</FormGroup>
					</Col>
					<Col sm='6'>
						<FormGroup>
							<Button className='w-100' color='danger' outline>
								Delete
							</Button>
						</FormGroup>
					</Col>
				</Row>
			</div>
		</div>
	)
}

export default Profile
