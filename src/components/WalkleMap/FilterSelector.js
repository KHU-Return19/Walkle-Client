import React from "react";
import styled from "styled-components";

const FilterSelector = ({ searchFilter, setSearchFilter }) => {
  return (
    <>
      <FilterSelectorContainer>
        <FilterSelectorBox onClick={() => setSearchFilter("recent")}>
          <FilterIndicator
            className={searchFilter === "recent" && "selected-indicator"}
          />
          <SearchFilter
            className={searchFilter === "recent" && "selected-filter"}
          >
            최신순
          </SearchFilter>
        </FilterSelectorBox>
        <FilterSelectorBox onClick={() => setSearchFilter("view")}>
          <FilterIndicator
            className={searchFilter === "view" && "selected-indicator"}
          />
          <SearchFilter
            className={searchFilter === "view" && "selected-filter"}
          >
            조회순
          </SearchFilter>
        </FilterSelectorBox>
        <FilterSelectorBox onClick={() => setSearchFilter("upToDate")}>
          <FilterIndicator
            className={searchFilter === "upToDate" && "selected-indicator"}
          />
          <SearchFilter
            className={searchFilter === "upToDate" && "selected-filter"}
          >
            마감임박순
          </SearchFilter>
        </FilterSelectorBox>
      </FilterSelectorContainer>
    </>
  );
};

export default FilterSelector;

const FilterSelectorContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  height: 21px;
`;
const FilterSelectorBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 9px 0px 9px;
  height: 21px;
  cursor: pointer;
  .selected-indicator {
    background: #7054ff;
  }
  .selected-filter {
    color: #7054ff;
  }
`;
const FilterIndicator = styled.div`
  width: 5px;
  height: 5px;
  border-radius: 100px;
  background: #8b8b8b;
`;
const SearchFilter = styled.span`
  font-family: Pretendard;
  font-size: 13px;
  font-weight: 500;
  color: #8b8b8b;
  line-height: 21px;
  padding-left: 6px;
`;
