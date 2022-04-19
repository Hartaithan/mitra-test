import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import "./header.scss";

const Header: React.FC = () => {
  return (
    <Navbar expand={false} collapseOnSelect className="header">
      <Container className="header__container">
        <Navbar.Toggle aria-controls="menu" />
        <Navbar.Brand>
          <NavLink to="/">Gallery</NavLink>
        </Navbar.Brand>
        <Sidebar />
      </Container>
    </Navbar>
  );
};

export default Header;
