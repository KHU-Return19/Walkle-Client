import React from "react";
import styled from "styled-components";
import {
  selectedCreatorState,
  selectedObjectState,
  selectedProjectState,
} from "../../store/state";
import { useSetRecoilState } from "recoil";

const CategorySelector = ({ searchCategory, setSearchCategory }) => {
  const setSelectedCreator = useSetRecoilState(selectedCreatorState);
  const setSelectedProject = useSetRecoilState(selectedProjectState);
  const setSelectedObject = useSetRecoilState(selectedObjectState);
  const handleClick = async (category) => {
    await setSelectedCreator("");
    await setSelectedProject("");
    await setSelectedObject({});
    setSearchCategory(category);
  };
  return (
    <>
      <CategorySelectorContainer>
        <SelectCategory
          className={searchCategory === "creator" && "selected"}
          onClick={() => handleClick("creator")}
        >
          크리에이터
        </SelectCategory>
        <SelectCategory
          className={searchCategory === "project" && "selected"}
          onClick={() => handleClick("project")}
        >
          프로젝트
        </SelectCategory>
      </CategorySelectorContainer>
    </>
  );
};

export default CategorySelector;

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

const SelectCategory = styled.button`
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
  font-size: 15px;
  color: #8b8b8b;
  cursor: pointer;
`;
