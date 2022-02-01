import React, { useState } from "react";
import styled from "styled-components";
import CreatorCard from "../components/Creators/CreatorCard";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import { Creators } from "../store/fakeCreators";

const CreatorsPage = ({ match }) => {
  const [searchContent, setSearchContent] = useState("");
  const handleSearch = (e) => {
    const targetValue = e.currentTarget.value;
    setSearchContent(targetValue);
  };
  const searchedCreators =
    searchContent === ""
      ? Creators
      : Creators.filter(
          (creator) =>
            creator.name.toLowerCase().includes(searchContent.toLowerCase()) ===
            true
        );
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
          {searchedCreators.map((creator) => (
            <CreatorCard creator={creator} match={match} />
          ))}
        </CreatorsContainer>
      </PageWrapper>
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
