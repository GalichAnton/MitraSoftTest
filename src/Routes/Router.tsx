import React from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
import Gallery from "../components/Gallery/Gallery";
import MainLayout from "../components/Layout/MainLayout";
import About from "../components/About/About";
import PhotoCard from "../components/PhotoCard/PhotoCard";
const Router = () => {
  return (
    <HashRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Gallery />} />
          <Route path="about" element={<About />} />
          <Route path="/photo/:photoId" element={<PhotoCard />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default Router;
