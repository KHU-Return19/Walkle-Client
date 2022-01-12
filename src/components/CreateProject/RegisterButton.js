import React from "react";
import styled from "styled-components";
import StyledButton from "../Button";
import { ButtonContainer } from "../Carousel/SetNameJobSlide";

const RegisterButton = ({ isEdit }) => {
  return (
    <>
      <RegisterButtonContainer>
        <Button className={isEdit && "invisible"}>프로젝트 등록하기</Button>
        <Button className={!isEdit && "invisible"}>수정완료</Button>
      </RegisterButtonContainer>
    </>
  );
};

export default RegisterButton;

const RegisterButtonContainer = styled(ButtonContainer)`
  padding: 100px 0px;
  .invisible {
    display: none;
  }
`;

const Button = styled(StyledButton)`
  width: 231px;
  height: 61px;
  font-size: 21px;
  line-height: 21px;
  font-weight: 700;
`;
