import React from "react";

const DanceLibrary = () => {
  return (
    <section id="project__details">
      <h2>aMUSE</h2>

      <div className="container project__container">
        <div className="project">
          <div className="project image">
            <img src={IMG1} alt="project" />
          </div>
        </div>
        <div className="project__content">
          <div className="project__cards"></div>
          <p>PROJECT DETAILS</p>
          <a
            href="https://github.com/ghp-team-2-capstone/museum-app"
            className="btn"
          >
            GitHub
          </a>
          <a
            href="https://amuse-jx0a.onrender.com/"
            className="btn btn-primary"
          >
            Live Link
          </a>
          <a
            href="https://www.youtube.com/watch?v=QcFOdZNFpBY&list=PLx0iOsdUOUmn_l4W9N2y0NBaMYNJlu8JF&index=1"
            className="btn btn-primary"
          >
            Presentation
          </a>
        </div>
      </div>
    </section>
  );
};

export default DanceLibrary;
