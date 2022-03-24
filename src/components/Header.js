import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as PinIcon } from "../assets/pin.svg";
import { ReactComponent as PlusIcon } from "../assets/plus.svg";
import { useRecoilValue, useRecoilState } from "recoil";
import {
  latitudeState,
  longitudeState,
  userProfileState,
  userIDState,
  regionState,
} from "../store/state";
import axios from "axios";
import MainLogo from "../assets/WalkleLogo.svg";
require("dotenv").config();

const REST_API_KEY = process.env.REACT_APP_REST_API_KEY;

const Header = () => {
  const [locationInfo, setLocationInfo] = useRecoilState(regionState);
  const [latitude, setLatitude] = useRecoilState(latitudeState);
  const [longitude, setLongitude] = useRecoilState(longitudeState);
  const userId = useRecoilValue(userIDState);
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
        <NavBar>
          <Link to="/">
            <Logo src={MainLogo} />
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
        </NavBar>
        <NotNavContainer>
          <Link to="/add_project">
            <AddProjectBtn>
              <PlusIcon fill="white" />
              <BtnText>프로젝트 생성</BtnText>
            </AddProjectBtn>
          </Link>
          <LocationInfoContainer>
            <PinIcon className="location-marker" />
            <LocationText>{locationInfo}</LocationText>
          </LocationInfoContainer>
          {userId._id ? (
            <Link to="/profile">
              <ProfileImgContainer>
                {profileImg && <ProfileImage src={profileImg} />}
              </ProfileImgContainer>
            </Link>
          ) : (
            <Link to="/signin">
              <SignInButton>로그인</SignInButton>
            </Link>
          )}
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
  width: 100vw;
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
`;

const HeaderBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1352px;
`;

const NavBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 532px;
`;

const Logo = styled.img`
  width: 84px;
  height: 32px;
`;

const NotNavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 470px;
`;

const AddProjectBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 100px;
  width: 142px;
  min-width: 140px;
  height: 36px;
  background: #7054ff;
  :hover {
    opacity: 0.8;
    transition: 0.3s;
  }
`;

const BtnText = styled.div`
  font-family: Pretendard;
  font-size: 15px;
  font-weight: 700;
  color: #ffffff;
  padding-left: 9px;
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
    width: 14px;
    padding: 0px 5px;
    fill: #3d2c95;
  }
`;

const LocationText = styled.span`
  font-size: 13px;
  font-weight: 500;
`;

const SignInButton = styled.div`
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  border: none;
  border-radius: 10px;
  margin-right: 1rem;
  width: 80px;
  height: 35px;
  box-sizing: border-box;
  font-family: Pretendard;
  font-size: 15px;
  font-weight: 600;
  color: #ffffff;
  background: #7054ff;
  :hover {
    opacity: 0.8;
    transition: 0.3s;
  }
`;
