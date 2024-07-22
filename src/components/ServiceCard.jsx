import React from "react";
import styled from "styled-components";

function ServiceCard({ title, image }) {
  return (
    <CardWrapper>
      <CardImage loading="lazy" src={image} alt={title} />
      <CardTitle>{title}</CardTitle>
    </CardWrapper>
  );
}

const CardWrapper = styled.article`
  display: flex;
  flex-direction: column;
`;

const CardImage = styled.img`
  aspect-ratio: 1.3;
  object-fit: cover;
  width: 100%;
  box-shadow: 0px 4px 42px -9px rgba(0, 0, 0, 0.15);
  @media (max-width: 991px) {
    margin-top: 32px;
  }
`;

const CardTitle = styled.h3`
  font-family: Inter, sans-serif;
  font-size: 18px;
  font-weight: 700;
  color: #fff;
  text-align: center;
  letter-spacing: 0.9px;
  line-height: 150%;
  background-color: #202020;
  border-radius: 5px;
  padding: 13px;
  margin-top: 7px;
  @media (max-width: 991px) {
    padding: 13px 20px;
  }
`;

export default ServiceCard;
