import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
import HTMLLogo from "../../assets/HTML5_Badge.png";
import CSSLogo from "../../assets/CSS3_Badge.png";
import JSLogo from "../../assets/JS_Badge.png";
import BSLogo from "../../assets/BS_Badge.png";
import ReactLogo from "../../assets/React_Badge.png";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
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

        <div className="experience__backend"></div>
      </div>
    </section>
  );
};

export default Experience;
