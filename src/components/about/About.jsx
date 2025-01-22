import React from "react";
import { Link } from "react-router-dom";
import "./about.css";
import ME from "../../assets/me-about.jpeg";
import ChristinaLeeResume from "../../assets/ChristinaLeeResume.pdf";

const About = () => {
  return (
    <section id="about">
      <h1>Hello, I'm Christina Lee</h1>
      <h2 className="about-title">Fullstack Developer</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me image">
            <img src={ME} alt="About Me" />
          </div>
        </div>
        <div className="about__content">
          <p>
            My passion for web development started in 2019 when I first learned
            HTML to update and maintain my employer's website at a nonprofit. I
            continue to develop my technical skills as a Client Support
            Specialist at a startup where I work closely with clients and
            engineers, write SQL queries, documentation, and debug issues.
            <br />
            <br />
            I recently completed a Software Engineering Internship with BetterHelp and graduated from the Grace Hopper coding bootcamp at
            Fullstack Academy. I really enjoyed the collaborative learning
            environment and working independently and on a team to build apps, implement features,
            and learn new technologies.
            <br />
            <br />
            
            Please reach out to connect!
          </p>
          <div className="about__buttons">
            <Link to="/contact" className="btn btn-primary">
              Let's Talk
            </Link>
            <a href={ChristinaLeeResume} download className="btn">
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
