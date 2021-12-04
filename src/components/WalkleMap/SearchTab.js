import React from "react";
import styled from "styled-components";
import SearchBar from "../SearchBar";
import { MapCreatorCard } from "../CreatorCard";
import { Creators } from "../../store/fakeCreators";
import { useRecoilValue } from "recoil";
import { regionState } from "../../store/state";

const SearchTab = ({ searchCategory, setSearchCategory }) => {
  const selectedRegion = useRecoilValue(regionState);
  return (
    <>
      <SearchTabContainer>
        <SearchTabHeader>
          <SearchBarContainer>
            <SearchBar length="short" className="searchBar" />
          </SearchBarContainer>
          <RegionSelectorContainer>
            <RegionSelector>{selectedRegion}</RegionSelector>
          </RegionSelectorContainer>
        </SearchTabHeader>
        <CategorySelectorContainer>
          <CategorySelector
            className={searchCategory === "creator" && "selected"}
            onClick={() => setSearchCategory("creator")}
          >
            크리에이터
          </CategorySelector>
          <CategorySelector
            className={searchCategory === "project" && "selected"}
            onClick={() => setSearchCategory("project")}
          >
            프로젝트
          </CategorySelector>
        </CategorySelectorContainer>
        <CardContainer className="scroll">
          {searchCategory === "creator" &&
            Creators.map((creator) => <MapCreatorCard {...creator} />)}
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

const RegionSelectorContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
`;

const RegionSelector = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 8px;
  min-width: 165px;
  height: 32px;

  border: 1px solid #7054ff;
  box-sizing: border-box;
  border-radius: 100px;

  color: #7054ff;
  font-family: pretendard;
  font-weight: 400;
  font-size: 14px;
`;

const CategorySelectorContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  margin: 20px 0px;
  margin-left: 2rem;
  background: #f1f1f1;
  border-radius: 100px;
  width: 189px;
  height: 35px;
  left: 30px;
  top: 196px;
  .selected {
    background: #7054ff;
    color: #ffffff;
    font-weight: 600;
  }
`;

const CategorySelector = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;

  position: static;
  width: 101px;
  height: 35px;
  left: 0px;
  top: 0px;
  border-radius: 100px;
  border: none;

  font-family: Pretendard;
  font-weight: 400;
  font-size: 14px;

  cursor: pointer;
`;

const CardContainer = styled.div`
  .selected-creator {
    background: #f5f3ff;
  }
`;
