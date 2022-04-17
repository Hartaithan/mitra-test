import React from "react";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./header.scss";

const Header: React.FC = () => {
  return (
    <Navbar expand={false} className="header">
      <Container className="header__container">
        <Navbar.Toggle aria-controls="menu" />
        <Navbar.Brand>
          <NavLink to="/">Gallery</NavLink>
        </Navbar.Brand>
        <Navbar.Offcanvas
          id="menu"
          placement="start"
          aria-labelledby="headerNavMenu"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="headerNavMenu">
              Navigation Menu
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <NavLink className="nav-link" to="/">
                Gallery
              </NavLink>
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default Header;
