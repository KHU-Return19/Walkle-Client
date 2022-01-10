import React from "react";
import styled from "styled-components";

const ProjectMemberCard = ({ creator }) => {
  return (
    <>
      <ParticipantCardContainer>
        <ParticipantCardContent>
          <ImageContainer />
          <InfoContainer>
            <InfoHeader>
              <Name>{creator.name}</Name>
            </InfoHeader>
            <Job>{creator.job}</Job>
          </InfoContainer>
        </ParticipantCardContent>
      </ParticipantCardContainer>
    </>
  );
};

export const ProjectDirectorCard = ({ director }) => {
  return (
    <>
      <DirectorCardContainer>
        <ParticipantCardContent>
          <ImageContainer />
          <InfoContainer>
            <InfoHeader>
              <Name>김수한</Name>
              <DirectorBadge>Director</DirectorBadge>
            </InfoHeader>
            <Job>공간 디자이너</Job>
          </InfoContainer>
        </ParticipantCardContent>
      </DirectorCardContainer>
    </>
  );
};

export default ProjectMemberCard;

const ParticipantCardContainer = styled.div`
  width: 225px;
  height: 80px;
  border: 1px solid #f1f1f1;
  border-radius: 8px;
  margin: 0px 20px 0px 0px;
`;

const ParticipantCardContent = styled.div`
  width: 185px;
  height: 40px;
  display: flex;
  margin: 20px;
`;

const ImageContainer = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 100px;
  background: #d2d2d2;
`;

const InfoContainer = styled.div`
  width: 114px;
  height: 40px;
  display: flex;
  flex-direction: column;
  padding-left: 16px;
`;

const InfoHeader = styled.div`
  width: 129px;
  height: 18px;
  display: flex;
  .Icon {
    font-size: 16px;
    color: #8b8b8b;
    cursor: pointer;
  }
`;

const Name = styled.div`
  width: 103px;
  height: 18px;
  padding-right: 10px;
  font-family: Pretendard;
  font-size: 18px;
  font-weight: 700;
  line-height: 18px;
  color: #313338;
`;

const Job = styled.div`
  width: 114px;
  height: 12px;
  padding-right: 10px;
  font-family: Pretendard;
  font-size: 12px;
  font-weight: 400;
  line-height: 12px;
  color: #8b8b8b;
  padding-top: 10px;
`;

const DirectorCardContainer = styled.div`
  width: 225px;
  height: 80px;
  border: 1px solid #7054ff;
  border-radius: 8px;
  margin: 0px 20px 0px 0px;
`;

const DirectorBadge = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 18px;
  padding: 3px 8px 4px 8px;
  border-radius: 100px;
  border: none;
  font-family: Pretendard;
  font-size: 11px;
  line-height: 11px;
  font-weight: 400;
  background: #7054ff;
  color: #ffffff;
`;
