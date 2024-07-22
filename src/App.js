import React, { useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  const homeRef = useRef(null);

  const handleScrollToSection = (section) => {
    if (homeRef.current) {
      homeRef.current.scrollToSection(section);
    }
  };

  return (
    <>
      <BrowserRouter>
        <Navbar onNavigate={handleScrollToSection} />
        <Routes>
          <Route path="/" element={<Home ref={homeRef} />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
