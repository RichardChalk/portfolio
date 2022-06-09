import React from "react";
import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { FiBookOpen } from "react-icons/fi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessage } from "react-icons/bi";

const Nav = () => {
  return (
    <nav>
      <a href="#" className="active">
        <AiOutlineHome />
      </a>
      <a href="#about">
        <AiOutlineUser />
      </a>
      <a href="#experience">
        <FiBookOpen />
      </a>
      <a href="#services">
        <RiServiceLine />
      </a>
      <a href="#contact">
        <BiMessage />
      </a>
    </nav>
  );
};

export default Nav;
