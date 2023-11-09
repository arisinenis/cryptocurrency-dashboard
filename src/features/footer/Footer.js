import React from 'react'
import { Navbar, NavbarBrand } from 'reactstrap'

const Footer = () => {
  return (
    <>
      <Navbar className="my-2 p-4 mb-0" color="dark" dark>
        <NavbarBrand href="/" style={{fontSize: "1rem"}}><b>Powered By React</b></NavbarBrand>
      </Navbar>
    </>
  )
}

export default Footer