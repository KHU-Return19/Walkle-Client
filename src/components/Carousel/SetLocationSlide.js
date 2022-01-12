import React from "react";
import styled from "styled-components";
import {
  HeadText,
  HeadTextContainer,
  InputForm,
  InputRowContainer,
  SlideContainer,
  ButtonContainer,
  PrevSlideButton,
  NextSlideButton,
} from "./SetNameJobSlide";

const representText = "대표 위치를 {'\n'} 등록해 보세요";
const addAnotherText = "다른 위치도{'\n'}추가할 수 있어요";

const SetLocationSlide = ({ toggleSlide }) => {
  return (
    <>
      <SlideContainer>
        <HeadTextContainer>
          <HeadText>다른 위치도{"\n"}추가할 수 있어요</HeadText>
        </HeadTextContainer>
        <InputForm>
          <InputRowContainer>
            <LocationLabelText>위치등록</LocationLabelText>
            <SubLocationLabelText>
              운영시설/회사/작업공간 등 크리에이터가 주로 활동하는 지역을
              선택해주세요.
            </SubLocationLabelText>
          </InputRowContainer>
          <MapContainer></MapContainer>
        </InputForm>
        <ButtonContainer>
          <PrevSlideButton onClick={toggleSlide("prev")}>
            이전으로
          </PrevSlideButton>
          <NextSlideButton type="submit">등록완료</NextSlideButton>
        </ButtonContainer>
      </SlideContainer>
    </>
  );
};

export default SetLocationSlide;

const LocationLabelText = styled.div`
  margin-bottom: 10px;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 500;
  color: #8b8b8b;
`;

const SubLocationLabelText = styled.div`
  margin-bottom: 1rem;
  font-family: Pretendard;
  font-size: 13px;
  font-weight: 500;
  line-height: 21px;
  color: #8b8b8b;
  white-space: pre-wrap;
`;

const MapContainer = styled.div`
  display: flex;
  margin: 30px;
  border: none;
  border-radius: 16px;
  width: 400px;
  height: 400px;
  font-size: 1rem;
  color: #313338;
  background: #fafafa;
  .invisible {
    display: none;
  }
`;
