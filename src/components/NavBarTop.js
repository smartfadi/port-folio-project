import React from "react";
import { Navbar, Nav, Image } from "react-bootstrap";
import logo from "../assets/logo/logo.png";
import "./NavBarTop.css";

const NavBarTop = () => {
  return (
    <div className="myBody">
      <Navbar
        collapseOnSelect={false}
        expand="lg"
        bg="dark"
        variant="dark"
        className="myDiv"
      >
        <div className="container">
          <Navbar.Brand href="#home">
            <Image src={logo} className="myLogo" alt="logo" />
            PortFolio
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav">
            {/* <Image src={logo} className="myLogo" alt="logo" /> */}
          </Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link className="nav-link" href="#home">
                Home
              </Nav.Link>
              <Nav.Link className="nav-link" href="#about">
                About Me
              </Nav.Link>
              <Nav.Link className="nav-link" href="#services">
                services
              </Nav.Link>
              <Nav.Link className="nav-link" href="#work">
                how work
              </Nav.Link>
              <Nav.Link className="nav-link" href="#portfolio">
                portfolio
              </Nav.Link>
              <Nav.Link className="nav-link" href="#contact">
                contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
};

export default NavBarTop;
