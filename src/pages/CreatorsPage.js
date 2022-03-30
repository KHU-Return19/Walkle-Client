import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import CreatorCard from "../components/Creators/CreatorCard";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import { Creators } from "../store/fakeCreators";
import { CreatorsState } from "../store/state";

const CreatorsPage = ({ match }) => {
  const [allCreators, setAllCreators] = useRecoilState(CreatorsState);
  const CreatorsRef = useRef();
  CreatorsRef.current = allCreators;
  const [searchContent, setSearchContent] = useState("");
  const handleSearch = (e) => {
    const targetValue = e.currentTarget.value;
    setSearchContent(targetValue);
  };
  const searchedCreators =
    searchContent === ""
      ? allCreators.concat(Creators)
      : allCreators.filter(
          (creator) =>
            creator.name.toLowerCase().includes(searchContent.toLowerCase()) ===
            true
        );
  useEffect(async () => {
    try {
      const { data } = await axios.get(
        `server/api/users/all`
      );
      await setAllCreators(data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      <Header />
      <PageWrapper>
        <SearchBarContainer>
          <SearchBar
            value={searchContent}
            placeholder={"크리에이터명 or 태그 검색하기"}
            handleSearch={handleSearch}
          />
        </SearchBarContainer>
        <CreatorsContainer>
          {searchedCreators.length !== undefined &&
            searchedCreators.map((creator) => (
              <CreatorCard creator={creator} match={match} />
            ))}
        </CreatorsContainer>
      </PageWrapper>
      <Footer />
    </>
  );
};

export default CreatorsPage;

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const SearchBarContainer = styled.div`
  margin: 56px auto;
`;

const CreatorsContainer = styled.div`
  width: 1380px;
  display: flex;
  flex-flow: row wrap;
  margin: auto;
  a {
    text-decoration: none;
  }
`;
