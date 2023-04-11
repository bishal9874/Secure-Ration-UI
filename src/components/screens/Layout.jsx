import React from 'react'
import { Outlet } from 'react-router-dom'
import Navber from '../navber/Navber'

const Layout = () => {
  return (
    <>
        <Navber/>
        <Outlet/>
    </>
  )
}

export default Layout