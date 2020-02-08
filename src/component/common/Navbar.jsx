import React from "react";
import { Navbar, Nav, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const Menubar = () => {
  return (
    <Navbar expand="md" sticky="top" variant="light" className="bg-white">
      <Navbar.Brand>
        <Link exact="true" to="/" className="font-weight-bold text-light">
          <Image src="/images/logo.png" className="mr-2" fluid rounded />
          Expense-Manager
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item as="li">
            <Link to="/about" className="nav-link">
              About
            </Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Link to="/product" className="nav-link">
              Product
            </Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Link to="/faq" className="nav-link">
              FAQ
            </Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Link
              to="/login"
              className="nav-link border rounded bg-danger text-white"
            >
              Cart <i className="fa fa-cart-plus"></i>
            </Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Menubar;
