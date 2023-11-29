import React from "react";
import ChristinaLeeResume from "../../assets/ChristinaLeeResume.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href={ChristinaLeeResume} download className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
