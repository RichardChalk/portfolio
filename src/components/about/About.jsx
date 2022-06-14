import React from "react";
import "./about.css";
import ME from "../../assets/me-about.png";
import { FiAward } from "react-icons/fi";
import { FiUsers } from "react-icons/fi";
import { VscLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About portrait of Richard Chalk"></img>
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FiAward className="about__icon" />
              <h5>Experience</h5>
              <small>2 years studying</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>5+ in Nordics</small>
            </article>
            <article className="about__card">
              <VscLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>5+ completed</small>
            </article>
          </div>
          {/* TODO Update bio text */}
          <p>
            I migrated from England 1997 and I am currently living in Vällingby
            with my wife and 3 children. In 2020 I started studying .NET Fullstack 
            Developer for 2 years at at SKYS Yrkeshögskola. 
            I'm currently a full-time employee at Sweet Systems CRM working as a Fullstack Developer.

            I like both coding and design and really enjoy building things that are both beautiful and functional!


          </p>
          <a href="#contact" className="btn btn-primary">
            Let's talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
