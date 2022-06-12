import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <div className="tooltip-social">
        <a
          href="https://www.linkedin.com/in/richard-erdos-chalk-90853868"
          target="_blank"
        >
          <BsLinkedin />
          <span className="tooltiptext-social">Linkedin</span>
        </a>
      </div>
      <div className="tooltip-social">
        <a href="https://github.com/RichardChalk" target="_blank">
          <FaGithub />
          <span className="tooltiptext-social">Github</span>
        </a>
      </div>
      <div className="tooltip-social">
        <a href="https://www.facebook.com/richard.chalk.3/" target="_blank">
          <BsFacebook />
          <span className="tooltiptext-social">Facebook</span>
        </a>
      </div>
    </div>
  );
};

export default HeaderSocials;
