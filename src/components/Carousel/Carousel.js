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

const CarouselContainer = styled.div``;
