import React from "react"
import PropTypes from "prop-types"
import { PRODUCTS } from "../data"
import ProductCard from "../components/ProductCard"

const List = (props) => {
	return (
		<div>
			{PRODUCTS.map((product) => (
				<ProductCard key={product.id} {...product} />
			))}
		</div>
	)
}

List.propTypes = {}

export default List
