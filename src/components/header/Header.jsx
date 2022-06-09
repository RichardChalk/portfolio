import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/me.png";
//import ME from "../../assets/me.JPG";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Richard</h1>
        <h5 className="text-light">.NET Fullstack Developer</h5>

        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="Portrait of Richard Chalk" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
