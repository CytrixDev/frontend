import React from 'react'
import { useState } from 'react'
import {
	Collapse,
	Nav,
	NavbarBrand,
	NavbarText,
	NavbarToggler,
	NavItem,
} from 'reactstrap'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false)

	const toggle = () => setIsOpen(!isOpen)
	return (
		<div>
			<Navbar color='light' light expand='lg'>
				<NavbarBrand href='/'>reactstrap</NavbarBrand>
				<NavbarToggler onClick={toggle} />
				<Collapse isOpen={isOpen} navbar>
					<Nav className='mr-auto' navbar>
						<NavItem>
							<NavLink href='/components/'>Components</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href='https://github.com/reactstrap/reactstrap'>
								GitHub
							</NavLink>
						</NavItem>
					</Nav>
					<NavbarText>Simple Text</NavbarText>
				</Collapse>
			</Navbar>
		</div>
	)
}

export default Navbar
