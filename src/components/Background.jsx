import React from "react";
import styled from "styled-components";
import Bgimage from "../assets/Bgimage.jpeg"

export default function BackgroundImage() {
  return (
    <Container>
      <img src={Bgimage} alt="background" />
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  img {
    height: 100vh;
    width: 100vw;
  }
`;
