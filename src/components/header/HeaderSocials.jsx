import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
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
  );
};

export default HeaderSocials;
