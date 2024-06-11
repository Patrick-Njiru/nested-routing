import React from "react"
import PropTypes from "prop-types"

const ProductCard = ({ pName, description }) => {
	return (
		<div>
			<h3>{pName}</h3>
			<h5>{description}</h5>
		</div>
	)
}

ProductCard.propTypes = {
	pName: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
}

export default ProductCard
