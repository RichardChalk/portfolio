import React from "react";
import "./about.css";
import ME from "../../assets/me-about.JPG";
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

          <p>
            I migrated from England 1997 and I am currently living in Vällingby
            with my wife and 3 children. Interested in tech. Love design.
            Studied .NET Fullstack Developer for 2 years at at SKYS
            Yrkeshögskola. Currently full-time employed at Sweet Systems CRM.
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
