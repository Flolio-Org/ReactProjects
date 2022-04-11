import React from "react";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import styled from "styled-components";

const Home = () => {
  return (
    <div>
      <Announcement />
      <Container>
        <Navbar />
      </Container>
      <Slider />
    </div>
  );
};

const Container = styled.div`
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
  margin-top: -15px;
`;

export default Home;
