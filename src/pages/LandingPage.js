import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import { searchContentState } from "../store/state";
import WalkleLogo from "../assets/walkle_logo_img.svg";
import MolyImg from "../assets/moly_with_hole.svg";
import LandingThumb from "../assets/landing_thumb_01.svg";
import CreatorSlide from "../components/Landing/CreatorSlide";
import CommunitySlide from "../components/Landing/CommunitySlide";
import Footer from "../components/Footer";
import FinalSlide from "../components/Landing/FinalSlide";

const LandingPage = ({ userId }) => {
  const history = useHistory();
  const [searchContent, setSearchContent] = useState("");
  const setGlobalSearchContent = useSetRecoilState(searchContentState);
  const handleSearch = (e) => {
    const targetVal = e.currentTarget.value;
    setSearchContent(targetVal);
  };
  const onCheckEnter = async (e) => {
    if (e.key === "Enter") {
      await setGlobalSearchContent(searchContent);
      history.push("/walklemap");
    }
  };

  return (
    <>
      <Header userId={userId} />
      <Wrapper onKeyPress={onCheckEnter}>
        <TextContainer>
          <HeadText>함께 디깅해요!</HeadText>
          <HeadText>가장 가까운 곳에서 시작되는 크리에이티브</HeadText>
        </TextContainer>
        <SearchBar
          length={"494px"}
          placeholder={"우리동네 크리에이터 검색하기"}
          value={searchContent}
          handleSearch={handleSearch}
          history={history}
        />
        <ImgContainer>
          <BackgroundTextImg src={WalkleLogo} />
          <Moly src={MolyImg} />
        </ImgContainer>
      </Wrapper>
      <SecondSlide>
        <SlideTextContainer>
          <LabelText>워클맵</LabelText>
          <MainText>
            내 주변에서 일어나는{"\n"}크고 작은 창작 활동에 참여해보세요
          </MainText>
          <SubText>
            워클에서는 지도 기반으로 위치한 크리에이터나 프로젝트를 쉽게
            확인하고, 채팅으로 쉽게 연락할 수 있어요
          </SubText>
        </SlideTextContainer>
        <LandingThumbImg src={LandingThumb} />
      </SecondSlide>
      <CreatorSlide />
      <CommunitySlide />
      <FinalSlide />
      <Footer />
    </>
  );
};

export default LandingPage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  width: 100vw;
  height: 1080px;
  background: #ff6814;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 48px;
`;
const HeadText = styled.div`
  font-family: Pretendard;
  font-style: normal;
  font-weight: bold;
  font-size: 38px;
  line-height: 38px;
  text-align: center;
  color: #ffffff;
  margin-bottom: 20px;
`;

const ImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 532px;
  margin-top: 71px;
`;

const BackgroundTextImg = styled.img``;

const Moly = styled.img`
  position: absolute;
  left: 215px;
  top: 79px;
`;

const SecondSlide = styled(Wrapper)`
  height: 920px;
  flex-direction: row;
  background: #ffffff;
`;

const SlideTextContainer = styled(TextContainer)`
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
  width: 481px;
  height: 56px;
  font-weight: normal;
  font-size: 21px;
  line-height: 30px;
  color: #8b8b8b;
`;

const LandingThumbImg = styled.img`
  width: 681px;
`;
