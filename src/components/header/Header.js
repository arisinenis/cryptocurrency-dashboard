import React from "react";
import { NavbarBrand, Navbar } from "reactstrap";
import About from "../about/About";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Navbar className="my-2 p-4 footer" color="dark" dark>
        <NavbarBrand href="/" style={{ fontSize: "2rem" }}>
          <b>CryptoTracker</b>
        </NavbarBrand>
      </Navbar>
    </>
  );
};

export default Header;
