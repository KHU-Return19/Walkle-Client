import React, { useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import ApplicantList from "../components/Projects/ProjectDetail/ApplicantList";
import ProjectTitle from "../components/Projects/ProjectDetail/ProjectTitle";
import ProjectTagList from "../components/Projects/ProjectDetail/ProjectTagList";
import ProjectMemberList from "../components/Projects/ProjectDetail/ProjectMemberList";
import RecruitmentPeriod from "../components/Projects/ProjectDetail/RecruitmentPeriod";
import ProjectIntroduce from "../components/Projects/ProjectDetail/ProjectIntroduce";
import ButtonContainer from "../components/Projects/ProjectDetail/ButtonContainer";
import Footer from "../components/Footer";
import { ProjectsState } from "../store/state";
import { useRecoilValue } from "recoil";

const ProjectDetailPage = ({ match, history }) => {
  const Projects = useRecoilValue(ProjectsState);
  const [devIsManager, setDevIsManager] = useState(false);
  const project = Projects.find(
    (project) => String(project.id) === match.params.id
  );
  return (
    <>
      <Header />
      <CoverImageContainer>
        {project.image && <CoverImage />}
      </CoverImageContainer>
      {devIsManager && <ApplicantList applicants={project.applicants} />}
      <ProjectProfileContainer>
        <ProjectTitle
          title={project.title}
          isManager={devIsManager}
          setIsManager={setDevIsManager}
        />
        <ProjectTagList tags={project.tags} />
        <ProjectMemberList members={project.members} />
        <RecruitmentPeriod start={project.startAt} end={project.endAt} />
        <ProjectIntroduce simple={project.description} detailed={project.content}/>
        <ButtonContainer
          history={history}
          id={project.id}
          isManager={devIsManager}
        />
      </ProjectProfileContainer>
      <Footer />
    </>
  );
};

export default ProjectDetailPage;

const ProjectProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 931px;
  margin: auto;
`;

const CoverImageContainer = styled.div`
  width: 100vw;
  height: 360px;
  background: #f1f1f1;
`;

const CoverImage = styled.img`
  width: 100vw;
  height: 300px;
  object-fit: contain;
  border: none;
`;
