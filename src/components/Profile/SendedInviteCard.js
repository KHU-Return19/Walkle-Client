import React from "react";
import styled from "styled-components";
import { ReactComponent as CloseIcon } from "../../assets/close_gray.svg";
import { ReactComponent as ArrowIcon } from "../../assets/right_arrow.svg";

const waitingText = "승인 대기중";
const approvedText = "승인 완료";
const refusedText = "승인 거절";

const SendedInviteCard = ({ invite }) => {
  return (
    <>
      <CardOutlay>
        <CardHeader>
          <ProjectName>{invite.projectName}</ProjectName>
          <GotoIcon />
        </CardHeader>
        <CardBody>
          <InfoContainer>
            <CancelIcon />
            <ProfileImg />
            <NameJobContainer>
              <Name>{invite.guestName}</Name>
              <Job>{invite.job}</Job>
            </NameJobContainer>
          </InfoContainer>
          <StateButton state={invite.state}>
            {invite.state === "approve"
              ? approvedText
              : invite.state === "refuse"
              ? refusedText
              : waitingText}
          </StateButton>
        </CardBody>
      </CardOutlay>
    </>
  );
};

export default SendedInviteCard;

const CardOutlay = styled.div`
  margin-right: 28px;
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 297px;
`;
const ProjectName = styled.div`
  font-family: "Pretendard";
  font-weight: 700;
  font-size: 18px;
  line-height: 18px;
  color: #313338;
  margin-bottom: 20px;
`;

const GotoIcon = styled(ArrowIcon)`
  cursor: pointer;
`;
const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 297px;
  height: 144px;
  padding: 20px;
  background: #ffffff;
  border: 1px solid #f1f1f1;
  box-sizing: border-box;
  border-radius: 8px;
`;
const InfoContainer = styled.div`
  position: relative;
  display: flex;
  width: 257px;
  height: 40px;
  margin-bottom: 20px;
`;
const CancelIcon = styled(CloseIcon)`
  width: 12px;
  height: 12px;
  position: absolute;
  left: 241px;
  cursor: pointer;
`;
const ProfileImg = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 100px;
  background: #8b8b8b;
`;
const NameJobContainer = styled.div`
  width: 169px;
  height: 40px;
  margin: 0px 16px;
`;
const Name = styled.div`
  font-family: "Pretendard";
  font-weight: 700;
  font-size: 18px;
  line-height: 18px;
`;
const Job = styled(Name)`
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;
  color: #8b8b8b;
  margin-top: 10px;
`;
const StateButton = styled.div`
  display: flex;
  width: 257px;
  height: 44px;
  border-radius: 100px;
  justify-content: center;
  align-items: center;
  font-family: "Pretendard";
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
  background: ${(props) =>
    props.state === "approve"
      ? "#f5f3ff"
      : props.state === "refuse"
      ? "#fff3ed"
      : "#f1f1f1"};
  color: ${(props) =>
    props.state === "approve"
      ? "#7054ff"
      : props.state === "refuse"
      ? "#f24822"
      : "#8b8b8b"};
`;
