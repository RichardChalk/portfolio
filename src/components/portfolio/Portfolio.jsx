import React from "react";
import "./portfolio.css";
import ProjectsArray from "./Projects";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2>Portfolio</h2>
      <h5>My recent work</h5>

      <ProjectsArray />
    </section>
  );
};

export default Portfolio;
