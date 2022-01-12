import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import { searchContentState } from "../store/state";

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
        <SearchBar
          length={"494px"}
          placeholder={"우리동네 크리에이터 검색하기"}
          value={searchContent}
          handleSearch={handleSearch}
          history={history}
        />
      </Wrapper>
    </>
  );
};

export default LandingPage;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  width: 100vw;
  height: calc(100vh - 64px);
  background: #d2d2d2;
`;
