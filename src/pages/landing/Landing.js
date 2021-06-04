import { React, useState } from 'react'
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	Button,
} from 'reactstrap'
import styles from './Landing.module.css'
import 'remixicon/fonts/remixicon.css'
import { useHistory } from 'react-router-dom'


const Landing = () => {
	const [isOpen, setIsOpen] = useState(false),
		toggle = () => setIsOpen(!isOpen)

	const history = useHistory();

	const onLoginClicked = () => {
		history.push('/login')
	}
	const onSignupClicked = () => {
		history.push('/signup')
	}

	return (
		<div>
			<div className={styles.landingTop}>
				<Navbar color='primary' dark expand='lg' className='py-3 px-5'>
					<NavbarBrand href='/'>Cytrix</NavbarBrand>
					<NavbarToggler onClick={toggle} />
					<Collapse isOpen={isOpen} navbar>
						<Nav className='ml-auto' navbar>
							<NavItem className='px-3'>
								<NavLink href='/components/'>Home</NavLink>
							</NavItem>
							<NavItem className='px-3'>
								<NavLink href='/pricing'>Pricing</NavLink>
							</NavItem>
							<NavItem className='px-3'>
								<NavLink href='/help'>Help</NavLink>
							</NavItem>
							<NavItem className='px-3'>
								<NavLink href='/contact'>Contact</NavLink>
							</NavItem>
						</Nav>
					</Collapse>
				</Navbar>
				<div className={styles.landingTopArea}>
					<div className={styles.landingTopContent}>
						<p className={styles.contentTitle + ' py-2'}>
							Optimizied Algorithm, Flexible Solution
						</p>
						<p className='py-2'>
							Cytrix provides you a new way of understanding the intricacies of
							the design and application process of different algorithms
						</p>
						<div className={styles.buttons + ' py-2'}>
							<Button onClick={onSignupClicked} color='warning' className='mr-2'>
								Sign Up
							</Button>
							<Button onClick={onLoginClicked} color='primary' className='mx-2'>
								Login
							</Button>
						</div>
					</div>
					<img className={styles.landingTopImage + ' mx-2'} src='/dots.png' />
				</div>
			</div>
		</div>
	)
}

export default Landing
