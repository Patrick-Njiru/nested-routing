import React from "react"
import { Route, Routes } from "react-router-dom"
import { Layout, Home, Login, Products, List, Search, AddProduct, Product } from "./pages"

const App = () => {
	return (
		<>
			<Routes>
				<Route element={<Layout />}>
					<Route index exact path='/' element={<Home />} />
					<Route path='login' element={<Login />} />
					<Route path='products' element={<Products />}>
						<Route index path='list' element={<List />} />
						<Route path='search' element={<Search />} />
						<Route path='add' element={<AddProduct />} />
						<Route path=':productID' element={<Product />} />
					</Route>
				</Route>
			</Routes>
		</>
	)
}

export default App
