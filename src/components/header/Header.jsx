import React from "react";
import "./header.css";
import CTA from "./CTA";
// import ME from "../../assets/me.png";
import ME from "../../assets/me.JPG";
import HeaderSocials from "./HeaderSocials";
import { HiOutlineMail } from "react-icons/hi";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1 className="header__name">
          <span className="header__R">R</span>
          &nbsp;Richard<span className="header__fullstop">.</span>
        </h1>
        <h5 className="text-light">
          .NET Fullstack Developer based in Stockholm Sweden
        </h5>

        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="Portrait of Richard Chalk" />
        </div>

        <a href="#contact" className="scroll__down">
          {/* Didnt like the look of this with an icon */}
          {/* <HiOutlineMail className="header__contact-icon" /> */}
          Contact me
        </a>
      </div>
    </header>
  );
};

export default Header;
