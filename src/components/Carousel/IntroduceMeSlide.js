import React from "react";
import styled from "styled-components";
import {
  ProfileRegisterForm,
  ProfileInputRowBox,
  HeadText,
  ButtonContainer,
  NextSlideButton,
} from "./ProfileRegisterSlide";
import { LabelText, InputContainer, Input } from "../InputRow";

const IntroduceMeSlide = ({ introduce, handleInput }) => {
  return (
    <IntroduceMeForm>
      <HeadText>자기소개</HeadText>
      <IntroduceInputRowBox>
        <IntroduceInputRow>
          <LabelText>자기소개 작성</LabelText>
          <LongInputContainer>
            <LongInput
              type="introduce"
              value={introduce}
              onChange={handleInput("introduce")}
              placeholder="나를 소개할 수 있는 말을 입력해주세요"
              required
            />
          </LongInputContainer>
        </IntroduceInputRow>
        <IntroduceInputRow>
          <LabelText>인스타그램 계정 연결</LabelText>
          <InputContainer>
            <Input
              type="introduce"
              value={introduce}
              onChange={handleInput("introduce")}
              placeholder="인스타그램 프로필 URL을 입력해주세요"
              required
            />
          </InputContainer>
        </IntroduceInputRow>
        <ButtonContainer>
          <PrevSlideButton>이전으로</PrevSlideButton>
          <NextSlideButton>다음</NextSlideButton>
        </ButtonContainer>
      </IntroduceInputRowBox>
    </IntroduceMeForm>
  );
};

export default IntroduceMeSlide;

const IntroduceMeForm = styled(ProfileRegisterForm)``;

const IntroduceInputRowBox = styled(ProfileInputRowBox)``;

const IntroduceInputRow = styled.div`
  padding: 1rem;
`;

const LongInputContainer = styled(InputContainer)`
  display: flex;
  height: 200px;
  border-radius: 20px;
`;

const LongInput = styled(Input)`
  font-size: 0.8rem;
`;

const PrevSlideButton = styled(NextSlideButton)`
  background: #ffffff;
  color: #313338;
  border: solid 2px #dbdbdb;
  font-weight: 600;
`;
