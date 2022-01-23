import React from "react";
import styled from "styled-components";
import { TagText } from "../CreatorTag";

const ProjectModalContent = ({ project }) => {
  return (
    <>
      <MainTextContainer>
        <MainText>{project.name}</MainText>
      </MainTextContainer>
      <SubTextContainer>
        <SubText>{project.director}</SubText>
      </SubTextContainer>
      <TagListContainer>
        {project.tag &&
          project.tag.map((subject) => (
            <ModalTagContainer>
              <TagText>{subject}</TagText>
            </ModalTagContainer>
          ))}
      </TagListContainer>
    </>
  );
};

export default ProjectModalContent;

const MainTextContainer = styled.div`
  position: relative;
  padding-top: 55px;
  text-align: center;
`;
const MainText = styled.span`
  font-family: Pretendard;
  font-weight: 700;
  font-size: 26px;
  color: #313338;
`;

const SubTextContainer = styled.div`
  padding-top: 10px;
  text-align: center;
`;

const SubText = styled(MainText)`
  font-weight: 500;
  font-size: 15px;
  color: #8b8b8b;
`;

const TagListContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px 12px 8px 0px;
`;

const ModalTagContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 12px;

  position: static;
  height: 27px;

  border: 1px solid #d2d2d2;
  box-sizing: border-box;
  border-radius: 100px;

  font-size: 11px;

  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 0px 4px 4px 4px;
`;
