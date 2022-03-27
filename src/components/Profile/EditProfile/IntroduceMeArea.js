import React from "react";
import styled from "styled-components";
import { ReactComponent as CheckIcon } from "../../../assets/check.svg";
import {
  SlideContainer,
  InputForm,
  CommentContainer,
  SuccessText,
  FailComment,
  Label,
} from "./SetNameJobArea";
import { LabelText, Input } from "../../InputRow";

const IntroduceMeArea = ({
  introduce,
  instagramUrl,
  isValid,
  failComment,
  handleInput,
}) => {
  return (
    <>
      <SlideContainer>
        <Label>자기소개</Label>
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
              <IntroduceInputContainer>
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
              </IntroduceInputContainer>
              <CommentContainer>
                {isValid === false && <FailComment>{failComment}</FailComment>}
              </CommentContainer>
            </IntroduceInputRow>
          </IntroduceInputRowContainer>
        </InputForm>
      </SlideContainer>
    </>
  );
};

export default IntroduceMeArea;

const IntroduceInputRow = styled.div`
  padding-bottom: 20px;
`;

const IntroduceInputRowContainer = styled.div`
  margin: 0px;
  width: 400px;
`;

const LongInputContainer = styled.div`
  display: flex;
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

const IntroduceInputContainer = styled.div`
  display: table-cell;
  vertical-align: middle;
  margin: 0.4rem auto;
  margin-bottom: 0;
  padding-left: 1.5rem;
  border: none;
  border-radius: 100px;
  width: 400px;
  height: 50px;
  font-size: 1rem;
  color: #313338;
  background: #fafafa;
`;

const LengthIndicator = styled.span`
  font-family: Pretendard;
  font-size: 11px;
  font-weight: 500;
  color: #8b8b8b;
`;
