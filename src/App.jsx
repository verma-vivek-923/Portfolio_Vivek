import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProjectDetail from "./components/ProjectDetail";
import Projects from "./components/Projects";
import Home from "./Pages/Home";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/project/:id" element={<ProjectDetail />} />
      </Routes>
    </>
  );
};

export default App;
