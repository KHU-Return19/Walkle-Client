import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Header from "../components/Header";
import ProjectCard from "../components/Projects/ProjectCard";
import SearchBar from "../components/SearchBar";
import { Projects } from "../store/fakeCreators";
import ProjectFilterSelector from "../components/Projects/ProjectFilterSelector";
import Footer from "../components/Footer";

const ProjectPage = ({ match }) => {
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
            calcDate(project1.dDay) - calcDate(project2.dDay)
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
        <ProjectFilterSelector
          ongoingFilter={ongoingFilter}
          timeFilter={timeFilter}
          setOngoingFilter={setOngoingFilter}
          setTimeFilter={setTimeFilter}
        />
        <ProjectsContainer>
          {filteredProjects.map((project) => (
            <ProjectCard project={project} match={match} />
          ))}
        </ProjectsContainer>
      </PageWrapper>
      <Footer />
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

const ProjectsContainer = styled.div`
  width: 1380px;
  display: flex;
  flex-flow: row wrap;
  margin: auto;
  a {
    text-decoration: none;
  }
`;
