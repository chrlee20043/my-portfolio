import React from "react";
import { Routes, Route } from "react-router-dom";
import Amuse from "../portfolio/Amuse";
import Header from "../header/Header";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={Header} />
        <Route path="/project/amuse" element={Amuse} />
      </Routes>
    </>
  );
};

export default AppRouter;
