import React from "react";

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

import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

// TODO Update Item titles
// TODO Update Github links
// TODO Update Live demo links
// TODO Update project images

// Projects array
const projectsArray = [
  {
    id: 1,
    image: IMG1,
    logo: CSSLogo,
    title: "Portfolio item title 1",
    github: "https://github.com",
    demo: "https://google.com",
  },
  {
    id: 2,
    image: IMG2,
    logo: CSSLogo,
    title: "Portfolio item title 2",
    github: "https://github.com",
    demo: "https://google.com",
  },
  {
    id: 3,
    image: IMG3,
    logo: CSSLogo,
    title: "Portfolio item title 3",
    github: "https://github.com",
    demo: "https://google.com",
  },
  {
    id: 4,
    image: IMG4,
    logo: CSSLogo,
    title: "Portfolio item title 4",
    github: "https://github.com",
    demo: "https://google.com",
  },
  {
    id: 5,
    image: IMG5,
    logo: CSSLogo,
    title: "Portfolio item title 5",
    github: "https://github.com",
    demo: "https://google.com",
  },
  {
    id: 6,
    image: IMG6,
    logo: CSSLogo,
    title: "Portfolio item title 6",
    github: "https://github.com",
    demo: "https://google.com",
  },
];

const Projects = () => {
  return (
    <div className="container portfolio__container">
      {projectsArray.map(({ id, image, logo, title, github, demo }) => {
        return (
          <article key={id} className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={image} alt={title} />
              <img src={logo} className="portfolio__item-tool"></img>
            </div>
            <h3>{title}</h3>
            <div className="portfolio__item-cta">
              <a href={github} target="_blank" className="btn">
                Github
              </a>
              <a href={demo} target="_blank" className="btn btn-primary">
                Live Demo
              </a>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Projects;