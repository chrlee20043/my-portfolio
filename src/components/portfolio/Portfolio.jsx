import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/aMUSE-img.png";
import IMG2 from "../../assets/dancelibrary.png";
import IMG3 from "../../assets/Christinas-List.png";
import ComingSoon from "../../assets/coming-soon.png";
import Amuse from "./Amuse";
import { useNavigate } from "react-router-dom";

const Portfolio = () => {
  const navigate = useNavigate();

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img
              src={IMG1}
              alt="amuse"
              onClick={() => navigate("/project/amuse")}
            />
          </div>
          <h3>aMUSE</h3>
          <small className="portfolio_title_note">Tech Stack</small>
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
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img
              src={IMG2}
              alt="Dance Library"
              onClick={() => navigate("project/dance-library")}
            />
          </div>
          <h3>Dance Library</h3>
          <small className="portfolio_title_note">Tech Stack</small>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/chrlee20043/dance-library"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://dance-library.onrender.com/"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Link
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img
              src={IMG3}
              alt="Christina's List"
              onClick={() => navigate("/project/christinas-list")}
            />
          </div>
          <h3>Christina's List</h3>
          <small className="portfolio_title_note">Tech Stack</small>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/chrlee20043/christinas-list"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://christinas-list.onrender.com/"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Link
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img
              src={ComingSoon}
              alt="Job Finder"
              onClick={() => navigate("/project/job-finder")}
            />
          </div>
          <h3>Job Finder</h3>
          <small className="portfolio_title_note">Tech Stack</small>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/chrlee20043/react-native-jobs"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="http://google.com"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
              disabled
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
