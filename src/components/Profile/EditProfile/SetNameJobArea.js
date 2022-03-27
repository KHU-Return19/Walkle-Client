import React from "react";
import styled from "styled-components";
import { ReactComponent as CheckIcon } from "../../../assets/check.svg";
import { LabelText, Input } from "../../InputRow";

const SetNameJobArea = ({
  nickname,
  job,
  handleInput,
  isValid,
  failComment,
}) => {
  return (
    <>
      <SlideContainer>
        <Label>프로필 기본정보</Label>
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
                    <CheckIcon />
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
                    <CheckIcon />
                  </SuccessText>
                )}
              </NameJobInputContainer>
              <CommentContainer></CommentContainer>
            </InputRow>
          </InputRowContainer>
        </InputForm>
      </SlideContainer>
    </>
  );
};

export default SetNameJobArea;

export const SlideContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-items: center;
  margin: auto auto 80px 716px;
`;

export const Label = styled.div`
  width: 114px;
  font-family: "Pretendard";
  font-weight: 700;
  font-size: 18px;
  line-height: 18px;
  color: #7054ff;
  margin-right: 69px;
`;
export const InputForm = styled.div`
  width: 460px;
`;

export const InputRowContainer = styled.div``;

export const InputRow = styled.div``;

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
  width: 400px;
  padding-left: 1.5rem;
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
