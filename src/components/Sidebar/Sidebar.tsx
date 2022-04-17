import React from "react";
import { Image, Nav, Navbar, Offcanvas } from "react-bootstrap";
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
      <Offcanvas.Header closeButton>
        <div className="sidebar__user">
          <Image
            className="sidebar__user__avatar"
            src="/img/user.png"
            rounded
          />
          <div className="sidebar__user__details">
            <p>John Doe</p>
            <p>johndoe@gmail.com</p>
          </div>
        </div>
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
  );
};

export default Sidebar;
