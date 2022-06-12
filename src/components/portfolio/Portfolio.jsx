import React from "react";
import "./portfolio.css";
import ProjectsArray from "./Projects";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My recent work</h5>
      <h2>Portfolio</h2>
      <ProjectsArray />
    </section>
  );
};

export default Portfolio;
