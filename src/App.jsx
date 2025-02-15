
import React, { useEffect } from "react";
import toast, { Toaster } from 'react-hot-toast';
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ProjectDetail from "./components/ProjectDetail";
import Projects from "./components/Projects";
import Home from "./Pages/Home";
import Aos from "aos";
import "aos/dist/aos.css"

const App = () => {
  useEffect(() => {
    Aos.init();
    
   }, []);
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/project/:id" element={<ProjectDetail />} />
      </Routes>
      <Footer/>
      <Toaster />
    </>
  );
};

export default App;
