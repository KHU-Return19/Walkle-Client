import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import SearchTab from "../components/WalkleMap/SearchTab";
import Modal from "../components/WalkleMap/Modal";
import { useRecoilValue, useRecoilState } from "recoil";
import {
  latitudeState,
  longitudeState,
  selectedObjectState,
  selectedCreatorState,
  selectedProjectState,
} from "../store/state";
import { Creators, Projects } from "../store/fakeCreators";
import mainLogo from "../assets/mainLogo.svg";

const { kakao } = window;

const WalkleMapPage = () => {
  const options = {
    //지도를 생성할 때 필요한 기본 옵션
    center: new window.kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
    level: 3, //지도의 레벨(확대, 축소 정도)
  };

  const container = useRef(null); //지도를 담을 영역의 DOM 레퍼런스
  const lat = useRecoilValue(latitudeState);
  const lon = useRecoilValue(longitudeState);
  const [selectedObject, setSelectedObject] =
    useRecoilState(selectedObjectState);
  const [searchCategory, setSearchCategory] = useState("creator");
  const [selectedCreator, setSelectedCreator] =
    useRecoilState(selectedCreatorState);
  const [selectedProject, setSelectedProject] =
    useRecoilState(selectedProjectState);
  const [searchContent, setSearchContent] = useState("");
  const [searchFilter, setSearchFilter] = useState("recent");

  const renderMarker = (object, type) => {
    var content = document.createElement("div");
    let className = document.createAttribute("classname");
    className.value = "marker";
    content.setAttributeNode(className);
    let image = document.createElement("img");
    let imgClassName = document.createAttribute("classname");
    imgClassName.value =
      selectedCreator === object.id ? "selected" : "markerImg";
    let imgSrc = document.createAttribute("src");
    imgSrc.value = mainLogo;
    image.setAttributeNode(imgClassName);
    image.setAttributeNode(imgSrc);
    // 닫기 이벤트 추가
    content.appendChild(image);
    image.onclick = function () {
      type === "creator"
        ? setSelectedCreator(object)
        : setSelectedProject(object);
      setSelectedObject(object.id);
    };

    // customoverlay 생성, 이때 map을 선언하지 않으면 지도위에 올라가지 않습니다.
    var overlay = new kakao.maps.CustomOverlay({
      position: new kakao.maps.LatLng(object.positionY, object.positionX),
      content: content,
    });

    return overlay;
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
        Creators.forEach((creator) => {
          const marker = renderMarker(creator, "creator");
          marker.setMap(map);
        });
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
        Projects.forEach((project) => {
          const marker = renderMarker(project, "project");
          marker.setMap(map);
        });
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
            setSelectedObject={setSelectedObject}
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
