import React from "react";
import styled from "styled-components";

const ProjectFilterSelector = ({
  ongoingFilter,
  timeFilter,
  setOngoingFilter,
  setTimeFilter,
}) => {
  return (
    <>
      <FilterBox>
        <OnGoingFilter>
          <OnGoingCheckbox
            type="checkbox"
            checked={ongoingFilter}
            onChange={() => setOngoingFilter(!ongoingFilter)}
          />
          <FilterLabelText>진행 중인 프로젝트만 보기</FilterLabelText>
        </OnGoingFilter>
        <TimeFilterSelector>
          <RecentFilter onClick={() => setTimeFilter("recent")}>
            <FilterIndicator
              className={timeFilter === "recent" && "selected-indicator"}
            />
            <SubFilterLabelText
              className={timeFilter === "recent" && "selected-filter"}
            >
              최신순
            </SubFilterLabelText>
          </RecentFilter>
          <NearEndFilter onClick={() => setTimeFilter("nearEnd")}>
            <FilterIndicator
              className={timeFilter === "nearEnd" && "selected-indicator"}
            />
            <SubFilterLabelText
              className={timeFilter === "nearEnd" && "selected-filter"}
            >
              마감임박순
            </SubFilterLabelText>
          </NearEndFilter>
        </TimeFilterSelector>
      </FilterBox>
    </>
  );
};

export default ProjectFilterSelector;

const FilterBox = styled.div`
  width: 1352px;
  display: flex;
  justify-content: space-between;
  margin: 92px auto 28px auto;
`;

const OnGoingFilter = styled.div`
  width: 186px;
  height: 20px;
  display: flex;
`;

const OnGoingCheckbox = styled.input`
  height: 20px;
`;

const FilterLabelText = styled.div`
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 400px;
  padding-left: 8px;
`;

const TimeFilterSelector = styled.div`
  width: 146px;
  height: 16px;
  display: flex;
  cursor: pointer;
  .selected-indicator {
    background: #7054ff;
  }
  .selected-filter {
    color: #7054ff;
  }
`;

const RecentFilter = styled.div`
  display: flex;
`;

const FilterIndicator = styled.div`
  width: 5px;
  height: 5px;
  border-radius: 100px;
  margin-top: 6px;
  background-color: #8b8b8b;
`;

const SubFilterLabelText = styled(FilterLabelText)`
  color: #8b8b8b;
  padding-left: 6px;
`;

const NearEndFilter = styled(RecentFilter)`
  padding-left: 13px;
`;
