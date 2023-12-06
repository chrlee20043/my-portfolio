import React from "react";
import "./nav.css";
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
import { CgWebsite } from "react-icons/cg";

const Nav = () => {
  return (
    <nav>
      <Link to="/" className="nav-link">
        <AiOutlineHome size={24} />
        <p>Home</p>
      </Link>

      <Link to="/experience" className="nav-link">
        <BiBook size={24} />
        <p>Experience</p>
      </Link>
      <Link to="/portfolio" className="nav-link">
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
    </nav>
  );
};

export default Nav;
