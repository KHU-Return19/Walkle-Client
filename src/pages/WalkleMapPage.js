import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import SearchTab from "../components/WalkleMap/SearchTab";
import Modal from "../components/WalkleMap/Modal";
import { useRecoilValue } from "recoil";
import {
  latitudeState,
  longitudeState,
  selectedCreatorState,
  selectedProjectState,
} from "../store/state";
import { Creators } from "../store/fakeCreators";
import mainLogo from "../assets/mainLogo.svg";

const { kakao } = window;

const options = {
  //지도를 생성할 때 필요한 기본 옵션
  center: new window.kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
  level: 3, //지도의 레벨(확대, 축소 정도)
};

const WalkleMapPage = () => {
  const container = useRef(null); //지도를 담을 영역의 DOM 레퍼런스
  const lat = useRecoilValue(latitudeState);
  const lon = useRecoilValue(longitudeState);
  const [selectedObject, setSelectedObject] = useState(0);
  const [searchCategory, setSearchCategory] = useState("creator");
  const selectedCreator = useRecoilValue(selectedCreatorState);
  const selectedProject = useRecoilValue(selectedProjectState);
  const [searchContent, setSearchContent] = useState("");
  const [searchFilter, setSearchFilter] = useState("recent");

  const renderMarker = (creator) => {
    const overlay = new kakao.maps.CustomOverlay();
    const content = document.createElement("div");

    content.innerHTML = `<div className="marker" >
    <img
      className=${selectedObject === creator.id ? "selected" : "markerImg"}
      id=${creator.id}
      alt="marker"
      src=${mainLogo}
      onClick="${() => handleClick(creator.id)}"
    />
  </div>`;
    overlay.setContent(content);
    overlay.setPosition(
      new kakao.maps.LatLng(creator.positionY, creator.positionX)
    );
    return overlay;
  };

  const handleClick = (id) => {
    setSelectedObject(id);
  };

  useEffect(() => {
    const map = new window.kakao.maps.Map(container.current, options); //지도 생성 및 객체 리턴
    switch (searchCategory) {
      default:
        map.panTo(new window.kakao.maps.LatLng(lat, lon));
        break;
      case "creator":
        selectedCreator.id
          ? map.panTo(
              new window.kakao.maps.LatLng(
                selectedCreator.positionY,
                selectedCreator.positionX
              )
            )
          : map.panTo(new window.kakao.maps.LatLng(lat, lon));
        break;
      case "project":
        selectedProject.id
          ? map.panTo(
              new window.kakao.maps.LatLng(
                selectedProject.positionY,
                selectedProject.positionX
              )
            )
          : map.panTo(new window.kakao.maps.LatLng(lat, lon));
        break;
    }
    // 현재 위치로 지도 중심 설정
    // 지도를 클릭한 위치에 표출할 마커입니다
    var marker = new kakao.maps.Marker({
      // 지도 중심좌표에 마커를 생성합니다
      position: map.getCenter(),
    });
    // 지도에 마커를 표시합니다
    marker.setMap(map);
    // 지도에 클릭 이벤트를 등록합니다
    // 지도를 클릭하면 마지막 파라미터로 넘어온 함수를 호출합니다
    kakao.maps.event.addListener(map, "click", function (mouseEvent) {
      // 클릭한 위도, 경도 정보를 가져옵니다
      var latlng = mouseEvent.latLng;

      // 마커 위치를 클릭한 위치로 옮깁니다
      marker.setPosition(latlng);
    });
    Creators.forEach((creator) => {
      const marker = renderMarker(creator);
      marker.setMap(map);
    });
    return () => {};
  }, [selectedCreator, selectedProject]);

  return (
    <>
      <PageContainer>
        <Header />
        <MapPageContainer>
          <SearchTab
            searchCategory={searchCategory}
            setSearchCategory={setSearchCategory}
            searchContent={searchContent}
            setSearchContent={setSearchContent}
            searchFilter={searchFilter}
            setSearchFilter={setSearchFilter}
          />
          <Modal searchCategory={searchCategory} />
          <MapContainer className="mapContainer" ref={container}></MapContainer>
        </MapPageContainer>
      </PageContainer>
    </>
  );
};

export default WalkleMapPage;

const PageContainer = styled.div`
  width: 100vw;
  max-height: 100vh;
  @import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css");
  font-family: -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo",
    Pretendard, Roboto, "Noto Sans KR", "Segoe UI", "Malgun Gothic", sans-serif;
`;

const MapPageContainer = styled.div`
  display: flex;
  .invisible {
    display: none;
  }
`;

const MapContainer = styled.div`
  float: left;
  width: 74vw;
  .marker {
    :hover {
      color: #ffffff;
    }
  }
  img {
    width: 50px;
    height: 50px;
    fill: white;
    :hover {
      transform: scale(1.5);
      transition: 0.1s;
      filter: invert(34%) sepia(56%) saturate(4881%) hue-rotate(238deg)
        brightness(104%) contrast(102%);
    }
  }
  .marker > .selected {
    transform: scale(1.5);
    filter: invert(34%) sepia(56%) saturate(4881%) brightness(104%)
      contrast(102%);
  }
`;
