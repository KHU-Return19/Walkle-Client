import React, { useEffect, useRef, useState } from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import styled from "styled-components";
import axios from "axios";
import { ReactComponent as DeleteIcon } from "../../assets/delete.svg";
import {
  latitudeState,
  longitudeState,
  locationListState,
} from "../../store/state";
import {
  HeadText,
  HeadTextContainer,
  InputForm, 
  SlideContainer,
  ButtonContainer,
  PrevSlideButton,
} from "./SetNameJobSlide";
require("dotenv").config();

const { kakao } = window;
const REST_API_KEY = process.env.REACT_APP_REST_API_KEY;

const representText = "대표 위치를\n등록해 보세요";
const addAnotherText = "다른 위치도\n추가할 수 있어요";
const representSubText =
  "운영시설/회사/작업공간 등 크리에이터가 주로 활동하는 지역을 선택해주세요.";
const addAnotherSubText =
  "대표 위치 이외에 관심이 있는 지역을 최대 2개까지 등록해보세요.";

const SetLocationSlide = ({ toggleSlide, handleSubmit }) => {
  const options = {
    //지도를 생성할 때 필요한 기본 옵션
    center: new window.kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
    level: 3, //지도의 레벨(확대, 축소 정도)
  };
  const container = useRef(null); //지도를 담을 영역의 DOM 레퍼런스
  const lat = useRecoilValue(latitudeState);
  const lon = useRecoilValue(longitudeState);
  const [location, setLocation] = useRecoilState(locationListState);
  const [locationList, setLocationList] = useState([]);
  const locationListRef = useRef();
  locationListRef.current = locationList;

  const handleClick = (e) => {
    const targetVal = e.currentTarget.id;
    const newLocationList = locationList.filter(
      (element) => element.address !== targetVal
    );
    setLocationList(newLocationList);
  };

  const addNewLocation = (newLocation, latlng) => {
    const addressList = [...locationListRef.current];
    const addressSet = addressList.filter(
      (address) => address.address !== newLocation
    );
    const result = addressSet.concat({
      address: newLocation,
      location: latlng,
    });
    setLocationList(result);
  };

  const getLocation = async (latlng) => {
    const {
      data: { documents },
    } = await axios.get(
      `https://dapi.kakao.com/v2/local/geo/coord2regioncode.json?x=${latlng.La}&y=${latlng.Ma}`,
      {
        headers: {
          Authorization: `KakaoAK ${REST_API_KEY}`,
        },
      }
    );
    const newLocation = documents[1].address_name;
    addNewLocation(newLocation, latlng);
  };

  useEffect(() => {
    const map = new window.kakao.maps.Map(container.current, options); //지도 생성 및 객체 리턴
    // 현재 위치로 지도 중심 설정
    // 지도를 클릭한 위치에 표출할 마커입니다
    var marker = new kakao.maps.Marker({
      // 지도 중심좌표에 마커를 생성합니다
      position: new window.kakao.maps.LatLng(lat, lon),
    });
    map.panTo(new kakao.maps.LatLng(lat, lon));
    // 지도에 마커를 표시합니다
    marker.setMap(map);
    kakao.maps.event.addListener(map, "click", function (mouseEvent) {
      // 클릭한 위도, 경도 정보를 가져옵니다
      const latlng = mouseEvent.latLng;
      // 마커 위치를 클릭한 위치로 옮깁니다
      marker.setPosition(latlng);
      locationListRef.current.length < 3 && getLocation(latlng, locationList);
    });

    return () => {};
  }, []);

  return (
    <>
      <SlideContainer>
        <HeadTextContainer>
          <HeadText>
            {locationList.length < 1 ? representText : addAnotherText}
          </HeadText>
        </HeadTextContainer>
        <InputForm>
          <InputRowContainer>
            <LocationLabelText>위치등록</LocationLabelText>
            <SubLocationLabelText>
              {locationList.length < 1 ? representSubText : addAnotherSubText}
            </SubLocationLabelText>
          </InputRowContainer>
          <LocationTagContainer>
            {locationList &&
              locationList.map((address, index) => (
                <HashtagContainer className={index === 0 && "main"}>
                  <HashtagContentContainer>
                    <HashtagText className={index === 0 && "mainText"}>
                      {address.address}
                    </HashtagText>
                    <IconContainer onClick={handleClick} id={address.address}>
                      <DeleteIcon
                        className={index === 0 ? "mainIcon" : "Icon"}
                      />
                    </IconContainer>
                  </HashtagContentContainer>
                </HashtagContainer>
              ))}
          </LocationTagContainer>
          <MapContainer className="mapContainer" ref={container}></MapContainer>
        </InputForm>
        <ButtonContainer>
          <PrevSlideButton onClick={toggleSlide("prev")}>
            이전으로
          </PrevSlideButton>
          <RegisterButton type="submit" onClick={() => handleSubmit}>
            프로필 등록
          </RegisterButton>
        </ButtonContainer>
      </SlideContainer>
    </>
  );
};

export default SetLocationSlide;

const InputRowContainer = styled.div`
  margin: 30px 30px 10px 30px;
`;


const LocationLabelText = styled.div`
  margin-bottom: 10px;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 500;
  color: #8b8b8b;
`;

const SubLocationLabelText = styled.div`
  font-family: Pretendard;
  font-size: 13px;
  font-weight: 500;
  line-height: 21px;
  color: #8b8b8b;
  white-space: pre-wrap;
`;

const MapContainer = styled.div`
  display: flex;
  margin: 10px 30px 30px 30px;
  border: none;
  border-radius: 16px;
  width: 400px;
  height: 400px;
  font-size: 1rem;
  color: #313338;
  background: #fafafa;
`;

const LocationTagContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  width: 462px;
  .main {
    border: 1px solid #7054ff;
    margin: 5px 50px;
  }
  .mainText {
    color: #7054ff;
  }
  .mainIcon {
    width: 12px;
    height: 12px;
    margin-left: 10px;
    cursor: pointer;
    color: #7054ff;
    fill: #7054ff;
    stroke: #7054ff;
  }
`;

export const HashtagListContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: left;
  max-width: 460px;
  padding: 0;
`;

export const HashtagContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 16px;

  position: static;
  height: 36px;

  border: 1px solid #d2d2d2;
  box-sizing: border-box;
  border-radius: 100px;

  font-size: 16px;
  line-height: 16px;
  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 5px;
`;

export const HashtagContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const HashtagInputContainer = styled.div`
  display: table-cell;
  vertical-align: middle;
  margin: 0.4rem auto;
  margin-top: 16px;
  padding-left: 1.5rem;
  border: none;
  border-radius: 100px;
  width: 400px;
  height: 50px;
  font-size: 1rem;
  color: #313338;
  background: #fafafa;
`;

export const HashtagText = styled.span`
  font-family: Pretendard;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  color: #8b8b8b;
`;

export const IconContainer = styled.div`
  background: none;
  line-height: 9px;
  .Icon {
    width: 12px;
    height: 12px;
    fill: #8b8b8b;
    stroke: #8b8b8b;
    margin-left: 10px;
    cursor: pointer;
  }
`;

const RegisterButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 100px;
  width: 142px;
  height: 50px;
  margin: 40px 10px 10px 10px;
  box-sizing: border-box;
  font-family: Pretendard;
  font-size: 18px;
  font-weight: 600;
  color: #ffffff;
  background: #7054ff;
  :hover {
    opacity: 0.8;
    transition: 0.3s;
  }
`;
