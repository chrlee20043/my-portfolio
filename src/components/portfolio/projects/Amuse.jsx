import React from "react";
import "./projects.css";
import IMG1 from "../../../assets/aMUSE-img.png";
import { useNavigate } from "react-router-dom";
import { FiArrowLeftCircle } from "react-icons/fi";

const Amuse = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/projects");
  };

  return (
    <section id="project__details">
      <div className="return__btn">
        <FiArrowLeftCircle size={24} onClick={handleClick} />
        <button href className="project__btn" onClick={handleClick}>
          Return to Projects
        </button>
      </div>
      <h1>aMUSE</h1>

      <div className="container project__container">
        <div className="project">
          <div className="project__image">
            <img src={IMG1} alt="project" />
          </div>
        </div>
        <div className="project__content">
          <div className="project__card">
            <div className="project__links">
              <a
                href="https://github.com/ghp-team-2-capstone/museum-app"
                className="btn"
              >
                GitHub
              </a>
              <a href="https://amuse-jx0a.onrender.com/" className="btn">
                Live Link
              </a>
              <a
                href="https://www.youtube.com/watch?v=QcFOdZNFpBY&list=PLx0iOsdUOUmn_l4W9N2y0NBaMYNJlu8JF&index=1"
                className="btn"
              >
                Presentation
              </a>
            </div>
            <h2>Project Purpose and Goal</h2>
            <p>
              Designed the architecture on a team of four developers to create
              core features and integrate third party APIs. aMUSE is a fullstack
              web and mobile responsive <strong>React</strong> application that
              allows museum enthusiasts to{" "}
              <strong>search and write reviews for museums</strong>. Users can
              also keep a <strong>digital journal</strong> to document their
              visits and track their visits.
            </p>
            <br />
            <br />
            <h2>Tech Stack and Explanation</h2>
            <br />
            <div className="tech-stack">
              <ul>
                <li>React</li>
                <li>Redux</li>
                <li>PostgreSQL</li>
                <li>Express</li>
                <li>Node</li>
                <li>JavaScript</li>
                <li>CSS</li>
                <li>Tailwind</li>
                <li>Bcrypt</li>
                <li>Cypress</li>
              </ul>
            </div>

            <p>
              In developing the backend, my team harnessed the power of Node.js
              to create a robust RESTful API. <strong>PostgreSQL</strong> served
              as our database, while <strong>Express.js</strong> streamlined the
              development process. This backend empowers users to seamlessly
              navigate their profiles, offering features such as the ability to
              leave reviews, select favorite museums, and maintain a personal
              journal.
            </p>

            <p>
              To enhance the user experience, we implemented the{" "}
              <strong>Google Maps API</strong>, allowing dynamic interaction
              with maps. This feature enables users to effortlessly search for
              museums, plan future visits, and make informed decisions based on
              reviews.
            </p>

            <p>
              On the frontend, we used <strong>React</strong> with{" "}
              <strong>JavaScript</strong> for efficient client-side rendering.
              To manage state, we used <strong>Redux</strong>, and for secure
              authentication, we implemented <strong>BCrypt</strong> and{" "}
              <strong>JWT</strong>. For styling, we utilized{" "}
              <strong>CSS</strong> and <strong>Tailwind</strong>, ensuring an
              aesthetically pleasing and responsive user interface. For testing
              purposes, we chose to use <strong>Cypress</strong> as our
              framework.
            </p>
            <br />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Amuse;
