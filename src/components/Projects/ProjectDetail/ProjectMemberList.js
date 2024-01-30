import React from "react";
import styled from "styled-components";
import ProjectMemberCard, { ProjectDirectorCard } from "../ProjectMemberCard";

const ProjectMemberList = ({ members }) => {
  return (
    <>
      <MemberWrapper>
        <ProjectLabelText>참여 멤버</ProjectLabelText>
        <MemberListContainer>
          <ProjectDirectorCard />
          {members &&
            members.map((creator) => (
              <ProjectMemberCard creator={creator} />
            ))}
        </MemberListContainer>
      </MemberWrapper>
    </>
  );
};

export default ProjectMemberList;

const MemberWrapper = styled.div`
  padding-top: 100px;
`;

const ProjectLabelText = styled.div`
  font-family: Pretendard;
  font-size: 16px;
  margin-bottom: 30px;
  color: #313338;
  font-weight: 700;
`;

const MemberListContainer = styled.div`
  display: flex;
`;
