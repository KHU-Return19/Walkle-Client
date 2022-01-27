import React from "react";
import styled from "styled-components";
import MainLogo from "../assets/WalkleLogo.svg";

const Footer = () => {
  return (
    <>
      <Wrapper>
        <Logo src={MainLogo} />
        <NavBar>
          <NavElement className="start">제휴 및 마케팅 문의</NavElement>
          <NavElement>개인정보처리방침</NavElement>
          <NavElement>이용약관</NavElement>
          <NavElement className="end">피드백</NavElement>
        </NavBar>
      </Wrapper>
    </>
  );
};

export default Footer;

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 238px;
  position: relative;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.img`
  margin-left: 66px;
`;

const NavBar = styled.nav`
  display: flex;
  width: 878px;
  margin-left: 420px;
  .start {
    border-left: none;
  }
  .end {
    border-right: none;
  }
`;

const NavElement = styled.div`
  height: 16px;
  border-left: 1px solid #8b8b8b;
  border-right: 1px solid #8b8b8b;
  font-family: Pretendard;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 16px;
  text-align: center;
  padding: 0px 66px;
  color: #8b8b8b;
  cursor: pointer;
`;
