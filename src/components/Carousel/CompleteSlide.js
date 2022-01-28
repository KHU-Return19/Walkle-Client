import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { HeadText } from "./SetNameJobSlide";
import Moly from "../../assets/moly.svg";

const CompleteSlide = () => {
  return (
    <>
      <SlideContainer>
        <HeadText>프로필 등록이{"\n"}완료 되었습니다!</HeadText>
        <MolyImg src={Moly} />
        <Link to="/">
          <BackToHomeButton>홈으로 돌아가기</BackToHomeButton>
        </Link>
      </SlideContainer>
    </>
  );
};

export default CompleteSlide;

const SlideContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 810px;
  align-items: center;
  justify-content: center;
  a {
    width: 174px;
    height: 50px;
    text-decoration: none;
  }
`;

const MolyImg = styled.img`
  margin: 114px 0px;
`;

const BackToHomeButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 100px;
  width: 174px;
  height: 50px;
  box-sizing: border-box;
  font-family: Pretendard;
  font-size: 18px;
  font-weight: 700;
  color: #ffffff;
  background: #7054ff;
  :hover {
    opacity: 0.8;
    transition: 0.3s;
  }
`;
