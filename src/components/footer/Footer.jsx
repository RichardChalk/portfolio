import React from "react";
import "./footer.css";
import { BsLinkedin } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      {/* I dont have a logo yet :( */}
      {/* <a href="#" className="footer__logo">
        MY LOGO
      </a> */}
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a
          href="https://www.linkedin.com/in/richard-erdos-chalk-90853868"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a href="https://github.com/RichardChalk" target="_blank">
          <FaGithub />
        </a>
        <a href="https://www.facebook.com/richard.chalk.3/" target="_blank">
          <BsFacebook />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Richard Chalk</small>
      </div>
    </footer>
  );
};

export default Footer;
