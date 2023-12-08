import React from "react";
import "./projects.css";
import IMG1 from "../../../assets/Christinas-List-final.png";
import { useNavigate } from "react-router-dom";
import { FiArrowLeftCircle } from "react-icons/fi";

const ChristinasList = () => {
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
                href="https://github.com/chrlee20043/christinas-list"
                className="btn"
              >
                GitHub
              </a>
              <a
                href="https://christinas-list.onrender.com/"
                className="btn btn-primary"
              >
                Live Link
              </a>
            </div>
            <h2>Project Purpose and Goal</h2>
            <p>
              An independently developed <strong>React</strong> front-end web
              app where users can sell and purchase goods. Users can create
              posts to sell unwanted items, edit and delete their posts. Users
              can message sellers to inquire about items for sale and view their
              posts and sent messages on their profile page.
            </p>
            <br />
            <br />
            <h2>Tech Stack and Explanation</h2>
            <br />
            <div className="tech-stack">
              <ul>
                <li>React</li>
                <li>Redux</li>
                <li>JavaScript</li>
                <li>CSS</li>
              </ul>
            </div>

            <p>
              Christina's List is a dynamic Craigslist clone, featuring a
              meticulously crafted front-end application seamlessly integrated
              with a <strong>RESTful API</strong>, developed through Fullstack
              Academy. Within this user-friendly platform, individuals can
              effortlessly engage in basic <strong>CRUD operations</strong>,
              facilitating the smooth processes of selling, purchasing, and
              exchanging messages with other users. Notably, this project
              represents a significant milestone for me as it is one of my first
              React application projects, and I am very proud of it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChristinasList;
