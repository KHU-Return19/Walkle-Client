import React from "react";
import styled from "styled-components";
import LandingThumb from "../../assets/landing_thumb_03.svg";

const CommunitySlide = () => {
  return (
    <>
      <Background>
        <TextContainer>
          <LabelText>커뮤니티</LabelText>
          <MainText>
            관심사에 대해 가볍게 소통하고{"\n"}필요한 정보를 공유해요
          </MainText>
          <SubText>
            키워드 검색을 통한 관심사 위주의 피드 탐색으로 동네 크리에이터들과
            다양한 이야기를 나눠보세요
          </SubText>
        </TextContainer>
        <LandingThumbImg src={LandingThumb} />
      </Background>
    </>
  );
};

export default CommunitySlide;

const Background = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: auto;
  width: 100vw;
  height: 920px;
  background: #ffffff;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 138px;
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
  width: 403px;
  height: 56px;
  font-weight: normal;
  font-size: 21px;
  line-height: 30px;
  color: #8b8b8b;
`;

const LandingThumbImg = styled.img`
  width: 637px;
`;
