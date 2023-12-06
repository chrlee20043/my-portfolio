import React from "react";
import "./projects.css";
import IMG1 from "../../../assets/aMUSE-img.png";
import { useNavigate } from "react-router-dom";

const Amuse = () => {
  const navigate = useNavigate;

  const handleClick = () => {
    navigate("/projects");
  };

  return (
    <section id="project__details">
      <h2>aMUSE</h2>

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
            <h2>PROJECT DETAILS</h2>
            <p>
              aMUSE is a web app created for museum enthusiasts to search,
              review, and rate museums. Users can save their most cherished
              experiences with the ability to favorite museums and keep a
              personalized journal of their visits, capturing the exhibits that
              left a lasting impression.
              <br />
              <br />
              Created on a team of four developers over the course of a month,
              aMUSE is a fullstack web and mobile responsive application catered
              toward museum enthustiasts. Utilizing the Google Maps API, aMUSE
              allows users to dynamically interact with the map feature to
              search for museums and learn more. Users can also browse museums
              and reviews to decide which museum to visit next. In addition,
              users can navigate through their profile to engage in CRUD
              operations for their reviews, favorite museums, and personal
              journal.
            </p>
            <button href className="btn" onClick={handleClick}>
              Return to Projects
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Amuse;
