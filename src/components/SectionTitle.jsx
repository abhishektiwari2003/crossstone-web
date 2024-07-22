import React from "react";
import styled from "styled-components";

function SectionTitle({ title }) {
  return (
    <>
      <Title>{title}</Title>
      <Underline />
    </>
  );
}

const Title = styled.h2`
  color: #202020;
  text-align: center;
  font: 700 60px Inter, sans-serif;
  @media (max-width: 991px) {
    font-size: 40px;
  }
`;

const Underline = styled.div`
  background-color: #f42a40;
  align-self: center;
  margin-top: 19px;
  width: 352px;
  max-width: 100%;
  height: 2px;
`;

export default SectionTitle;
