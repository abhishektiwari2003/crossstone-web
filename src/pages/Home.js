import React from "react";
import GetInTouch from "../components/GetInTouch";
import GetStarted from "../components/GetStarted";
import Header from "../components/Header";
import HowItWorks from "../components/HowItWorks";
import PaymentSection from "../components/PaymentSection";
import Referral from "../components/Referral";
import OurProjetcts from "../components/OurProjetcs";

const Home = () => {
  return (
    <>
      <Header />
      <GetStarted />
      <HowItWorks />
      <PaymentSection />
      <Referral />
      <OurProjetcts />
      <GetInTouch />
    </>
  );
};

export default Home;
