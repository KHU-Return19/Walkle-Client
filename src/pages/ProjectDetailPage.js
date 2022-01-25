import React, { useState } from "react";
import styled from "styled-components";
import { Projects } from "../store/fakeCreators";
import Header from "../components/Header";
import ApplicantList from "../components/Projects/ProjectDetail/ApplicantList";
import ProjectTitle from "../components/Projects/ProjectDetail/ProjectTitle";
import ProjectTagList from "../components/Projects/ProjectDetail/ProjectTagList";
import ProjectMemberList from "../components/Projects/ProjectDetail/ProjectMemberList";
import RecruitmentPeriod from "../components/Projects/ProjectDetail/RecruitmentPeriod";
import ProjectIntroduce from "../components/Projects/ProjectDetail/ProjectIntroduce";
import ButtonContainer from "../components/Projects/ProjectDetail/ButtonContainer";

const ProjectDetailPage = ({ match, history }) => {
  const [isManager, setIsManager] = useState(false);
  const project = Projects.find(
    (project) => String(project.id) === match.params.id
  );
  return (
    <>
      <Header />
      <CoverImageContainer>
        {project.image && <CoverImage />}
      </CoverImageContainer>
      {isManager && <ApplicantList applicants={project.applicants} />}
      <ProjectProfileContainer>
        <ProjectTitle
          project={project}
          isManager={isManager}
          setIsManager={setIsManager}
        />
        <ProjectTagList project={project} />
        <ProjectMemberList project={project} />
        <RecruitmentPeriod project={project} />
        <ProjectIntroduce />
        <ButtonContainer
          history={history}
          id={project.id}
          isManager={isManager}
        />
      </ProjectProfileContainer>
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
