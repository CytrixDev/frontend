import React, { useState } from 'react'
import {
	Collapse,
	Nav,
	Navbar,
	NavbarBrand,
	NavbarToggler,
	NavItem,
	NavLink,
} from 'reactstrap'
import { useHistory } from 'react-router-dom'

const Prices = () => {
	const [isOpen, setIsOpen] = useState(false)
	const toggle = () => setIsOpen(!isOpen)
	const history = useHistory()

	return (
		<div>
			<Navbar color='dark' dark expand='lg' className='py-3 px-5'>
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

			<div className='pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center'>
				<h1 className='display-4'>Pricing</h1>
				<p className='lead'>
					Quickly test out your Wireless Sensor Network by generating a network
					of nodes on our interactive editor and test the simulation out to see
					how long it lasts
				</p>
			</div>

			<div className='container'>
				<div className='card-deck mb-3 text-center'>
					<div className='card mb-4 box-shadow'>
						<div className='card-header'>
							<h4 className='my-0 font-weight-normal'>Free</h4>
						</div>
						<div className='card-body'>
							<h1 className='card-title pricing-card-title'>
								$0 <small className='text-muted'>/ mo</small>
							</h1>
							<ul className='list-unstyled mt-3 mb-4'>
								<li>10 simulations per day</li>
								<li>Email support</li>
							</ul>
							<button
								onClick={() => {
									history.push('/login')
								}}
								type='button'
								className='btn btn-lg btn-block btn-outline-success'
							>
								Sign up for free
							</button>
						</div>
					</div>
					<div className='card mb-4 box-shadow'>
						<div className='card-header'>
							<h4 className='my-0 font-weight-normal'>Pro</h4>
						</div>
						<div className='card-body'>
							<h1 className='card-title pricing-card-title'>
								$15 <small className='text-muted'>/ mo</small>
							</h1>
							<ul className='list-unstyled mt-3 mb-4'>
								<li>100 simulations per day</li>
								<li>Email support</li>
							</ul>
							<button
								onClick={() => {
									history.push('/login')
								}}
								type='button'
								className='btn btn-lg btn-block btn-success'
							>
								Buy Now
							</button>
						</div>
					</div>
					<div className='card mb-4 box-shadow'>
						<div className='card-header'>
							<h4 className='my-0 font-weight-normal'>Enterprise</h4>
						</div>
						<div className='card-body'>
							<h1 className='card-title pricing-card-title'>
								$129 <small className='text-muted'>/ mo</small>
							</h1>
							<ul className='list-unstyled mt-3 mb-4'>
								<li>1000+ simulations per day</li>
								<li>Email support</li>
							</ul>
							<button
								onClick={() => {
									history.push('/login')
								}}
								type='button'
								className='btn btn-lg btn-block btn-success'
							>
								Buy Now
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Prices
