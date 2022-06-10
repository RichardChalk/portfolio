import React from "react";
import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { FiBookOpen } from "react-icons/fi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessage } from "react-icons/bi";
import { useState } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");

  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <div className="tooltip">
          <AiOutlineHome />
          <span className="tooltiptext">Home</span>
        </div>
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <div className="tooltip">
          <AiOutlineUser />
          <span className="tooltiptext">About Me</span>
        </div>
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <div className="tooltip">
          <FiBookOpen />
          <span className="tooltiptext">Experience</span>
        </div>
      </a>
      <a
        href="#services"
        onClick={() => setActiveNav("#services")}
        className={activeNav === "#services" ? "active" : ""}
      >
        <div className="tooltip">
          <RiServiceLine />
          <span className="tooltiptext">Services</span>
        </div>
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <div className="tooltip">
          <BiMessage />
          <span className="tooltiptext">Contact</span>
        </div>
      </a>
    </nav>
  );
};

export default Nav;
