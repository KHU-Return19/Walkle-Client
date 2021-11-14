import React from "react";
import styled from "styled-components";
import ProfileRegisterSlide from "./ProfileRegisterSlide";

const Carousel = ({ gender, setGender, handleInput }) => {
  return (
    <CarouselContainer>
      <ProfileRegisterSlide
        gender={gender}
        setGender={setGender}
        handleInput={handleInput}
      />
    </CarouselContainer>
  );
};

export default Carousel;

const CarouselContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 460px;
  min-width: 400px;
  max-height: 1000px;
  margin: 50px auto;
  margin-bottom: 0;
  a {
    text-decoration: none;
  }
`;
