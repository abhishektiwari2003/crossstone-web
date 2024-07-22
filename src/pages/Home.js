import React from "react";
import GetInTouch from "../components/GetInTouch";
import GetStarted from "../components/ServicesSection";
import Header from "../components/Header";
import HowItWorks from "../components/HowItWorks";
import PaymentSection from "../components/PaymentSection";
import Referral from "../components/Referral";
import OurProjetcts from "../components/OurProjetcs";
import ServicesSection from "../components/ServicesSection";

const Home = () => {
  return (
    <>
      <Header />
      <ServicesSection />
      <HowItWorks />
      <PaymentSection />
      <Referral />
      <OurProjetcts />
      <GetInTouch />
    </>
  );
};

export default Home;
