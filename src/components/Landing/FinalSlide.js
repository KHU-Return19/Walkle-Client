import React from "react";
import styled from "styled-components";

const FinalSlide = () => {
  return (
    <>
      <Background>
        <TextContainer>
          <LabelText>워클과 함께</LabelText>
          <MainText>
            우리 동네의 크리에이터들과 가볍게 소통하고{"\n"}작은 프로젝트를
            시작해보세요
          </MainText>
        </TextContainer>
      </Background>
    </>
  );
};

export default FinalSlide;

const Background = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  width: 100vw;
  height: 665px;
  background: linear-gradient(
    0deg,
    rgba(255, 214, 192, 0.5) 0%,
    rgba(255, 237, 227, 0.5) 0.01%,
    rgba(255, 228, 213, 0.5) 6.25%,
    rgba(255, 255, 255, 0.5) 100%
  );
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LabelText = styled.div`
  font-family: Pretendard;
  font-style: normal;
  font-weight: bold;
  font-size: 42px;
  line-height: 56px;
  text-align: center;
  color: #ff6814;
  margin-bottom: 20px;
`;

const MainText = styled(LabelText)`
  width: 729px;
  height: 122px;
  line-height: 60px;
  color: #313338;
  white-space: pre-wrap;
`;
