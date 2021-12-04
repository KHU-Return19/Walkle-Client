import React from "react";
import styled from "styled-components";

const RegionSelector = ({ selectedRegion }) => {
  return (
    <>
      <RegionSelectorContainer>
        <SelectedRegion>{selectedRegion}</SelectedRegion>
      </RegionSelectorContainer>
    </>
  );
};

export default RegionSelector;

const RegionSelectorContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
`;

const SelectedRegion = styled.div`
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
  font-size: 16px;
`;
