import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import StyledButton from "./Button";
import { useRecoilValue, useRecoilState } from "recoil";
import {
  latitudeState,
  longitudeState,
  userProfileState,
  regionState,
} from "../store/state";
import axios from "axios";
require("dotenv").config();

const REST_API_KEY = process.env.REACT_APP_REST_API_KEY;

const Header = ({ userId }) => {
  const [locationInfo, setLocationInfo] = useRecoilState(regionState);
  const [latitude, setLatitude] = useRecoilState(latitudeState);
  const [longitude, setLongitude] = useRecoilState(longitudeState);
  const profileImg = useRecoilValue(userProfileState).picture;
  let currentPage = window.location.pathname;

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      });
    }
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
      <HeaderBox>
        <nav className="header-nav">
          <Link to="/">
            Walkle
          </Link>
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
        <NotNavContainer>
          <Link to="/add_project">
            <AddProjectBtn>+ 프로젝트 생성</AddProjectBtn>
          </Link>
          <LocationInfoContainer>
            <FontAwesomeIcon
              icon="map-marker-alt"
              className="location-marker"
            />
            <LocationText>{locationInfo}</LocationText>
          </LocationInfoContainer>
          <Link to="/signin" className={userId && "invisible"}>
            <SignInButton>로그인</SignInButton>
          </Link>
          <Link to="/profile" className={!userId && "invisible"}>
            <ProfileImgContainer>
              <ProfileImage
                src={profileImg}
                classname={!profileImg && "invisible"}
              />
            </ProfileImgContainer>
          </Link>
        </NotNavContainer>
      </HeaderBox>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap");
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #dbdbdb;
  width: 100%;
  height: 64px;
  box-sizing: border-box;
  font-size: 15px;
  font-weight: 700;
  font-family: Pretendard;
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

const HeaderBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1352px;
`;

const NotNavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 470px;
`;

const AddProjectBtn = styled.div`
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  border: none;
  border-radius: 100px;
  width: 142px;
  min-width: 140px;
  height: 36px;
  font-size: 15px;
  font-weight: 700;
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

const LocationInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  > .location-marker {
    padding: 0px 5px;
    color: #3d2c95;
  }
`;

const LocationText = styled.span`
  font-size: 13px;
  font-weight: 500;
`;

const SignInButton = styled(StyledButton)`
  width: 80px;
  border-radius: 10px;
  margin-right: 1rem;
  font-family: Pretendard;
  font-size: 15px;
  font-weight: 600;
`;
