import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LabelText, Input } from "../InputRow";

const SetNameJobSlide = ({
  nickname,
  job,
  handleInput,
  isValid,
  failComment,
  toggleSlide,
}) => {
  return (
    <>
      <SlideContainer>
        <HeadTextContainer>
          <HeadText>
            크리에이터로 활동할 {"\n"} 이름과 직업을 설정해 주세요
          </HeadText>
        </HeadTextContainer>
        <InputForm>
          <InputRowContainer>
            <InputRow>
              <LabelText>닉네임</LabelText>
              <NameJobInputContainer>
                <Input
                  type="nickname"
                  value={nickname}
                  onChange={handleInput("nickname")}
                  placeholder="닉네임을 입력하세요"
                  required
                />
                {isValid && (
                  <SuccessText>
                    <FontAwesomeIcon icon="check" />
                  </SuccessText>
                )}
              </NameJobInputContainer>
              <CommentContainer>
                {isValid === false && <FailComment>{failComment}</FailComment>}
              </CommentContainer>
            </InputRow>
            <InputRow>
              <LabelText>직업</LabelText>
              <NameJobInputContainer>
                <Input
                  type="job"
                  value={job}
                  onChange={handleInput("job")}
                  placeholder="직업을 입력하세요"
                  required
                />
                {job !== "" && (
                  <SuccessText>
                    <FontAwesomeIcon icon="check" />
                  </SuccessText>
                )}
              </NameJobInputContainer>
              <CommentContainer></CommentContainer>
            </InputRow>
          </InputRowContainer>
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

export default SetNameJobSlide;

export const SlideContainer = styled.div`
  justify-items: center;
  width: 100vw;
`;
export const HeadTextContainer = styled.div`
  justify-items: center;
  text-align: center;
  margin-bottom: 40px;
`;

export const HeadText = styled.span`
  font-family: Pretendard;
  font-size: 26px;
  font-weight: 700;
  line-height: 36px;
  white-space: pre-wrap;
`;
export const InputForm = styled.div`
  width: 460px;
  border: 1px solid #f1f1f1;
  border-radius: 20px;
`;

export const InputRowContainer = styled.div`
  margin: 30px;
`;

export const InputRow = styled.div`
  margin: 20px 0px;
`;

const NameJobInputContainer = styled.div`
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

export const SuccessText = styled.span`
  padding-right: 1rem;
  font-family: Pretendard;
  color: #7054ff;
`;

export const CommentContainer = styled.div`
  height: 20px;
  text-align: right;
  line-height: 21px;
  .success {
    color: #7054ff;
  }
  .fail {
    color: #f24822;
  }
`;

export const SuccessComment = styled(SuccessText)`
  font-size: 13px;
`;

export const FailComment = styled(SuccessComment)`
  color: #f24822;
`;
export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NextSlideButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 100px;
  width: 123px;
  height: 50px;
  margin: 40px 10px 10px 10px;
  box-sizing: border-box;
  font-family: Pretendard;
  font-size: 18px;
  font-weight: 600;
  color: #ffffff;
  background: #7054ff;
  :hover {
    opacity: 0.8;
    transition: 0.3s;
  }
`;

export const PrevSlideButton = styled(NextSlideButton)`
  background: #ffffff;
  color: #313338;
  border: solid 1px #dbdbdb;
`;
