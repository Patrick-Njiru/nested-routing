import React from "react"
import PropTypes from "prop-types"
import { NavLink } from "react-router-dom"

const Navbar = () => {
	return (
		<header>
			<nav id='navbar'>
				<NavLink to='/'> Home </NavLink>
				<NavLink to='login'> Login </NavLink>
				<NavLink to='products'> Products </NavLink>
			</nav>
		</header>
	)
}

Navbar.propTypes = {}

export default Navbar
