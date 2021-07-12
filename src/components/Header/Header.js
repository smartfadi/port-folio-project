import React from "react";
import "./Header.css";
import Typed from "react-typed";
import { Button } from "react-bootstrap";

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="main-info">
        <h1>Web Development & web Services</h1>
        <Typed
          className="typed-text"
          strings={["ReactJS/Redux", "NodeJS", "React Native", "ExpressJS"]}
          typeSpeed={50}
          backSpeed={60}
          loop
        />
        <br />
        <Button variant="outline-warning">Contact Me!</Button>
      </div>
    </div>
  );
};

export default Header;
