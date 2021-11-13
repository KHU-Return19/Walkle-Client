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
          <SuccessText className={isValid !== true && "invisible"}>
            <FontAwesomeIcon icon="check" />
          </SuccessText>
        </InputContainer>
        <CommentContainer>
          <SuccessComment className={isValid !== true && "invisible"}>
            {successComment}
          </SuccessComment>
          <FailComment className={isValid !== false && "invisible"}>
            {failComment}
          </FailComment>
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
  .invisible {
    display: none;
  }
`;
const LabelText = styled.span`
  font-size: 0.8rem;
  color: #8b8b8b;
`;
const InputContainer = styled.div`
  display: table-cell;
  vertical-align: middle;
  margin: 0.4rem auto;
  margin-bottom: 0;
  padding-left: 1.5rem;
  border: none;
  border-radius: 100px;
  width: 376px;
  max-width: 400px;
  height: 50px;
  font-size: 1rem;
  color: #313338;
  background: #fafafa;
`;
const Input = styled.input`
  border: none;
  border-radius: 100px;
  width: 330px;
  height: 50px;
  font-size: 1rem;
  color: #313338;
  background: #fafafa;
  :focus {
    outline: none;
  }
`;

const SuccessText = styled.span`
  padding-right: 1rem;
  color: #7054ff;
`;

const CommentContainer = styled.div`
  text-align: right;
`;

const SuccessComment = styled(SuccessText)`
  font-size: 0.7rem;
`;

const FailComment = styled(SuccessComment)`
  color: #f24822;
`;
