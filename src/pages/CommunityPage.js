import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SearchBar from "../components/Community/SearchBar";
import Header from "../components/Header";
import { Posts } from "../store/fakePosts";
import PostCard from '../components/Community/PostCard';

const CommunityPage = () => {
  const [searchContent, setSearchContent] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleSearch = (e) => {
    const targetValue = e.currentTarget.value;
    setSearchContent(targetValue);
  };
  return (
    <>
      <Header />
      <Wrapper>
        <PageHeader>
          <SearchBar
            placeholder={"우리동네 이야기를 검색해보세요."}
            value={searchContent}
            handleSearch={handleSearch}
          />
          <WritePostButton onClick={() => setIsModalOpen(true)}>
            <FontAwesomeIcon className="icon" icon="pen" />
          </WritePostButton>
        </PageHeader>
        <PostList>
          {Posts.map(post => <PostCard post={post} />)}
        </PostList>
      </Wrapper>
    </>
  );
};

export default CommunityPage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 100vw;
  height: calc(100vh - 64px);
  background: #fafafa;
`;

const PageHeader = styled.div`
  display: flex;
  align-items: center;
  margin: 56px auto 86px auto;
`;

const WritePostButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  background: #7054ff;
  border-radius: 100px;
  margin-left: 34px;
  cursor: pointer;
  .icon {
    font-size: 20px;
    color: #ffffff;
  }
  :hover {
    opacity: 0.8;
    transition: 0.3s;
  }
`;

const PostList = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
`;
