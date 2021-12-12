import React from "react";
import styled from "styled-components";
import { LabelText, InputContainer, Input } from "../InputRow";
import {
  HeadText,
  HeadTextContainer,
  InputForm,
  InputRowContainer,
  SlideContainer,
} from "./SetNameJobSlide";

const SetLocationSlide = () => {
  return (
    <>
      <SlideContainer>
        <HeadTextContainer>
          <HeadText>다른 위치도{"\n"}추가할 수 있어요</HeadText>
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
        </HeadTextContainer>
      </SlideContainer>
    </>
  );
};

export default SetLocationSlide;

const LocationLabelText = styled(LabelText)`
  margin-bottom: 10px;
`;

const SubLocationLabelText = styled(LabelText)`
  font-size: 13px;
  line-height: 21px;
  white-space: pre-wrap;
`;

const MapContainer = styled(InputContainer)`
  width: 400px;
  height: 400px;
  border-radius: 16px;
`;
