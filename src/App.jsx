import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Video from "./components/Video";
import CGIAD from "./components/CGIAD";
import WEb from "./components/WEb";
import Graphic from "./components/Graphic";
import PortFolio from "./components/PortFolio";

function App() {
  return (
    <>
      <div className="app min-h-screen bg-black flex flex-col  ">
        <Navbar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/video" element={<Video />} />
            <Route path="/CGI" element={<CGIAD />} />
            <Route path="/web" element={<WEb />} />
            <Route path="/UIUX" element={<Graphic />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<PortFolio />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
}
export default App;
