import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <div>
      <Navbar bg="light" expand="lg" className="shadow-sm">
        <Container>
          <Navbar.Brand>
            <Link to="/">Learn Programming.</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto nav">
              <Link to="/home">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/service">Services</Link>
              <Link to="/contact">Contact</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
