import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/aMUSE-userMap.png";
import IMG2 from "../../assets/dancelibraryclasses.png";
import IMG3 from "../../assets/Christinas-List-final.png";
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
          <div className="project__title">
            <h3>aMUSE</h3>
            <button
              onClick={() => navigate("/amuse")}
              className="project__button"
            >
              View Project
            </button>
          </div>
          <h5>
            Full stack web app created for museum enthusiasts to search, review,
            and rate museums. Users can save their most cherished experiences
            with the ability to favorite museums and keep a personalized journal
            of their visits.
            <br />
            <br />
            Collaborated with 4 developers to create core features and integrate
            Google Maps API. Implemented user authentication with Redux-Persist,
            JWT, BCrypt.
          </h5>
          <br />
          <br />

          <h4 className="portfolio_title_note">Tech Stack</h4>
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
          <div className="project__title">
            <h3>Dance Library</h3>
            <button
              onClick={() => navigate("/dance-library")}
              className="project__button"
            >
              View Project
            </button>
          </div>
          <h5>
            Full stack web app designed for dancers of all levels to create a
            digital library of dance classes from their favorite instructors.
            Users can browse, search, filter classes and instructors to add to
            their personal library.
            <br />
            <br />
            Independent project to create core features and explore REST API
            design and user authentication through Redux, JWT, and BCrypt. Users
            can engage in smooth CRUD operations.
          </h5>
          <br />
          <br />

          <h4 className="portfolio_title_note">Tech Stack</h4>
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
          <div className="project__title">
            <h3>Christina's List</h3>
            <button
              onClick={() => navigate("/christinas-list")}
              className="project__button"
            >
              View Project
            </button>
          </div>
          <h5>
            Frontend web app where users can sell and purchase goods. Users can
            ceate posts to sell unwanted items, edit and delete their posts.
            Users can message sellers to inquire about items for sale and view
            their posts and sent messages on their profile page.
            <br />
            <br />
            Independent project to develop basic CRUD app and implement third
            party API through Fullstack Academy.
          </h5>
          <br />
          <br />

          <h4 className="portfolio_title_note">Tech Stack</h4>
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
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img
              src={ComingSoon}
              alt="Job Finder"
              onClick={() => navigate("/project/job-finder")}
            />
          </div>
          <div className="project__title">
            <h3>Job Finder</h3>
            <button
              onClick={() => navigate("/job-finder")}
              className="project__button"
            >
              View Project
            </button>
          </div>{" "}
          <h5>
            Mobile app to help users search for jobs.
            <br />
            <br />
            Independent project to explore React Native and mobile development.
          </h5>
          <br />
          <br />
          <h4 className="portfolio_title_note">Tech Stack</h4>
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
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
