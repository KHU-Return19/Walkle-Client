import React from "react";
import styled from "styled-components";
import { ReactComponent as CheckIcon } from "../../assets/check.svg";
import {
  SlideContainer,
  HeadTextContainer,
  HeadText,
  InputForm,
  CommentContainer,
  ButtonContainer,
  PrevSlideButton,
  NextSlideButton,
  SuccessText,
  FailComment,
} from "./SetNameJobSlide";
import { LabelText, InputContainer, Input } from "../InputRow";

const IntroduceMeSlide = ({
  introduce,
  instagramUrl,
  isValid,
  failComment,
  handleInput,
  toggleSlide,
}) => {
  return (
    <>
      <SlideContainer>
        <HeadTextContainer>
          <HeadText>크리에이터님을 {"\n"} 자유롭게 소개해 보세요</HeadText>
        </HeadTextContainer>
        <InputForm>
          <IntroduceInputRowContainer>
            <IntroduceInputRow>
              <LabelText>한줄 자기소개</LabelText>
              <LongInputContainer>
                <LongInput
                  type="introduce"
                  value={introduce}
                  onChange={handleInput("introduce")}
                  placeholder="자기소개를 입력해 주세요"
                  required
                />
              </LongInputContainer>
              <CommentContainer>
                <LengthIndicator
                  className={
                    introduce.length !== 0 &&
                    (introduce.length < 100 ? "success" : "fail")
                  }
                >
                  {introduce.length}/100
                </LengthIndicator>
              </CommentContainer>
            </IntroduceInputRow>
            <IntroduceInputRow>
              <LabelText>인스타그램 계정 연결</LabelText>
              <InputContainer>
                <Input
                  type="instagramUrl"
                  value={instagramUrl}
                  onChange={handleInput("instagramUrl")}
                  placeholder="인스타그램 프로필 URL을 입력해주세요"
                  required
                />
                {isValid && (
                  <SuccessText>
                    <CheckIcon />
                  </SuccessText>
                )}
              </InputContainer>
              <CommentContainer>
                {isValid === false && <FailComment>{failComment}</FailComment>}
              </CommentContainer>
            </IntroduceInputRow>
          </IntroduceInputRowContainer>
        </InputForm>
        <ButtonContainer>
          <PrevSlideButton onClick={toggleSlide("prev")}>
            이전으로
          </PrevSlideButton>
          <NextSlideButton onClick={toggleSlide("next")}>
            다음으로
          </NextSlideButton>
        </ButtonContainer>
      </SlideContainer>
    </>
  );
};

export default IntroduceMeSlide;

const IntroduceInputRow = styled.div`
  padding: 10px 0px;
`;

const IntroduceInputRowContainer = styled.div`
  margin: 20px 30px;
`;

const LongInputContainer = styled.div`
  display: flex;
  margin: 0.4rem auto;
  margin-bottom: 0;
  padding-left: 1.5rem;
  border: none;
  border-radius: 20px;
  width: 400px;
  height: 200px;
  font-size: 1rem;
  color: #313338;
  background: #fafafa;
`;

const LongInput = styled.textarea`
  border: none;
  border-radius: 20px;
  font-family: Pretendard;
  font-size: 18px;
  color: #313338;
  background: #fafafa;
  :focus {
    outline: none;
  }
  padding: 20px 20px 20px 0px;
  line-height: 28px;
  width: 300px;
  resize: none;
`;

const LengthIndicator = styled.span`
  font-family: Pretendard;
  font-size: 11px;
  font-weight: 500;
  color: #8b8b8b;
`;
