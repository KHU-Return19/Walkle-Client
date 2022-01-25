import React from "react";
import styled from "styled-components";

const RegisterButton = ({ isEdit }) => {
  return (
    <>
      <RegisterButtonContainer>
        {isEdit ? (
          <Button>프로젝트 등록하기</Button>
        ) : (
          <Button>수정완료</Button>
        )}
      </RegisterButtonContainer>
    </>
  );
};

export default RegisterButton;

const RegisterButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 100px 0px;
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 100px;
  width: ${(props) => (props.isEdit ? "153px" : "231px")};
  height: 61px;
  box-sizing: border-box;
  font-family: Pretendard;
  font-size: 21px;
  font-weight: 700;
  line-height: 21px;
  color: #ffffff;
  background: #7054ff;
  :hover {
    opacity: 0.8;
    transition: 0.3s;
  }
`;
