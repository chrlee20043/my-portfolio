import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../home/Home";
import Nav from "../nav/Nav";
import About from "../about/About";
import Experience from "../experience/Experience";
// import Services from "../jobs/Jobs";
import Portfolio from "../portfolio/Portfolio";
import Testimonials from "../testimonials/Testimonials";
import Contact from "../contact/Contact";
import Footer from "../footer/Footer";
import Amuse from "../portfolio/Amuse";

const AppRouter = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        {/* <Route path="/services" element={<Services />} /> */}
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/footer" element={<Footer />} />
        {/* PROJECT ROUTES */}
        <Route path="/amuse" element={<Amuse />} />
      </Routes>
    </>
  );
};

export default AppRouter;
