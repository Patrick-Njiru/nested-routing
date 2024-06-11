import React from "react"
import PropTypes from "prop-types"
import ProductCard from "../components/ProductCard"
import { useParams } from "react-router-dom"
import { PRODUCTS } from "../data"

const Product = (props) => {
	const { productId } = useParams

	const pDetails = PRODUCTS.filter((p) => p.id == productId)[0]

	return (
		<>
			<ProductCard {...pDetails} />
		</>
	)
}

Product.propTypes = {}

export default Product
