import React, { useEffect } from "react";
import { Toaster } from 'react-hot-toast';
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ProjectDetail from "./components/ProjectDetail";
import Home from "./Pages/Home";
import { Agentation } from 'agentation';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/project/:id" element={<ProjectDetail />} />
      </Routes>
      <Footer />
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: '#0f2244',
            color: '#f0f4ff',
            border: '1px solid rgba(245,158,11,0.2)',
          },
        }}
      />
      <Agentation />
    </>
  );
};

export default App;
