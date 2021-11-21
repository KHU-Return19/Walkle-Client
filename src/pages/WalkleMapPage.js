import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import { useRecoilValue } from "recoil";
import { latitudeState, longitudeState } from "../store/state";
import { Creators } from "../store/fakeCreators";

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

  useEffect(() => {
    const map = new window.kakao.maps.Map(container.current, options); //지도 생성 및 객체 리턴
    const moveLatLon = new window.kakao.maps.LatLng(lat, lon);
    map.panTo(moveLatLon); // 현재 위치로 지도 중심 설정
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
      const marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(creator.positionY, creator.positionX),
      });
      marker.setMap(map);
    });
    return () => {};
  }, []);

  return (
    <>
      <Header />
      <MapPageContainer>
        <SearchContainer>
          <SearchBar length="short" className="searchBar" />
        </SearchContainer>
        <MapContainer className="mapContainer" ref={container}></MapContainer>
      </MapPageContainer>
    </>
  );
};

export default WalkleMapPage;

const MapPageContainer = styled.div`
  display: flex;
`;

const SearchContainer = styled.div`
  float: left;
  width: 26vw;
  .searchBar {
    margin-top: 0;
  }
`;

const MapContainer = styled.div`
  float: left;
  width: 74vw;
  height: 100vw;
`;
