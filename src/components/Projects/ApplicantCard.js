import React from "react";
import styled from "styled-components";

const ApplicantCard = ({ applicant }) => {
  return (
    <>
      <CardWrapper>
        <CardHeader>
          <ProfileImg />
          <CreatorInfo>
            <Name>{applicant.name}</Name>
            <Job>{applicant.job}</Job>
          </CreatorInfo>
        </CardHeader>
        <ButtonContainer>
          <RefuseButton>거절</RefuseButton>
          <ApprovalButton>승인</ApprovalButton>
        </ButtonContainer>
      </CardWrapper>
    </>
  );
};

export default ApplicantCard;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px 20px 20px 20px;
  padding: 20px;
  width: 297px;
  height: 144px;

  background: #ffffff;
  border: 1px solid #f1f1f1;
  box-sizing: border-box;
  border-radius: 8px;
`;

const CardHeader = styled.div`
  display: flex;
  width: 257px;
  height: 40px;
`;

const ProfileImg = styled.div`
  width: 40px;
  height: 40px;
  background: #d2d2d2;
  border: none;
  border-radius: 100px;
`;

const CreatorInfo = styled.div`
  margin-left: 16px;
`;

const Name = styled.div`
  font-family: Pretendard;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 18px;
  color: #313338;
`;

const Job = styled(Name)`
  font-weight: normal;
  font-size: 12px;
  line-height: 12px;
  color: #8b8b8b;

  margin-top: 10px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  margin-top: 20px;
  padding: 0px;
  width: 267px;
  height: 44px;
`;

const RefuseButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  position: static;
  width: 123.5px;
  height: 44px;
  margin: 0px 5px;

  background: #313338;
  border-radius: 100px;

  font-family: Pretendard;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 16px;
  color: #ffffff;
`;

const ApprovalButton = styled(RefuseButton)`
  background: #7054ff;
`;
