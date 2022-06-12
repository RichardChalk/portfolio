import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

import HTMLLogo from "../../assets/HTML5_Badge.png";
import CSSLogo from "../../assets/CSS3_Badge.png";
import JSLogo from "../../assets/JS_Badge.png";
import BSLogo from "../../assets/BS_Badge.png";
import ReactLogo from "../../assets/React_Badge.png";
import CLogo from "../../assets/C_Badge.png";
import SQLLogo from "../../assets/sql_Badge.png";
import ASPLogo from "../../assets/asp_Badge.png";
import NETLogo from "../../assets/NET_Badge.png";
import ENTITYLogo from "../../assets/Entity_Badge.jpg";
import MVCLogo from "../../assets/MVC_Badge.jpg";

// TODO Update Item titles
// TODO Update Github links
// TODO Update Live demo links
// TODO Update project images
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My recent work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {/* Project #1 ======================================== */}
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="Project 1" />
            <img src={HTMLLogo} className="portfolio__item-tool"></img>
          </div>
          <h3>Portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" target="_blank" className="btn">
              Github
            </a>
            <a
              href="https://google.com"
              target="_blank"
              className="btn btn-primary"
            >
              Live Demo
            </a>
          </div>
        </article>
        {/* Project #1 ======================================== */}
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="Project 1" />
            <img src={HTMLLogo} className="portfolio__item-tool"></img>
          </div>
          <h3>Portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" target="_blank" className="btn">
              Github
            </a>
            <a
              href="https://google.com"
              target="_blank"
              className="btn btn-primary"
            >
              Live Demo
            </a>
          </div>
        </article>
        {/* Project #1 ======================================== */}
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="Project 1" />
            <img src={HTMLLogo} className="portfolio__item-tool"></img>
          </div>
          <h3>Portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" target="_blank" className="btn">
              Github
            </a>
            <a
              href="https://google.com"
              target="_blank"
              className="btn btn-primary"
            >
              Live Demo
            </a>
          </div>
        </article>
        {/* Project #1 ======================================== */}
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="Project 1" />
            <img src={HTMLLogo} className="portfolio__item-tool"></img>
          </div>
          <h3>Portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" target="_blank" className="btn">
              Github
            </a>
            <a
              href="https://google.com"
              target="_blank"
              className="btn btn-primary"
            >
              Live Demo
            </a>
          </div>
        </article>
        {/* Project #1 ======================================== */}
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="Project 1" />
            <img src={HTMLLogo} className="portfolio__item-tool"></img>
          </div>
          <h3>Portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" target="_blank" className="btn">
              Github
            </a>
            <a
              href="https://google.com"
              target="_blank"
              className="btn btn-primary"
            >
              Live Demo
            </a>
          </div>
        </article>
        {/* Project #1 ======================================== */}
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="Project 1" />
            <img src={HTMLLogo} className="portfolio__item-tool"></img>
          </div>
          <h3>Portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" target="_blank" className="btn">
              Github
            </a>
            <a
              href="https://google.com"
              target="_blank"
              className="btn btn-primary"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
