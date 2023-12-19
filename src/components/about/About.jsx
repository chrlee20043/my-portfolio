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
            continued to develop my technical skills as a Client Support
            Specialist at a SaaS startup where I worked closely with clients and
            engineers, wrote SQL queries, documentation, and debugged issues.
            <br />
            <br />
            I recently graduated from the Grace Hopper coding bootcamp at
            Fullstack Academy. I really enjoyed the collaborative learning
            environment and working independently and on a team to build apps
            and learn new technologies.
            <br />
            <br />
            I'm currently looking for new opportunities, please reach out to
            connect!
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
