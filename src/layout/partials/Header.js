import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../../assets/img/logo.png";
export const Header = () => {
  return (
    <Navbar bg="info" expand="md" variant="dark" collapseOnSelect>
      <Navbar.Brand href="#home">
        <img src={logo} alt="logo" width="50px" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="#dashboard">Dashboard</Nav.Link>
          <Nav.Link href="#dashboard">Tickets</Nav.Link>
          <Nav.Link href="#dashboard">Logout</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
