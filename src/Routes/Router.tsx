import React from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
const Router = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Galery />} />
        <Route path="/about" element={<About />} />
        <Route path="/image/:imageId" element={<ImageCard />} />
      </Routes>
    </HashRouter>
  );
};

export default Router;
