import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as PenIcon } from "../../assets/pen.svg";
import { ReactComponent as InstagramIcon } from "../../assets/instagram.svg";
import { ReactComponent as PlusIcon } from "../../assets/plus.svg";
import TabContent from "./TabContent";
import TabSelector from "./TabSelector";

const Profile = () => {
  const [currentTab, setCurrentTab] = useState("project");
  return (
    <>
      <PageUpper>
        <ProfileHeader>
          <ProfileCard>
            <ProfileImg />
            <NameJobContainer>
              <Name>Maebinkim_00</Name>
              <Job>바리스타</Job>
            </NameJobContainer>
            <Link to="/profile_edit">
              <EditIcon fill="#d2d2d2" />
            </Link>
          </ProfileCard>
          <Intro>
            안녕하세요. 고잔동에서 청년예술가들에게 예술공간을 제공하고 있는
            작은 카페 바리스타 입니다. 동네 크리에이터 분들 함께 소통해요!
          </Intro>
        </ProfileHeader>
        <ToolBox>
          <SnsLink>
            <InstagramIcon />
            <SnsId>Maebinkim_00</SnsId>
          </SnsLink>
          <FriendBox>
            <AddFriendButton>
              <PlusIcon fill="#7054ff" />
            </AddFriendButton>
          </FriendBox>
        </ToolBox>
      </PageUpper>
      <PageBody>
        <TabSelector currentTab={currentTab} setCurrentTab={setCurrentTab} />
        <TabContent current={currentTab} />
      </PageBody>
    </>
  );
};

export default Profile;

const PageUpper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 202px;
  padding: 70px 284px 70px 284px;
  background: #ffffff;
`;
const ProfileHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 202px;
`;
const ProfileCard = styled.div`
  display: flex;
  height: 80px;
`;
const ProfileImg = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 100px;
  background: #8b8b8b;
`;
const NameJobContainer = styled.div`
  height: 80px;
  margin: 0px 10px;
`;
const Name = styled.div`
  margin-bottom: 10px;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 38px;
  line-height: 38px;
  color: #313338;
`;
const Job = styled(Name)`
  font-weight: 400;
  font-size: 21px;
  line-height: 21px;
`;

const EditIcon = styled(PenIcon)`
  margin: 6px;
  width: 19px;
  height: 19px;
  fill: #d2d2d2;
  cursor: pointer;
`;

const Intro = styled(Name)`
  width: 392px;
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  color: #8b8b8b;
`;
const ToolBox = styled.div`
  display: flex;
  align-items: center;
  margin-top: 172px;
`;
const SnsLink = styled.div`
  display: flex;
  align-items: center;
  border-right: 2px solid #c4c4c4;
`;
const SnsId = styled(Name)`
  margin: 0px 40px 0px 7px;
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
  color: #8b8b8b;
`;
const FriendBox = styled.div`
  display: flex;
  justify-content: right;
  margin-left: 40px;
`;
const AddFriendButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 100px;
  background: #f5f3ff;
  cursor: pointer;
  :hover {
    opacity: 0.8;
    transition: 0.3s;
  }
`;
const PageBody = styled.div`
  height: 1700px;
  width: 1352px;
  margin: auto;
`;
