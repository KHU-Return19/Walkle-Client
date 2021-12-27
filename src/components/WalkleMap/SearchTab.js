import React from "react";
import styled from "styled-components";
import SearchBar from "../SearchBar";
import RegionSelector from "./RegionSelector";
import CategorySelector from "./CategorySelector";
import FilterSelector from "./FilterSelector";
import { MapCreatorCard } from "../CreatorCard";
import { MapProjectCard } from "../ProjectCard";
import { Creators, Projects } from "../../store/fakeCreators";
import { useRecoilValue } from "recoil";
import { latitudeState, longitudeState, regionState } from "../../store/state";

// 현재 위치에 상관없는 ui 확인을 위해 <CardContainer /> 컴포넌트에 filteredCreators, filteredProjects 대신 Creators 와 Projects 원본 사용중. 후에 개발이 완료되면 다시 변경 요망

const SearchTab = ({
  searchCategory,
  setSearchCategory,
  searchContent,
  setSearchContent,
  searchFilter,
  setSearchFilter,
}) => {
  const lat = useRecoilValue(latitudeState);
  const lon = useRecoilValue(longitudeState);
  const selectedRegion = useRecoilValue(regionState);
  const localCreators = Creators.filter(
    (creator) =>
      Math.abs(creator.positionX - lon) <= 0.0337 &&
      Math.abs(creator.positionY - lat) <= 0.027
  );
  const localProjects = Projects.filter(
    (project) =>
      Math.abs(project.positionX - lon) <= 0.0337 &&
      Math.abs(project.positionY - lat) <= 0.027
  );
  let filteredCreators =
    searchContent === ""
      ? localCreators
      : localCreators.filter(
          (creator) =>
            creator.name.toLowerCase().includes(searchContent.toLowerCase()) ===
            true
        );
  let filteredProjects =
    searchContent == ""
      ? localProjects
      : localProjects.filter(
          (project) =>
            project.name.toLowerCase().includes(searchContent.toLowerCase()) ===
            true
        );

  const handleSearch = (event) => {
    const targetVal = event.currentTarget.value;
    setSearchContent(targetVal);
  };
  return (
    <>
      <SearchTabContainer>
        <SearchTabHeader>
          <SearchBarContainer>
            <SearchBar
              length="short"
              placeholder={
                searchCategory === "creator"
                  ? "우리 동네 크리에이터 검색하기"
                  : "프로젝트명 or 태그 검색하기"
              }
              className="searchBar"
              value={searchContent}
              handleSearch={handleSearch}
            />
          </SearchBarContainer>
          <RegionSelector selectedRegion={selectedRegion} />
        </SearchTabHeader>
        <SelectorContainer>
          <CategorySelector
            searchCategory={searchCategory}
            setSearchCategory={setSearchCategory}
          />
          <FilterSelector
            searchCategory={searchCategory}
            searchFilter={searchFilter}
            setSearchFilter={setSearchFilter}
          />
        </SelectorContainer>
        <CardContainer className="scroll">
          {searchCategory === "creator"
            ? Creators.map((creator) => <MapCreatorCard {...creator} />)
            : Projects.map((project) => <MapProjectCard {...project} />)}
        </CardContainer>
      </SearchTabContainer>
    </>
  );
};

export default SearchTab;

const SearchTabContainer = styled.div`
  float: left;
  width: 26vw;
  min-width: 500px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  .searchBar {
    margin-top: 0;
  }
  .scroll {
    overflow-y: scroll;
  }
  .scroll::-webkit-scrollbar {
    width: 6px;
  }
  .scroll::-webkit-scrollbar-thumb {
    background-color: #8b8b8b;
    border-radius: 100px;
  }
  .scroll::-webkit-scrollbar-track {
    background-color: #f1f1f1;
  }
`;

const SearchTabHeader = styled.div`
  width: 470px;
  height: 166px;
  left: 0px;
  padding-left: 30px;

  border-bottom: 1px solid #f1f1f1;
`;

const SearchBarContainer = styled.div`
  padding: 30px 0px 30px 0px;
`;

const SelectorContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-right: 30px;
`;

const CardContainer = styled.div`
  .selected-creator,
  .selected-project {
    background: #f5f3ff;
  }
  height: 60vh;
`;
