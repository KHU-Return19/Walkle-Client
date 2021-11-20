import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import StyledButton from "./Button";
import { useRecoilValue } from "recoil";
import { userProfileState } from "../store/state";

const Header = ({ userId }) => {
  const profileImg = useRecoilValue(userProfileState).picture;
  let currentPage = window.location.pathname;
  return (
    <StyledHeader>
      <Link to="/"></Link>
      <nav classname="header-nav">
        <Link
          to="/walklemap"
          className={
            currentPage === "/walklemap" ? "current-page" : "nav-element"
          }
        >
          워클맵
        </Link>
        <Link
          to="/creators"
          className={
            currentPage === "/creators" ? "current-page" : "nav-element"
          }
        >
          크리에이터
        </Link>
        <Link
          to="/projects"
          className={
            currentPage === "/projects" ? "current-page" : "nav-element"
          }
        >
          프로젝트
        </Link>
        <Link
          to="/community"
          className={
            currentPage === "/community" ? "current-page" : "nav-element"
          }
        >
          커뮤니티
        </Link>
      </nav>
      <Link to="/addproject">
        <AddProjectBtn>+ 프로젝트 생성</AddProjectBtn>
      </Link>
      <div className="where-I-am">
        <FontAwesomeIcon icon="map-marker-alt" />
        경기도 안산시 상록구
      </div>
      <Link to="/signin" className={userId && "invisible"}>
        <SignInButton>Sign In</SignInButton>
      </Link>
      <Link to="/profile" className={!userId && "invisible"}>
        <ProfileImgContainer>
          <ProfileImage
            src={profileImg}
            classname={!profileImg && "invisible"}
          />
        </ProfileImgContainer>
      </Link>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap");
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #dbdbdb;
  padding: 1rem 0rem 1rem 0rem;
  width: 100%;
  font-size: 0.9rem;
  font-weight: 500;
  font-family: "Noto Sans KR", sans-serif;
  a {
    text-decoration: none;
  }
  .current-page {
    color: #7054ff;
    padding: 1rem;
  }
  .nav-element {
    color: #313338;
    padding: 1rem;
  }
  .invisible {
    display: none;
  }
`;

const AddProjectBtn = styled.div`
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  border: none;
  border-radius: 100px;
  width: 140px;
  min-width: 140px;
  height: 35px;
  font-size: 0.9rem;
  color: #ffffff;
  background: #7054ff;
  :hover {
    opacity: 0.8;
    transition: 0.3s;
  }
`;

const ProfileImgContainer = styled.div`
  width: 30px;
  height: 30px;
  background: #dbdbdb;
  border-radius: 100px;
  margin-right: 1rem;
`;

const ProfileImage = styled.img``;

const SignInButton = styled(StyledButton)`
  width: 80px;
  border-radius: 10px;
  margin-right: 1rem;
`;
