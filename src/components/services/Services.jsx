import React from "react";
import "./services.css";
import { FcCheckmark } from "react-icons/fc";

const Services = () => {
  return (
    <section id="services">
      <h2>Services</h2>
      <h5>What I offer</h5>

      {/* TODO Update services text & headers */}
      <div className="container services__container">
        {/* Card 1 - UI/UX */}
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <FcCheckmark className="service__list-icon" />
              <p>How graphic designers work with user interfaces</p>
            </li>
            <li>
              <FcCheckmark className="service__list-icon" />
              <p>Image manipulation</p>
            </li>
            <li>
              <FcCheckmark className="service__list-icon" />
              <p>Prototyping in Adobe XD</p>
            </li>
            <li>
              <FcCheckmark className="service__list-icon" />
              <p>
                Best practise regarding typography, iconography, white space
                etc.
              </p>
            </li>
          </ul>
        </article>

        {/* Card 2 - Web Deveoplment */}
        <article className="service">
          <div className="service__head">
            <h3>Web development</h3>
          </div>

          <ul className="service__list">
            <li>
              <FcCheckmark className="service__list-icon" />
              <p>Implementation of AJAX</p>
            </li>
            <li>
              <FcCheckmark className="service__list-icon" />
              <p>Windows Azure</p>
            </li>
            <li>
              <FcCheckmark className="service__list-icon" />
              <p>
                Javascript event listeners, modules, classes, higher functions,
                API fetch and async
              </p>
            </li>
            <li>
              <FcCheckmark className="service__list-icon" />
              <p>React JS</p>
            </li>
          </ul>
        </article>

        {/* Card 3 - Backend */}
        <article className="service">
          <div className="service__head">
            <h3>Backend</h3>
          </div>
          <ul className="service__list">
            <li>
              <FcCheckmark className="service__list-icon" />
              <p>Design Patterns in C#</p>
            </li>
            <li>
              <FcCheckmark className="service__list-icon" />
              <p>SOLID principles</p>
            </li>
            <li>
              <FcCheckmark className="service__list-icon" />
              <p>MVC, Razor Pages and Rest API</p>
            </li>
            <li>
              <FcCheckmark className="service__list-icon" />
              <p>Database Modelling including Entity Framework</p>
            </li>
            <li>
              <FcCheckmark className="service__list-icon" />
              <p>T-SQL & LINQ</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
