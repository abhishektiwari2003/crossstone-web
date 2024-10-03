import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Import Font Awesome styles
import "./FloatingButton.css"; // Import custom styles

const FloatingButton = () => {
  return (
    <>
      {/* WhatsApp Button */}
      <a
        href="https://api.whatsapp.com/send?phone=51955081075&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Varela%202."
        className="float whatsapp"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa fa-whatsapp my-float"></i>
      </a>

      {/* Call Button */}
      <a href="tel:+51955081075" className="float call">
        <i className="fa fa-phone my-float"></i>
      </a>
    </>
  );
};

export default FloatingButton;
