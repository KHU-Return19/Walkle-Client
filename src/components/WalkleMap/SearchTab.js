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
import { regionState } from "../../store/state";

const SearchTab = ({
  searchCategory,
  setSearchCategory,
  searchContent,
  setSearchContent,
  searchFilter,
  setSearchFilter,
}) => {
  const selectedRegion = useRecoilValue(regionState);
  let filteredCreators = searchContent === "" ? Creators : "";
  let filteredProjects = searchContent == "" ? Projects : "";
  const handleSearch = () => {
    if (searchCategory === "creator") {
    }
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
            ? filteredCreators.map((creator) => <MapCreatorCard {...creator} />)
            : filteredProjects.map((project) => (
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
`;
