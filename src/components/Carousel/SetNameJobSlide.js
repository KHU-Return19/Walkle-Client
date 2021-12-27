import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import StyledButton from "../Button";
import { LabelText, InputContainer, Input } from "../InputRow";

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
                <SuccessText className={isValid !== true && "invisible"}>
                  <FontAwesomeIcon icon="check" />
                </SuccessText>
              </NameJobInputContainer>
              <CommentContainer>
                <FailComment className={isValid !== false && "invisible"}>
                  {failComment}
                </FailComment>
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
                <SuccessText className={job === "" && "invisible"}>
                  <FontAwesomeIcon icon="check" />
                </SuccessText>
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

const NameJobInputContainer = styled(InputContainer)`
  .invisible {
    display: none;
  }
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
  .invisible {
    display: none;
  }
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
  text-align: center;
`;

export const NextSlideButton = styled(StyledButton)`
  margin: 40px 10px 10px 10px;
  width: 123px;
  height: 50px;
  border-radius: 100px;
  font-family: Pretendard;
  font-size: 18px;
  font-weight: 600;
`;

export const PrevSlideButton = styled(NextSlideButton)`
  background: #ffffff;
  color: #313338;
  border: solid 1px #dbdbdb;
`;
