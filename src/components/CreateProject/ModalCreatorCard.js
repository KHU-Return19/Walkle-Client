import React from "react";
import styled from "styled-components";
import { ReactComponent as DeleteIcon } from "../../assets/close_gray.svg";

const ModalCreatorCard = ({ creator, currentCreator, setCurrentCreator }) => {
  return (
    <>
      <CardWrapper>
        <CardContainer
          className={currentCreator === creator && "selected"}
          onClick={() => setCurrentCreator(creator)}
        >
          <CardContent>
            <ImageContainer />
            <InfoContainer>
              <Name>{creator.name}</Name>
              <Job>{creator.job}</Job>
            </InfoContainer>
          </CardContent>
        </CardContainer>
      </CardWrapper>
    </>
  );
};

export const ParticipantCard = ({ creator, handleClick }) => {
  return (
    <>
      <ParticipantCardContainer>
        <ParticipantCardContent>
          <ImageContainer />
          <InfoContainer>
            <InfoHeader>
              <Name>{creator.name}</Name>
              <DeleteIcon
                className="Icon"
                onClick={() => handleClick(creator)}
              />
            </InfoHeader>
            <Job>{creator.job}</Job>
          </InfoContainer>
        </ParticipantCardContent>
      </ParticipantCardContainer>
    </>
  );
};

export default ModalCreatorCard;

const CardWrapper = styled.div`
  .selected {
    border: 1px solid #7054ff;
  }
`;

const CardContainer = styled.div`
  width: 208px;
  height: 80px;
  border: 1px solid #f1f1f1;
  border-radius: 8px;
  margin: 20px 10px 0px 10px;
`;

const ParticipantCardContainer = styled.div`
  width: 225px;
  height: 80px;
  border: 1px solid #f1f1f1;
  box-sizing: border-box;
  border-radius: 8px;
  margin: 0px 20px 20px 0px;
`;

const CardContent = styled.div`
  width: 170px;
  height: 40px;
  display: flex;
  margin: 20px;
`;

const ParticipantCardContent = styled(CardContent)`
  width: 185px;
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
    fill: #8b8b8b;
    width: 11px;
    height: 11px;
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

const Job = styled(Name)`
  width: 114px;
  height: 12px;
  font-size: 12px;
  font-weight: 400;
  line-height: 12px;
  color: #8b8b8b;
  padding-top: 10px;
`;
