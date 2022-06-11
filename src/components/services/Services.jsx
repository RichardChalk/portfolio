import React from "react";
import "./services.css";
import { RiCheckboxBlankCircleFill } from "react-icons/ri";

const Services = () => {
  return (
    <section id="services">
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        {/* Card 1 - UI/UX */}
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <RiCheckboxBlankCircleFill className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <RiCheckboxBlankCircleFill className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <RiCheckboxBlankCircleFill className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
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
              <RiCheckboxBlankCircleFill className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <RiCheckboxBlankCircleFill className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <RiCheckboxBlankCircleFill className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>

        {/* Card 3 - Content creation */}
        <article className="service">
          <div className="service__head">
            <h3>Backend</h3>
          </div>
          <ul className="service__list">
            <li>
              <RiCheckboxBlankCircleFill className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <RiCheckboxBlankCircleFill className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <RiCheckboxBlankCircleFill className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
