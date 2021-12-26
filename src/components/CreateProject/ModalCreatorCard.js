import React from "react";
import styled from "styled-components";

const ModalCreatorCard = ({creator, currentCreator, setCurrentCreator}) => {
  return (
    <>
    <CardWrapper>
    <CardContainer className={currentCreator === creator && 
        "selected"} onClick={() => setCurrentCreator(creator)}>
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

const CardContent = styled.div`
  width: 170px;
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

const Name = styled.div`
  width: 114px;
  height: 18px;
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
