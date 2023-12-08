import React from "react";
import "./nav.css";
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
import { CgWebsite } from "react-icons/cg";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const Nav = () => {
  return (
    <nav>
      <div className="nav-left">
        <Link to="/" className="nav-link">
          <AiOutlineHome size={24} />
          <p>Home</p>
        </Link>
        <Link to="/experience" className="nav-link">
          <BiBook size={24} />
          <p>Experience</p>
        </Link>
        <Link to="/projects" className="nav-link">
          <CgWebsite size={24} />
          <p>Projects</p>
        </Link>
        <Link to="/testimonials" className="nav-link">
          <RiServiceLine size={24} />
          <p>Testimonials</p>
        </Link>
        <Link to="/contact" className="nav-link">
          <BiMessageSquareDetail size={24} />
          <p>Contact</p>
        </Link>
      </div>
      <div className="nav-right">
        <a
          href="https://www.linkedin.com/in/christinaehlee/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin size={23} />
        </a>
        <a
          href="http://github.com/chrlee20043"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub size={23} />
        </a>
      </div>
    </nav>
  );
};

export default Nav;
