import React from "react"
import PropTypes from "prop-types"
import { Link, Outlet } from "react-router-dom"

const Products = (props) => {
	return (
		<div>
			<nav id="productsNav">
				<Link to='search'>
					<button>Search</button>
				</Link>
				<Link to='list'>
					<button>List</button>
				</Link>
				<Link to='add'>
					<button>Add</button>
				</Link>
			</nav>
			<Outlet />
		</div>
	)
}

Products.propTypes = {}

export default Products
