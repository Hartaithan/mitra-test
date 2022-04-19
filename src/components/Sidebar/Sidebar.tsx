import React from "react";
import { Card, Image, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./sidebar.scss";

const Sidebar: React.FC = () => {
  return (
    <Navbar.Offcanvas
      className="sidebar"
      id="menu"
      placement="start"
      aria-labelledby="headerNavMenu"
    >
      <Offcanvas.Header closeButton>Navigation Menu</Offcanvas.Header>
      <Offcanvas.Body>
        <Card className="sidebar__user w-100 mb-2">
          <Card.Body>
            <Image
              className="sidebar__user__avatar mb-3"
              src="/img/user.png"
              rounded
            />
            <Card.Title>Vladimir Stepanov</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              stepanov.vladimir.in.re@gmail.com
            </Card.Subtitle>
          </Card.Body>
        </Card>
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
  );
};

export default Sidebar;
