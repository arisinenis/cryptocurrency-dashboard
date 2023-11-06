import React from "react";
import { NavbarBrand, Navbar } from "reactstrap";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <ul>
        <li>
          <Link
            style={{
              textDecoration: "none",
              color: "black",
              fontWeight: "bolder",
            }}
            to="/"
          >
            Home
          </Link>

          <Link
            style={{
              textDecoration: "none",
              color: "black",
              fontWeight: "bolder",
              marginLeft: "1rem"
            }}
            to="/about"
          >
            About
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Nav;
