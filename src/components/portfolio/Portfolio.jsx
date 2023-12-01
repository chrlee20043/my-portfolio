import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/aMUSE-img.png";
import IMG2 from "../../assets/dancelibrary.png";
import IMG3 from "../../assets/Christinas-List.png";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="aMUSE map" />
          </div>
          <h3>aMUSE</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/ghp-team-2-capstone/museum-app"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://amuse-jx0a.onrender.com/"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Link
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
