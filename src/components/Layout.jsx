import React from 'react'
import Header from './Header'
import Footer from './Footer'
import {Outlet} from "react-router-dom";
import Register from '../pages/Register';
const Layout = () => {
  return (
    <>
        <Header/>
            <Outlet/>
        <Footer/>
    </>
  )
}

export default Layout