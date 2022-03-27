import React from "react";
import styled from "styled-components";
import { Invites } from "../../store/fakeInvites";
import { ReactComponent as TriangleIcon } from "../../assets/Triangle.svg";
import { Projects } from "../../store/fakeCreators";

const TabSelector = ({ currentTab, setCurrentTab }) => {
  const changeTab = (tabName) => {
    setCurrentTab(tabName);
  };
  return (
    <>
      <ProfileTab>
        <TabElement
          className={currentTab === "project" && "selected"}
          onClick={() => changeTab("project")}
        >
          프로젝트
        </TabElement>
        <TabElement
          className={currentTab === "invite" && "selected"}
          onClick={() => changeTab("invite")}
        >
          초대
        </TabElement>
        {currentTab !== "invite" && Invites.length + Projects.length !== 0 && (
          <Outlay>
            <NewInviteInformator>
              <InvitesText>
                {Invites.length + Projects.length}건의 초대 정보가 있어요
              </InvitesText>
              <SpeechBubbleTail />
            </NewInviteInformator>
          </Outlay>
        )}
        {Invites.length !== 0 && <NewInviteIndicator />}
        <TabElement
          className={currentTab === "bookmark" && "selected"}
          onClick={() => changeTab("bookmark")}
        >
          북마크
        </TabElement>
        <TabElement
          className={currentTab === "community" && "selected"}
          onClick={() => changeTab("community")}
        >
          커뮤니티
        </TabElement>
      </ProfileTab>
    </>
  );
};

export default TabSelector;

const ProfileTab = styled.div`
  display: flex;
  position: relative;
  align-items: flex-start;
  width: 1000px;
  height: 43px;
  box-sizing: border-box;
  margin-top: 54px;
  .selected {
    color: #7054ff;
    border-bottom: 2px solid #7054ff;
    :hover {
      opacity: 1;
    }
  }
`;

const TabElement = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 43px;
  margin-right: 40px;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 21px;
  line-height: 21px;
  cursor: pointer;
  :hover {
    opacity: 0.5;
    transition: 0.3s;
  }
`;

const Outlay = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  top: -71px;
  width: 264px;
`;

const NewInviteInformator = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 39px;
  background: rgba(49, 51, 56, 0.9);
  border-radius: 6px;
  padding: 0px 14px;
  margin: auto;
`;

const InvitesText = styled.div`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 15px;
  text-align: center;
  color: #ffffff;
`;

const SpeechBubbleTail = styled(TriangleIcon)`
  position: absolute;
  top: 38.5px;
`;

const NewInviteIndicator = styled.div`
  position: absolute;
  top: -4px;
  left: 150px;
  width: 4px;
  height: 4px;
  border-radius: 100px;
  background: #f24822;
`;
