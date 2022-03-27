import React from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { bookmarkListState } from "../../store/state";
import { ReactComponent as BookmarkIcon } from "../../assets/flag.svg";

const ReceivedInviteCard = ({ project }) => {
  const [bookmarkList, setBookmarkList] = useRecoilState(bookmarkListState);
  const projectDDay = project.dDay && new Date(project.dDay);
  const dayDiff =
    projectDDay &&
    Math.ceil(
      (new Date().getTime() - projectDDay.getTime()) / (1000 * 3600 * 24)
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
          <DDayIndicator className={dDay === "모집완료" && "expired"}>
            {dDay}
          </DDayIndicator>
          <BookmarkIcon
            className={isBookmarked ? "bookmarked Icon" : "Icon"}
            onClick={handleClick}
          />
          <ProjectImage />
        </CardHeader>
        <Link to={`projects/${project.id}`}>
          <CardBody>
            <DirectorInfo>{project.director}</DirectorInfo>
            <ProjectTitle>{project.name}</ProjectTitle>
          </CardBody>
        </Link>
        <ButtonContainer>
          <RefuseButton>거절</RefuseButton>
          <ApproveButton>승인</ApproveButton>
        </ButtonContainer>
      </CardContainer>
    </>
  );
};

export default ReceivedInviteCard;

const CardContainer = styled.div`
  padding: 0px 28px 72px 0px;
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

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 317px;
  height: 44px;
  margin: 19px 0px;
`;

const RefuseButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 153.5px;
  height: 44px;
  background: #313338;
  border-radius: 100px;
  font-family: "Pretendard";
  color: #ffffff;
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
  cursor: pointer;
  :hover {
    opacity: 0.8;
    transition: 0.3s;
  }
`;

const ApproveButton = styled(RefuseButton)`
  background: #7054ff;
`;
