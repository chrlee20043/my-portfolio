import React from "react";
import { Routes, Route } from "react-router-dom";
import Amuse from "../portfolio/Amuse";
import Header from "../header/Header";
import Nav from "../nav/Nav";
import About from "../about/About";
import Experience from "../experience/Experience";
import Services from "../services/Services";
import Portfolio from "../portfolio/Portfolio";
import Testimonials from "../testimonials/Testimonials";
import Contact from "../contact/Contact";
import Footer from "../footer/Footer";

const AppRouter = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />

      <Routes>
        {/* <Route path="/" element={<Header />} /> */}
        <Route path="/project/amuse" element={<Amuse />} />
      </Routes>
    </>
  );
};

export default AppRouter;
