import React from 'react'
import PropTypes from 'prop-types'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const Layout = props => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  )
}

Layout.propTypes = {}

export default Layout