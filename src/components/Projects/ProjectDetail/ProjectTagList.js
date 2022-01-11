import React from "react";
import styled from "styled-components";

const ProjectTagList = ({ project }) => {
  return (
    <>
      <HashtagListContainer>
        {project.tag &&
          project.tag.map((tag) => (
            <>
              <ProjectHashtagContainer>
                <HashtagContentContainer>
                  <HashtagText>{tag}</HashtagText>
                  <IconContainer id={tag}></IconContainer>
                </HashtagContentContainer>
              </ProjectHashtagContainer>
            </>
          ))}
      </HashtagListContainer>
    </>
  );
};

export default ProjectTagList;

export const HashtagListContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: left;
  max-width: 460px;
  padding: 0;
`;

export const HashtagContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  position: static;

  border: 1px solid #d2d2d2;
  box-sizing: border-box;
  border-radius: 100px;

  flex: none;
  order: 1;
  flex-grow: 0;

  height: 36px;
  font-size: 16px;
  line-height: 16px;
  padding: 10px 16px;
  margin: 16px 10px 0px 0px;
`;

const ProjectHashtagContainer = styled(HashtagContainer)`
  height: 36px;
  font-size: 16px;
  line-height: 16px;
  padding: 10px 16px;
  margin: 16px 10px 0px 0px;
  border: 1px solid #8b8b8b;
`;

export const HashtagContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const HashtagText = styled.span`
  font-family: Pretendard;
  font-style: normal;
  color: #8b8b8b;

  font-weight: 500;
  line-height: 16px;
`;

export const IconContainer = styled.div`
  background: none;
  line-height: 9px;
  .Icon {
    font-size: 12px;
    color: #8b8b8b;
    margin-left: 10px;
    cursor: pointer;
  }
`;
