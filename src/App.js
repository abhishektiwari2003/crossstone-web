import React, { useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer/Footer";
import Calculate from "./pages/Calculate";
import { Fab, Box } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PhoneIcon from "@mui/icons-material/Phone";

function App() {
  const homeRef = useRef(null);

  const handleScrollToSection = (section) => {
    if (homeRef.current) {
      homeRef.current.scrollToSection(section);
    }
  };

  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/917619236463?text=I%20am%20interested%20in%20house%20construction",
      "_blank"
    ); // Change to your WhatsApp number
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:+917619236463"; // Change to your phone number
  };

  return (
    <>
      <BrowserRouter>
        <Navbar onNavigate={handleScrollToSection} />
        <Routes>
          <Route path="/" element={<Home ref={homeRef} />} />
          <Route path="/calculate" element={<Calculate />} />
        </Routes>
      </BrowserRouter>

      <Footer />

      {/* Horizontal FAB Buttons */}
      <Box
        sx={{
          position: "fixed",
          bottom: 20,
          right: 20,
          display: "flex",
          flexDirection: "row", // Horizontal layout
          gap: 2,
        }}
      >
        {/* WhatsApp FAB */}
        <Fab
          color="success"
          aria-label="whatsapp"
          onClick={handleWhatsAppClick}
          sx={{ backgroundColor: "#25D366", color: "white" }}
        >
          <WhatsAppIcon />
        </Fab>

        {/* Phone FAB */}
        <Fab
          color="primary"
          aria-label="phone"
          onClick={handlePhoneClick}
          sx={{ backgroundColor: "#007bff", color: "white" }}
        >
          <PhoneIcon />
        </Fab>
      </Box>
    </>
  );
}

export default App;
