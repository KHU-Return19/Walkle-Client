import React from "react";
import styled from "styled-components";
import LandingThumb from "../../assets/landing_thumb_02.svg";

const CreatorSlide = () => {
  return (
    <>
      <Background>
        <LandingThumbImg src={LandingThumb} />
        <TextContainer>
          <LabelText>크리에이터</LabelText>
          <MainText>
            가장 가까이서 연결할 수 있는{"\n"}우리 동네 창작자를 찾아보세요
          </MainText>
          <SubText>
            우리 동네에서 빠르게 소통할 수 있는 예술가부터 소상공인, 나와 비슷한
            크리에이터의 프로필을 볼 수 있어요
          </SubText>
        </TextContainer>
      </Background>
    </>
  );
};

export default CreatorSlide;

const Background = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: auto;
  width: 100vw;
  height: 920px;
  background: #fff3ed;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 138px;
`;

const LabelText = styled.div`
  font-family: Pretendard;
  font-style: normal;
  font-weight: bold;
  font-size: 26px;
  line-height: 26px;
  color: #ff6814;
  margin-bottom: 32px;
`;

const MainText = styled(LabelText)`
  width: 584px;
  height: 122px;
  font-size: 42px;
  line-height: 60px;
  color: #313338;
  margin-bottom: 44px;
  white-space: pre-wrap;
`;

const SubText = styled(LabelText)`
  width: 482px;
  height: 56px;
  font-weight: normal;
  font-size: 21px;
  line-height: 30px;
  color: #8b8b8b;
`;

const LandingThumbImg = styled.img`
  width: 746px;
`;
