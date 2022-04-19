import React from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
import Gallery from "../components/Galery/Gallery";
const Router = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Gallery />} />
        {/* <Route path="/about" element={<About />} />*/}
        {/* <Route path="/image/:imageId" element={<ImageCard />} />*/}
      </Routes>
    </HashRouter>
  );
};

export default Router;
