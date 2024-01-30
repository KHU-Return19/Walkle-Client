import React, { useState } from "react";
import styled from "styled-components";
import { Projects } from "../../store/fakeCreators";
import { Posts } from "../../store/fakePosts";
import { TagText } from "../CreatorTag";
import ProjectCard from "../Projects/ProjectCard";
import ModalCommunityCard from "./ModalCommunityCard";
import { ReactComponent as PlaneIcon } from "../../assets/paper_plane.svg";
import { ReactComponent as PlusIcon } from "../../assets/plus.svg";
import { ReactComponent as InstagramIcon } from "../../assets/instagram.svg";

const CreatorModalContent = ({ creator }) => {
  const [tabCategory, setTabCategory] = useState("project");
  return (
    <>
      <MainTextContainer>
        <ProfileImg />
        <MainText>{creator.name}</MainText>
      </MainTextContainer>
      <SubTextContainer>
        <SubText>{creator.job}</SubText>
      </SubTextContainer>
      <TagListContainer>
        {creator.tag &&
          creator.tag.map((subject) => (
            <ModalTagContainer>
              <TagText>{subject}</TagText>
            </ModalTagContainer>
          ))}
      </TagListContainer>
      <IntroContainer>
        <SubText>{creator.intro}</SubText>
      </IntroContainer>
      <SnsLinkContainer>
        <InstagramIcon className="sns-icon" />
        <SubText>InstagramID</SubText>
      </SnsLinkContainer>
      <ButtonContainer>
        <FollowButton>
          <FollowIcon />
          팔로우하기
        </FollowButton>
        <ChattingButton>
          <SendIcon className="icon" />
          채팅하기
        </ChattingButton>
      </ButtonContainer>
      <TabContainer>
        <Tab
          className={tabCategory === "project" && "selected"}
          onClick={() => setTabCategory("project")}
        >
          project
        </Tab>
        <Tab
          className={tabCategory === "community" && "selected"}
          onClick={() => setTabCategory("community")}
        >
          community
        </Tab>
      </TabContainer>
      {tabCategory === "project" && (
        <ProjectList>
          {Projects.map((project) => (
            <ProjectCard project={project} />
          ))}
        </ProjectList>
      )}
      {tabCategory === "community" && (
        <PostList>
          {Posts.map((post) => (
            <ModalCommunityCard post={post} width="434px" />
          ))}
        </PostList>
      )}
    </>
  );
};

export default CreatorModalContent;

const ProfileImg = styled.div`
  position: absolute;
  left: 216px;
  top: -40px;
  width: 70px;
  height: 70px;
  margin-bottom: 25px;
  background: #c4c4c4;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
  border-radius: 6px;
`;

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
  padding: 20px 12px 10px 0px;
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

const IntroContainer = styled(SubTextContainer)`
  padding: 10px 0px;
`;

const SnsLinkContainer = styled(SubTextContainer)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 0px;
  .sns-icon {
    padding-right: 7px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 10px 0px;
`;

const FollowIcon = styled(PlusIcon)`
  padding-right: 10px;
  fill: white;
`;

const FollowButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: #313338;
  border-radius: 100px;
  margin: 0px 13px;
  cursor: pointer;

  font-family: Pretendard;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 16px;
  color: #ffffff;
  width: 187.5px;
  height: 50px;

  :hover {
    opacity: 0.8;
    transition: 0.5s;
  }
`;

const ChattingButton = styled(FollowButton)`
  background: #7054ff;
`;

const SendIcon = styled(PlaneIcon)`
  width: 16.75px;
  padding-right: 10px;
  path {
    fill: #ffffff;
  }
`;

const TabContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0px;
  padding: 0px;

  width: 500px;
  height: 27px;
  .selected {
    border-bottom: 2px solid #7054ff;
    color: #7054ff;
  }
`;

const Tab = styled.div`
  display: flex;
  align-items: top;
  justify-content: center;
  margin: 0px 6px;
  width: 242px;
  height: 27px;
  box-sizing: border-box;

  font-family: Pretendard;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 15px;
  cursor: pointer;
`;

const ProjectList = styled.div`
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  a {
    text-decoration: none;
  }
`;

const PostList = styled(ProjectList)``;
