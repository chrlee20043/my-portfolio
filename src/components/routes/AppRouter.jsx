import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../home/Home";
import Nav from "../nav/Nav";
import About from "../about/About";
import Experience from "../experience/Experience";
import Portfolio from "../portfolio/Portfolio";
import Testimonials from "../testimonials/Testimonials";
import Contact from "../contact/Contact";
import Footer from "../footer/Footer";
import Amuse from "../portfolio/projects/Amuse";
import DanceLibrary from "../portfolio/projects/DanceLibrary";
import ChristinasList from "../portfolio/projects/ChristinasList";

const AppRouter = () => {
  return (
    <>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Portfolio />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<Contact />} />
        {/* PROJECT ROUTES */}
        <Route path="/amuse" element={<Amuse />} />
        <Route path="/dance-library" element={<DanceLibrary />} />
        <Route path="/christinas-list" element={<ChristinasList />} />
      </Routes>
      <Footer />
    </>
  );
};

export default AppRouter;
