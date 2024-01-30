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
  searchContentState,
} from "../store/state";
import { Creators, Projects } from "../store/fakeCreators";
import MapMarker from "../assets/map_marker.svg";
import Footer from "../components/Footer";

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
  const globalSearchContent = useRecoilValue(searchContentState);
  const [searchContent, setSearchContent] = useState(globalSearchContent);
  const [searchFilter, setSearchFilter] = useState("recent");

  const renderProjectMarker = async (project, map) => {
    await map.panTo(
      new window.kakao.maps.LatLng(
        selectedProject.positionY,
        selectedProject.positionX
      )
    );
    project.member.forEach((member) => {
      let polyline = new kakao.maps.Polyline({
        path: [
          new kakao.maps.LatLng(project.positionY, project.positionX),
          new kakao.maps.LatLng(member.positionY, member.positionX),
        ],
        strokeWeight: 2,
        strokeColor: "#7054FF",
        strokeOpacity: 1,
        strokeStyle: "dashed",
      });
      polyline.setMap(map);
    });
  };

  const renderMarker = (object, type) => {
    var content = document.createElement("div");
    let className = document.createAttribute("classname");
    className.value = "marker";
    content.setAttributeNode(className);
    let image = document.createElement("img");
    let imgClassName = document.createAttribute("classname");
    imgClassName.value =
      selectedObject === object.id ? "selected" : "markerImg";
    let imgSrc = document.createAttribute("src");
    imgSrc.value = MapMarker;
    image.setAttributeNode(imgClassName);
    image.setAttributeNode(imgSrc);
    // 닫기 이벤트 추가
    content.appendChild(image);
    image.onclick = function () {
      type === "creator"
        ? setSelectedCreator(object)
        : setSelectedProject(object);
      setSelectedObject(object);
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
          ? renderProjectMarker(selectedProject, map)
          : map.panTo(new window.kakao.maps.LatLng(lat, lon));
        Projects.forEach((project) => {
          const marker = renderMarker(project, "project", map);
          marker.setMap(map);
        });
        break;
    }
    // 현재 위치로 지도 중심 설정
    // 지도를 클릭한 위치에 표출할 마커입니다
    var marker = new kakao.maps.Marker({
      // 지도 중심좌표에 마커를 생성합니다
      position: new window.kakao.maps.LatLng(lat, lon),
    });
    // 지도에 마커를 표시합니다
    marker.setMap(map);
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
          {selectedObject.id && <Modal searchCategory={searchCategory} />}
          <MapContainer className="mapContainer" ref={container}></MapContainer>
        </MapPageContainer>
        <Footer />
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
`;

const MapContainer = styled.div`
  float: left;
  width: 74vw;
  .marker {
    .selected {
      transform: scale(1.5) translateY(-20px);
      transition: 0.1s;
    }
  }
  img {
    transform: translateY(-20px);
    width: 50px;
    height: 50px;
    fill: white;
    :hover {
      transform: scale(1.5) translateY(-20px);
      transition: 0.1s;
    }
  }
`;
