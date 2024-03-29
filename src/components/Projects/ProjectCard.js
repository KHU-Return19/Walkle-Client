import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { ReactComponent as BookmarkIcon } from "../../assets/flag.svg";
import {
  HashtagContainer,
  HashtagContentContainer,
  HashtagText,
} from "../Carousel/TagSlide";
import { bookmarkListState } from "../../store/state";

const ProjectCard = ({ project }) => {
  const [bookmarkList, setBookmarkList] = useRecoilState(bookmarkListState);
  const projectDDay = project.endAt !== null && new Date(project.endAt);
  const dayDiff =
    projectDDay &&
    Math.ceil(
      (new Date(project.startAt).getTime() - projectDDay.getTime()) /
        (1000 * 3600 * 24)
    );
  const isBookmarked =
    bookmarkList.findIndex((bookmark) => bookmark.id === project.id) === -1
      ? false
      : true;
  const dDay = dayDiff && (dayDiff >= 0 ? "모집완료" : "D" + dayDiff);

  const handleClick = () => {
    let newList = bookmarkList;
    isBookmarked
      ? (newList = bookmarkList.filter(
          (bookmark) => bookmark.id !== project.id
        ))
      : (newList = bookmarkList.concat(project));
    setBookmarkList(newList);
  };
  return (
    <>
      <CardContainer>
        <CardHeader>
          {projectDDay && (
            <DDayIndicator className={dDay === "모집완료" && "expired"}>
              {dDay}
            </DDayIndicator>
          )}

          <BookmarkIcon
            className={isBookmarked ? "bookmarked Icon" : "Icon"}
            onClick={handleClick}
          />
          <ProjectImage />
        </CardHeader>
        <Link to={`projects/${project.id}`}>
          <CardBody>
            <DirectorInfo>{project.nickname}</DirectorInfo>
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectTag>
              <HashTagListContainer>
                <FieldTag>#분야태그</FieldTag>
                {project.tags.map((tag) => (
                  <ProjectHashtagContainer>
                    <ProjectHashtagContentContainer>
                      <ProjectHashtagText>{tag.tag}</ProjectHashtagText>
                    </ProjectHashtagContentContainer>
                  </ProjectHashtagContainer>
                ))}
              </HashTagListContainer>
            </ProjectTag>
          </CardBody>
        </Link>
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
    fill: #f1f1f1;
    cursor: pointer;
  }
  .bookmarked {
    fill: #7054ff;
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
