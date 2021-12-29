import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { Projects } from "../../store/fakeCreators";
import {
  HashtagContainer,
  HashtagContentContainer,
  HashtagText,
} from "../Carousel/TagSlide";

const ProjectCard = ({ imagePreview }) => {
  const project = Projects.find((project) => project.id === 1);
  const projectDDay = project.dDay && new Date(project.dDay);
  const dDay = Math.ceil(
    (new Date().getTime() - projectDDay.getTime()) / (1000 * 3600 * 24)
  );
  return (
    <>
      <CardContainer>
        <CardHeader>
          <DDayIndicator>D{dDay}</DDayIndicator>
          <FontAwesomeIcon className="Icon" icon={faBookmark} />
          <ProjectImage src={imagePreview} />
        </CardHeader>
        <CardBody>
          <DirectorImg />
          <DirectorInfo>{project.director}</DirectorInfo>
          <ProjectTitle>{project.name}</ProjectTitle>
          <ProjectTag>
            <FieldTag></FieldTag>
            <HashTagListContainer>
              {project.tag.map((tag) => (
                <HashtagContainer>
                  <HashtagContentContainer>
                    <HashtagText>{tag}</HashtagText>
                  </HashtagContentContainer>
                </HashtagContainer>
              ))}
            </HashTagListContainer>
          </ProjectTag>
        </CardBody>
      </CardContainer>
    </>
  );
};

export default ProjectCard;

const CardContainer = styled.div`
  padding: 0px 14px 72px 14px;
`;

const CardHeader = styled.div`
  width: 317px;
  height: 220px;
  border-radius: 4px;
  background: #d2d2d2;
  .Icon {
    font-size: 34px;
    color: #7054ff;
  }
`;

const DDayIndicator = styled.div`
  width: 63px;
  height: 31px;
  background: #7054ff;
  color: #ffffff;
  border-radius: 100px;
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  font-family: Pretendard;
  font-size: 15px;
  font-weight: 700;
  line-height: 15px;
`;

const ProjectImage = styled.div``;

const CardBody = styled.div``;

const DirectorImg = styled.div`
  width: 18px;
  height: 18px;
  background: #d2d2d2;
  border-radius: 100px;
`;

const DirectorInfo = styled.div``;

const ProjectTitle = styled.div``;

const ProjectTag = styled.div``;

const FieldTag = styled.div``;

const HashTagListContainer = styled.div`
  display: flex;
  width: 220px;
`;
