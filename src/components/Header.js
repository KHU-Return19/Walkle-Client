import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import StyledButton from "./Button";
import { useRecoilValue, useRecoilState } from "recoil";
import {
  latitudeState,
  longitudeState,
  userProfileState,
} from "../store/state";
import axios from "axios";
require("dotenv").config();

const REST_API_KEY = process.env.REACT_APP_REST_API_KEY;

const Header = ({ userId }) => {
  const [locationInfo, setLocationInfo] = useState("");
  const [latitude, setLatitude] = useRecoilState(latitudeState);
  const [longitude, setLongitude] = useRecoilState(longitudeState);
  const profileImg = useRecoilValue(userProfileState).picture;
  let currentPage = window.location.pathname;
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });
  }

  useEffect(() => {
    axios
      .get(
        `https://dapi.kakao.com/v2/local/geo/coord2regioncode.json?x=${longitude}&y=${latitude}`,
        {
          headers: {
            Authorization: `KakaoAK ${REST_API_KEY}`,
          },
        }
      )
      .then((res) => {
        const location = res.data.documents[0];
        setLocationInfo(location.address_name);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [latitude, longitude]);

  return (
    <StyledHeader>
      <Link to="/"></Link>
      <nav className="header-nav">
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
        {locationInfo}
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
