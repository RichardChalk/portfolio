import React from "react";
import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { FiBookOpen } from "react-icons/fi";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { GrProjects } from "react-icons/gr";
import { BiMessage } from "react-icons/bi";
import { useState } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");

  return (
    <nav>
      <div className="tooltip">
        <a
          href="#"
          onClick={() => setActiveNav("#")}
          className={activeNav === "#" ? "active" : ""}
        >
          <AiOutlineHome />
          <span className="tooltiptext">Home</span>
        </a>
      </div>
      <div className="tooltip">
        <a
          href="#about"
          onClick={() => setActiveNav("#about")}
          className={activeNav === "#about" ? "active" : ""}
        >
          <AiOutlineUser />
          <span className="tooltiptext">About Me</span>
        </a>
      </div>
      <div className="tooltip">
        <a
          href="#experience"
          onClick={() => setActiveNav("#experience")}
          className={activeNav === "#experience" ? "active" : ""}
        >
          <FiBookOpen />
          <span className="tooltiptext">Experience</span>
        </a>
      </div>
      <div className="tooltip">
        <a
          href="#portfolio"
          onClick={() => setActiveNav("#portfolio")}
          className={activeNav === "#portfolio" ? "active" : ""}
        >
          <AiOutlineFundProjectionScreen />
          <span className="tooltiptext">Portfolio</span>
        </a>
      </div>
      <div className="tooltip">
        <a
          href="#contact"
          onClick={() => setActiveNav("#contact")}
          className={activeNav === "#contact" ? "active" : ""}
        >
          <BiMessage />
          <span className="tooltiptext">Contact</span>
        </a>
      </div>
    </nav>
  );
};

export default Nav;
