import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Header from "../components/Header";
import ProjectCard from "../components/Projects/ProjectCard";
import SearchBar from "../components/SearchBar";
import { Projects } from "../store/fakeCreators";

const ProjectPage = () => {
  const [searchContent, setSearchContent] = useState("");
  const [ongoingFilter, setOngoingFilter] = useState(false);
  const [timeFilter, setTimeFilter] = useState("recent");

  const calcDate = (projectDDay) => {
    const projectDate = new Date(projectDDay);
    const todayDate = new Date();
    return projectDate.getTime() - todayDate.getTime();
  };

  const searchedProjects =
    searchContent === ""
      ? Projects
      : Projects.filter(
          (project) =>
            project.name.toLowerCase().includes(searchContent.toLowerCase()) ===
            true
        );
  const onGoingProjects = ongoingFilter
    ? searchedProjects.filter((project) => calcDate(project.dDay) > 0)
    : searchedProjects;

  const filteredProjects =
    timeFilter === "recent"
      ? onGoingProjects.sort(
          (project1, project2) =>
            calcDate(project1.initialDate) - calcDate(project2.initialDate)
        )
      : onGoingProjects.sort(
          (project1, project2) =>
            calcDate(project2.dDay) - calcDate(project1.dDay)
        );

  const handleSearch = (e) => {
    const targetValue = e.currentTarget.value;
    setSearchContent(targetValue);
  };
  return (
    <>
      <Header />
      <PageWrapper>
        <SearchBarContainer>
          <SearchBar
            value={searchContent}
            placeholder={"프로젝트명 or 태그 검색하기"}
            handleSearch={handleSearch}
          />
        </SearchBarContainer>
        <RecommentContainer />
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
        <ProjectsContainer>
          {filteredProjects.map((project) => (
            <ProjectCard project={project} />
          ))}
        </ProjectsContainer>
      </PageWrapper>
    </>
  );
};

export default ProjectPage;

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const SearchBarContainer = styled.div`
  margin: 56px auto;
`;

const RecommentContainer = styled.div`
  width: 100vw;
  height: 508px;
  background: #c4c4c4;
`;

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

const ProjectsContainer = styled.div`
  width: 1380px;
  display: flex;
  flex-flow: row wrap;
  margin: auto;
`;
