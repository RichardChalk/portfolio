import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
import HTMLLogo from "../../assets/HTML5_Badge.png";
import CSSLogo from "../../assets/CSS3_Badge.png";
import JSLogo from "../../assets/JS_Badge.png";
import BSLogo from "../../assets/BS_Badge.png";
import ReactLogo from "../../assets/React_Badge.png";
import CLogo from "../../assets/C_Badge.png";
import SQLLogo from "../../assets/sql_Badge.png";
import ASPLogo from "../../assets/asp_Badge.png";
import ENTITYLogo from "../../assets/Entity_Badge.jpg";
import MVCLogo from "../../assets/MVC_Badge.jpg";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        {/* FRONTEND =========================================== */}
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <img src={HTMLLogo}></img>
              <h4>HTML</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience__details">
              <img src={CSSLogo}></img>
              <h4>CSS</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience__details">
              <img src={JSLogo}></img>
              <h4>Javascript</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience__details">
              <img src={BSLogo}></img>
              <h4>Bootstrap</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience__details">
              <img src={ReactLogo}></img>
              <h4>React</h4>
              <small className="text-light">Intermediate</small>
            </article>
          </div>
        </div>

        {/* BACKEND =========================================== */}
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <img src={CLogo}></img>
              <h4>C#</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience__details">
              <img src={SQLLogo}></img>
              <h4>SQL Server</h4>
              <small className="text-light">Intermediate</small>
            </article>
            <article className="experience__details">
              <img src={ASPLogo}></img>
              <h4>MVC</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience__details">
              <img src={ASPLogo}></img>
              <h4>Razor Pages</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience__details">
              <img src={ASPLogo}></img>
              <h4>Entity Framework</h4>
              <small className="text-light">Experienced</small>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
