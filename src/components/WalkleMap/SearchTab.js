import React from "react";
import styled from "styled-components";
import SearchBar from "../SearchBar";
import RegionSelector from "./RegionSelector";
import CategorySelector from "./CategorySelector";
import FilterSelector from "./FilterSelector";
import { MapCreatorCard } from "../MapCreatorCard";
import { MapProjectCard } from "../MapProjectCard";
import { Creators, Projects } from "../../store/fakeCreators";
import { useRecoilValue } from "recoil";
import { latitudeState, longitudeState, regionState } from "../../store/state";

// 현재 위치에 상관없는 ui 확인을 위해 sortProjects() 함수에 findLocalObject() 함수가 들어가야 할 자리에 Projects가 들어가 있음

const ABOUT3KM_X = 0.0337;
const ABOUT3KM_Y = 0.027;

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
  const calcDate = (projectDDay) => {
    const projectDate = new Date(projectDDay);
    const todayDate = new Date();
    return projectDate.getTime() - todayDate.getTime();
  };
  const findLocalObject = (ObjectList) => {
    return ObjectList.filter(
      (element) =>
        Math.abs(element.positionX - lon) <= ABOUT3KM_X &&
        Math.abs(element.positionY - lat) <= ABOUT3KM_Y
    );
  };
  const sortProjects = (projects) => {
    switch (searchFilter) {
      default:
      case "recent":
        return projects.sort(
          (project1, project2) =>
            calcDate(project1.initialDate) - calcDate(project2.initialDate)
        );
      case "view":
        return projects;
      case "upToDate":
        return projects.sort(
          (project1, project2) =>
            calcDate(project1.dDay) - calcDate(project2.dDay)
        );
    }
  };
  const findSearchedObject = (ObjectList) => {
    const sortedObjectList = ObjectList[0].initialDate
      ? sortProjects(findLocalObject(ObjectList))
      : ObjectList;
    return searchContent === ""
      ? sortProjects(ObjectList)
      : sortProjects(ObjectList).filter(
          (element) =>
            element.name.toLowerCase().includes(searchContent.toLowerCase()) ===
            true
        );
  };

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
              length="360px"
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
            ? findSearchedObject(Creators).map((creator) => (
                <MapCreatorCard {...creator} />
              ))
            : findSearchedObject(Projects).map((project) => (
                <MapProjectCard {...project} />
              ))}
        </CardContainer>
      </SearchTabContainer>
    </>
  );
};

export default SearchTab;

const SearchTabContainer = styled.div`
  float: left;
  height: calc(100vh - 64px);
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
  height: 655px;
`;
