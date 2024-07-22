import React from "react";
import styled from "styled-components";
import ServiceCard from "./ServiceCard";
import SectionTitle from "./SectionTitle";

const services = [
  {
    title: "Architectural Drawings",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/2e0348f149105b60ab7b4a7fe6f5763ad4122e1d0b5bf0b9f047cff409f921f4?apiKey=11f7ad7d5fff48f4a1c546fc85f8495e&",
  },
  {
    title: "Interior Design",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/631eebf073c13d59a16f431c29c13723640a764d9fe0d44a702255e108b277b1?apiKey=11f7ad7d5fff48f4a1c546fc85f8495e&",
  },
  {
    title: "Project Management",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/2161a0a2426bf96dbc7f01e10758b8ef9bfb52dcb235633a130eebc390577f3a?apiKey=11f7ad7d5fff48f4a1c546fc85f8495e&",
  },
  {
    title: "Construction",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/07cfb978d641c3a5753e84445f43af2b87fd20c6b77675e77b70aee87942f5c3?apiKey=11f7ad7d5fff48f4a1c546fc85f8495e&",
  },
];

function ServicesSection() {
  return (
    <Section>
      <SectionTitle title="Services" />
      <ServiceGrid>
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            image={service.image}
          />
        ))}
      </ServiceGrid>
    </Section>
  );
}

const Section = styled.section`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 52px 60px 80px;
  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  width: 100%;
  max-width: 928px;
  margin-top: 46px;
  @media (max-width: 991px) {
    grid-template-columns: 1fr;
    margin-top: 40px;
  }
`;

export default ServicesSection;
