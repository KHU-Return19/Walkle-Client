import React from "react";
import styled from "styled-components";
import { ReactComponent as CheckIcon } from "../assets/check.svg";
import { ReactComponent as SendIcon } from "../assets/paper_plane.svg";

const InputRow = ({
  labelText,
  type,
  value,
  onChange,
  placeholder,
  successComment,
  failComment,
  isValid,
  isEmail,
  onSubmit,
}) => {
  return (
    <>
      <InputRowBox>
        <LabelText>{labelText}</LabelText>
        <InputContainer>
          <Input
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            required
          />
          {value !== "" && isValid === true && (
            <SuccessText>
              <CheckIcon />
            </SuccessText>
          )}
          {isEmail && isValid !== true && (
            <SendIcon fill="#8b8b8b" className="send-icon" onClick={onSubmit} />
          )}
        </InputContainer>
        <CommentContainer>
          {value !== "" && isValid === true && (
            <SuccessComment>{successComment}</SuccessComment>
          )}

          {isValid === false && <FailComment>{failComment}</FailComment>}
        </CommentContainer>
      </InputRowBox>
    </>
  );
};

export default InputRow;

const InputRowBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 107px;
`;
export const LabelText = styled.div`
  margin-bottom: 1rem;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 500;
  color: #8b8b8b;
`;
export const InputContainer = styled.div`
  display: flex;
  align-items: center;
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
  .send-icon {
    cursor: pointer;
    :hover {
      opacity: 0.8;
      transition: 0.5s;
    }
  }
`;
export const Input = styled.input`
  border: none;
  border-radius: 100px;
  width: 330px;
  height: 50px;
  margin-right: 20px;
  font-family: Pretendard;
  font-size: 18px;
  color: #313338;
  background: #fafafa;
  :focus {
    outline: none;
  }
`;

const SuccessText = styled.span`
  padding-right: 1rem;
  font-family: Pretendard;
  color: #7054ff;
`;

const CommentContainer = styled.div`
  text-align: right;
  line-height: 21px;
`;

const SuccessComment = styled(SuccessText)`
  font-size: 13px;
`;

const FailComment = styled(SuccessComment)`
  color: #f24822;
`;
