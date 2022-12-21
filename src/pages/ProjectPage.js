import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Header from "../components/Header";
import ProjectCard from "../components/Projects/ProjectCard";
import SearchBar from "../components/SearchBar";
import { Projects } from "../store/fakeCreators";
import ProjectFilterSelector from "../components/Projects/ProjectFilterSelector";
import Footer from "../components/Footer";
import { useRecoilState } from "recoil";
import { ProjectsState } from "../store/state";

const ProjectPage = () => {
  const [allProjects, setAllProjects] = useRecoilState(ProjectsState);
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
      ? allProjects
      : allProjects.filter(
          (project) =>
            project.title
              .toLowerCase()
              .includes(searchContent.toLowerCase()) === true
        );
  const onGoingProjects = ongoingFilter
    ? searchedProjects.filter((project) => project.status === 1)
    : searchedProjects;

  const filteredProjects =
    timeFilter === "recent"
      ? [...onGoingProjects].sort(
          (project1, project2) =>
            calcDate(project1.createdAt) - calcDate(project2.createdAt)
        )
      : [...onGoingProjects].sort(
          (project1, project2) =>
            calcDate(project1.endAt) - calcDate(project2.endAt)
        );

  const handleSearch = (e) => {
    const targetValue = e.currentTarget.value;
    setSearchContent(targetValue);
  };

  useEffect(async () => {
    const { data } = await axios.get(`server/api/projects`);
    setAllProjects(data.projects);
  }, []);

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
            <ProjectCard project={project} />
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
