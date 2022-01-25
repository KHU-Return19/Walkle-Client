import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const InputRow = ({
  labelText,
  type,
  value,
  onChange,
  placeholder,
  successComment,
  failComment,
  isValid,
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
              <FontAwesomeIcon icon="check" />
            </SuccessText>
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
export const Input = styled.input`
  border: none;
  border-radius: 100px;
  width: 330px;
  height: 50px;
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
