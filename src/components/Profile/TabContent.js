import React, { useState } from "react";
import styled from "styled-components";
import { Projects } from "../../store/fakeCreators";
import ProjectCard from "../Projects/ProjectCard";
import { bookmarkListState } from "../../store/state";
import { useRecoilValue } from "recoil";
import { Posts } from "../../store/fakePosts";
import ModalCommunityCard from "../WalkleMap/ModalCommunityCard";
import SendedInviteCard from "./SendedInviteCard";
import ReceivedInviteCard from "./ReceivedInviteCard";
import { Invites } from "../../store/fakeInvites";

const TabContent = ({ current }) => {
  const bookmarkList = useRecoilValue(bookmarkListState);
  const [inviteList, setInviteList] = useState(Invites);
  const generateContent = (current) => {
    switch (current) {
      case "project":
        return (
          <>
            <RowHeader>
              <LabelText>내가 만든 프로젝트</LabelText>
            </RowHeader>
            <ProjectsList>
              {Projects.map((project) => (
                <ProjectCard project={project} />
              ))}
            </ProjectsList>
            <RowHeader>
              <LabelText>내가 참여한 프로젝트</LabelText>
            </RowHeader>
            <ProjectsList>
              {Projects.map((project) => (
                <ProjectCard project={project} />
              ))}
            </ProjectsList>
          </>
        );
      case "invite":
        return (
          <>
            <RowHeader>
              <LabelText>보낸 초대</LabelText>
              <InviteCounter>{inviteList.length}</InviteCounter>
            </RowHeader>
            <InviteList>
              {inviteList.map((invite) => (
                <SendedInviteCard invite={invite} />
              ))}
            </InviteList>
            <RowHeader>
              <LabelText>받은 초대</LabelText>
              <InviteCounter>{Projects.length}</InviteCounter>
            </RowHeader>
            <ReceivedInviteList>
              {Projects.map((project) => (
                <ReceivedInviteCard project={project} />
              ))}
            </ReceivedInviteList>
          </>
        );
      case "bookmark":
        return (
          <>
            <RowHeader>
              <LabelText>Bookmarked Projects</LabelText>
            </RowHeader>
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
            <RowHeader>
              <LabelText>My Community</LabelText>
            </RowHeader>
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
  font-family: "Pretendard";
  font-weight: 700;
  font-size: 21px;
  line-height: 21px;
`;

const ProjectsList = styled.div`
  width: 1352px;
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

const RowHeader = styled.div`
  display: flex;
  margin: 70px 0px 20px 0px;
`;

const InviteCounter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 19px;
  height: 18px;
  border-radius: 100px;
  background: #ff6814;
  font-family: "Pretendard";
  font-weight: 400;
  font-size: 11px;
  line-height: 11px;
  color: #ffffff;
  margin: 2px 0px 0px 10px;
`;

const InviteList = styled.div`
  display: flex;
  width: 1352px;
  height: 200px;
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

const ReceivedInviteList = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1352px;
  height: 380px;
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
