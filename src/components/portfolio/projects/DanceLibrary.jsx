import React from "react";
import "./projects.css";
import IMG1 from "../../../assets/dancelibraryclasses.png";
import { useNavigate } from "react-router-dom";
import { FiArrowLeftCircle } from "react-icons/fi";

const DanceLibrary = () => {
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
      <h1>Christina's List</h1>

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
                href="https://github.com/chrlee20043/dance-library"
                className="btn"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
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
            <h2>Project Purpose and Goal</h2>
            <p>
              A full stack <strong>React</strong> web (and mobile responsive)
              app designed for dancers of all levels to create their own virtual
              library of dance classes from their favorite instructors. Users
              can browse, search, filter classes and instructors to add to their
              personal library. Users can edit and delete classes and
              instructors they added and favorite classes to save them to their
              profile for later viewing.
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
                <li>Material UI</li>
                <li>Bcrypt</li>
                <li>Cypress</li>
              </ul>
            </div>
            <p>
              In developing the backend, I used Node.js to create a robust
              RESTful API, <strong>PostgreSQL</strong> served as the database,
              and <strong>Express.js</strong> for the development process. This
              backend allows users to engage in smooth CRUD operations for
              various features such as browsing, filtering classes and
              instructors, adding, editing, and deleting classes and instructors
              they added to their library.
            </p>

            <p>
              On the frontend, I used <strong>React</strong> with{" "}
              <strong>JavaScript</strong> for efficient client-side rendering.
              To manage state, we used <strong>Redux</strong>, and for secure
              authentication, we implemented <strong>BCrypt</strong> and{" "}
              <strong>JWT</strong>. For styling, we utilized{" "}
              <strong>CSS</strong> and <strong>Material UI</strong>. I wanted to
              dive into Material UI for this project to learn more about its
              usage, syntax, and implementation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DanceLibrary;
