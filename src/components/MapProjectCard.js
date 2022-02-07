import React, { useState } from "react";
import styled from "styled-components";
import CreatorTag from "./CreatorTag";
import { ReactComponent as PlaneIcon } from "../assets/paper_plane.svg";
import { ReactComponent as FlagIcon } from "../assets/bookmark.svg";
import { useRecoilState, useSetRecoilState } from "recoil";
import { selectedObjectState, selectedProjectState } from "../store/state";

export const MapProjectCard = (project) => {
  const [selectedProject, setSelectedProject] =
    useRecoilState(selectedProjectState);
  const setSelectedObject = useSetRecoilState(selectedObjectState);
  const currentProject = project;
  const projectDDay = project.dDay && new Date(project.dDay);
  const dDay = Math.ceil(
    (new Date().getTime() - projectDDay.getTime()) / (1000 * 3600 * 24)
  );
  const handleSelect = (project) => {
    setSelectedProject(project);
    setSelectedObject(project);
  };

  return (
    <>
      <CardSection
        className={
          selectedProject.id === currentProject.id && "selected-project"
        }
        onClick={() => handleSelect(currentProject)}
      >
        <CardContainer>
          <CardInnerContainer>
            <ImageContainer>
              <ProjectImg />
            </ImageContainer>
            <InfoContainer>
              <CardHeader>
                <ProjectName>{project.name}</ProjectName>
                <ProjectDDay>{dDay < 0 ? "D" + dDay : "모집완료"}</ProjectDDay>
              </CardHeader>
              <ProjectIntroText>{project.intro}</ProjectIntroText>
              <TagListContainer>
                {project.tag.map((subject, i) => (
                  <CreatorTag tag={subject} key={i} />
                ))}
              </TagListContainer>
            </InfoContainer>
          </CardInnerContainer>
          <IconContainer>
            <BookmarkIcon />
            <SendIcon />
          </IconContainer>
        </CardContainer>
      </CardSection>
    </>
  );
};

const CardSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 0px 20px;
  border-bottom: 1px solid #f1f1f1;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px 30px;
`;

const CardInnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;

const ImageContainer = styled.div`
  position: relative;
`;

const SeeMoreOutlay = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -10px;
  left: -10px;
  width: 120px;
  height: 120px;
  background: #d2d2d2;
  opacity: 0.7;
  color: #ffffff;
`;

const MoreIcon = styled.span`
  white-space: pre-wrap;
  text-align: center;
  font-size: 60px;
`;

const MoreText = styled.span`
  white-space: pre-wrap;
  text-align: center;
  font-family: Pretendard;
`;

const ProjectImg = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 6px;
  background: #f1f1f1;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  margin: 0px 0px 0px 18px;
`;
const CardHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
`;

const ProjectName = styled.span`
  color: #313338;
  font-size: 18px;
  font-weight: bold;
`;

const ProjectDDay = styled.span`
  color: #7054ff;
  font-size: 11px;
  font-weight: 700;
  margin: 0px 6px;
`;

const ProjectIntroText = styled.span`
  color: #8b8b8b;
  font-size: 13px;
  line-height: 19px;
`;
const TagListContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 8px 12px 8px 0px;
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  color: #8b8b8b;

  .Icon {
    flex: none;
    order: 1;
    flex-grow: 0;
    margin: 0px 8px;
  }
`;

const BookmarkIcon = styled(FlagIcon)`
  margin: 0px 11px;
  path {
    fill: #8b8b8b;
  }
`;

const SendIcon = styled(PlaneIcon)`
  margin: 0px 11px;
  path {
    fill: #8b8b8b;
  }
`;
