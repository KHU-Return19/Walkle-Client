import React from "react";
import styled from "styled-components";
import { Projects } from "../../store/fakeCreators";
import ProjectCard from "../Projects/ProjectCard";
import { bookmarkListState } from "../../store/state";
import { useRecoilValue } from "recoil";
import { Posts } from "../../store/fakePosts";
import ModalCommunityCard from "../WalkleMap/ModalCommunityCard";

const TabContent = ({ current }) => {
  const bookmarkList = useRecoilValue(bookmarkListState);
  const generateContent = (current) => {
    switch (current) {
      case "project":
        return (
          <>
            <LabelText>내가 만든 프로젝트</LabelText>
            <ProjectsList>
              {Projects.map((project) => (
                <ProjectCard project={project} />
              ))}
            </ProjectsList>
            <LabelText>내가 참여한 프로젝트</LabelText>
            <ProjectsList>
              {Projects.map((project) => (
                <ProjectCard project={project} />
              ))}
            </ProjectsList>
          </>
        );
      case "invite":
        return <>
            <LabelText>보낸 초대</LabelText>
        </>;
      case "bookmark":
        return (
          <>
            <LabelText>Bookmarked Projects</LabelText>
            <ProjectsList>
              {bookmarkList.map((project) => (
                <>
                  <ProjectCard project={project} />
                </>
              ))}
            </ProjectsList>
          </>
        );
      case "community":
        return (
          <>
            <LabelText>My Community</LabelText>
            <PostsList>
              {Posts.map((post) => (
                <ModalCommunityCard post={post} width="317px" />
              ))}
            </PostsList>
          </>
        );
    }
  };
  return <>{generateContent(current)}</>;
};

export default TabContent;

const LabelText = styled.div`
  margin: 70px 0px 20px 0px;
  font-family: "Pretendard";
  font-weight: 700;
  font-size: 21px;
  line-height: 21px;
`;

const ProjectsList = styled.div`
  width: 13520px;
  height: 350px;
  padding-top: 4px;
  display: flex;
  overflow-y: overlay;

  ::-webkit-scrollbar {
    height: 6px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #8b8b8b;
    border-radius: 100px;
  }
  ::-webkit-scrollbar-track {
    background-color: #f1f1f1;
  }
  a {
    text-decoration: none;
  }
`;

const PostsList = styled.div`
  width: 1352px;
  height: 260px;
  padding-top: 4px;
  display: flex;
  overflow-y: overlay;

  ::-webkit-scrollbar {
    height: 6px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #8b8b8b;
    border-radius: 100px;
  }
  ::-webkit-scrollbar-track {
    background-color: #f1f1f1;
  }
  a {
    text-decoration: none;
  }
`;
