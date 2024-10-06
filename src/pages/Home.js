import React, { useRef } from "react";
import GetInTouch from "../components/GetInTouch";
import ServicesSection from "../components/ServicesSection";
import Header from "../components/Header";
// import HowItWorks from "../components/HowItWorks";
import PaymentSection from "../components/PaymentSection";
import OurProjects from "../components/OurProjetcs";

const Home = React.forwardRef((props, ref) => {
  const servicesRef = useRef(null);
  const contactRef = useRef(null);

  React.useImperativeHandle(ref, () => ({
    scrollToSection(section) {
      if (section === "services") {
        servicesRef.current.scrollIntoView({ behavior: "smooth" });
      } else if (section === "contact") {
        contactRef.current.scrollIntoView({ behavior: "smooth" });
      }
    },
  }));

  return (
    <>
      <Header />
      <div ref={servicesRef}>
        <ServicesSection />
      </div>
      <PaymentSection />
      <OurProjects />
      <GetInTouch />
    </>
  );
});

export default Home;
