import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <ul className="permalinks">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/experience">Experience</a>
        </li>
        <li>
          <a href="/projects">Portfolio</a>
        </li>
        <li>
          <a href="/testimonials">Testimonials</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
      <div className="footer__contact">
        <p>Contact Me</p>
        <a href="mailto:chrlee93@gmail.com" target="_blank" rel="noreferrer">
          chrlee93@gmail.com
        </a>
        <a
          href="https://www.linkedin.com/in/christinaehlee/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/chrlee20043"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
      </div>
    </footer>
  );
};

export default Footer;
