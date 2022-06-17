import React from "react";
import CV from "../../assets/cv.pdf";

export const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn header__cv">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary header__contact">
        Contact me
      </a>
    </div>
  );
};

export default CTA;
