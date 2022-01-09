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

const ProjectCard = ({ project }) => {
  //const project = Projects.find((project) => project.id === 8);
  const projectDDay = project.dDay && new Date(project.dDay);
  const dayDiff = Math.ceil(
    (new Date().getTime() - projectDDay.getTime()) / (1000 * 3600 * 24)
  );
  const dDay = dayDiff >= 0 ? "모집완료" : "D" + dayDiff;
  return (
    <>
      <CardContainer>
        <CardHeader>
          <DDayIndicator className={dDay === "모집완료" && "expired"}>
            {dDay}
          </DDayIndicator>
          <FontAwesomeIcon className="Icon" icon={faBookmark} />
          <ProjectImage />
        </CardHeader>
        <CardBody>
          <DirectorInfo>{project.director}</DirectorInfo>
          <ProjectTitle>{project.name}</ProjectTitle>
          <ProjectTag>
            <HashTagListContainer>
              <FieldTag>#분야태그</FieldTag>
              {project.tag.map((tag) => (
                <ProjectHashtagContainer>
                  <ProjectHashtagContentContainer>
                    <ProjectHashtagText>{tag}</ProjectHashtagText>
                  </ProjectHashtagContentContainer>
                </ProjectHashtagContainer>
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
  position: relative;
  width: 317px;
  height: 220px;
  border-radius: 4px;
  background: #d2d2d2;
  .Icon {
    position: absolute;
    left: 273px;
    top: -4px;
    font-size: 34px;
    color: #7054ff;
  }
  .expired {
    width: 80px;
    height: 31px;
    background: #313338;
    color: #ffffff;
  }
`;

const DDayIndicator = styled.div`
  width: 63px;
  height: 31px;
  position: absolute;
  left: 16px;
  top: 16px;
  background: #7054ff;
  color: #ffffff;
  border-radius: 100px;
  text-align: center;
  font-family: Pretendard;
  font-size: 15px;
  font-weight: 700;
  line-height: 31px;
`;

const ProjectImage = styled.div``;

const CardBody = styled.div``;

const DirectorInfo = styled.div`
  padding-top: 19px;
  font-family: Pretendard;
  font-size: 12px;
  font-weight: 500;
  line-height: 12px;
  color: #313338;
`;

const ProjectTitle = styled(DirectorInfo)`
  padding-top: 13px;
  font-size: 21px;
  font-weight: 700;
  line-height: 21px;
`;

const ProjectTag = styled.div``;

const FieldTag = styled(HashtagContainer)`
  height: 27px;
  border: none;
  padding: 0;
  font-family: Pretendard;
  font-size: 11px;
  font-weight: 700;
  line-height: 27px;
  color: #313338;
`;

const HashTagListContainer = styled.div`
  display: flex;
  width: 220px;
`;

const ProjectHashtagContainer = styled(HashtagContainer)`
  height: 27px;
  padding: 8px 12px;
`;

const ProjectHashtagContentContainer = styled(HashtagContentContainer)``;

const ProjectHashtagText = styled(HashtagText)`
  color: #8b8b8b;
  font-size: 11px;
  line-height: 11px;
`;
