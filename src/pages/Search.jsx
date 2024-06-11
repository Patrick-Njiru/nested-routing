import React, { useDeferredValue, useState } from "react"
import PropTypes from "prop-types"
import { PRODUCTS } from "../data"
import ProductCard from "../components/ProductCard"

const Search = (props) => {
	const [search, setSearch] = useState("")

	const handleSearch = (e) => {
		setSearch(e.target.value)
	}

	const defferedSearchResults = useDeferredValue(PRODUCTS.filter((p) => p.pName.includes(search)))

	return (
		<>
			<div className=''>
				<input
					type='search'
					id='search'
					placeholder=' Enter product name'
					onChange={handleSearch}
				/>
			</div>
			<div className=''>
				{search
					? defferedSearchResults.length > 0
						? defferedSearchResults.map((p) => <ProductCard key={p.id} {...p} />)
						: "No Items Found"
					: "Search for product"}
			</div>
		</>
	)
}

Search.propTypes = {}

export default Search
