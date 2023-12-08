import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/aMUSE-img.png";
import IMG2 from "../../assets/dancelibrary.png";
import IMG3 from "../../assets/Christinas-List.png";
import ComingSoon from "../../assets/coming-soon.png";
import { useNavigate } from "react-router-dom";

const Portfolio = () => {
  const navigate = useNavigate();

  return (
    <section id="portfolio">
      <h2>Projects</h2>
      <div className="portfolio__intro">
        <h3>
          Browse through my recent projects that I developed independently and
          on teams.
        </h3>
        <p>Currently learning: React Native for mobile app development</p>
      </div>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img
              src={IMG1}
              alt="amuse project"
              onClick={() => navigate("/amuse")}
            />
          </div>
          <h3>aMUSE</h3>
          <h5 className="portfolio_title_note">Tech Stack</h5>
          <div>
            <ul className="portfolio_tech_stack">
              <small>
                <li>React</li>
              </small>
              <small>
                <li>Redux</li>
              </small>
              <small>
                <li>PostgreSQL</li>
              </small>
              <small>
                <li>Express</li>
              </small>
              <small>
                <li>Node</li>
              </small>
              <small>
                <li>JavaScript</li>
              </small>
              <small>
                <li>CSS</li>
              </small>
              <small>
                <li>Tailwind</li>
              </small>
              <small>
                <li>Bcrypt</li>
              </small>
              <small>
                <li>Cypress</li>
              </small>
            </ul>
          </div>
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
              onClick={() => navigate("/dance-library")}
            />
          </div>
          <h3>Dance Library</h3>
          <h5 className="portfolio_title_note">Tech Stack</h5>
          <div>
            <ul className="portfolio_tech_stack">
              <small>
                <li>React</li>
              </small>
              <small>
                <li>Redux</li>
              </small>
              <small>
                <li>PostgreSQL</li>
              </small>
              <small>
                <li>Express</li>
              </small>
              <small>
                <li>Node</li>
              </small>
              <small>
                <li>JavaScript</li>
              </small>
              <small>
                <li>CSS</li>
              </small>
              <small>
                <li>Material UI</li>
              </small>
              <small>
                <li>Bcrypt</li>
              </small>
              <small>
                <li>Cypress</li>
              </small>
            </ul>
          </div>
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
              onClick={() => navigate("/christinas-list")}
            />
          </div>
          <h3>Christina's List</h3>
          <h5 className="portfolio_title_note">Tech Stack</h5>
          <div>
            <ul className="portfolio_tech_stack">
              <small>
                <li>React</li>
              </small>
              <small>
                <li>Redux</li>
              </small>
              <small>
                <li>JavaScript</li>
              </small>
              <small>
                <li>CSS</li>
              </small>
            </ul>
          </div>
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
        {/* <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img
              src={ComingSoon}
              alt="Job Finder"
              onClick={() => navigate("/project/job-finder")}
            />
          </div>
          <h3>Job Finder</h3>
          <small className="portfolio_title_note">Tech Stack</small>
          <ul className="portfolio_tech_stack">
            <small>
              <li>React Native</li>
            </small>
          </ul>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/chrlee20043/react-native-jobs"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </div>
        </article> */}
      </div>
    </section>
  );
};

export default Portfolio;
