import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as WriteIcon } from "../assets/pen.svg";
import SearchBar from "../components/Community/SearchBar";
import Header from "../components/Header";
import { Posts } from "../store/fakePosts";
import PostCard from "../components/Community/PostCard";
import WriteModal from "../components/Community/WriteModal";
import Footer from "../components/Footer";

const CommunityPage = () => {
  const [searchContent, setSearchContent] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [fileName, setFileName] = useState("게시물에 추가");
  const searchedPosts = Posts.filter(
    (post) =>
      post.content.toLowerCase().includes(searchContent.toLowerCase()) === true
  );
  const handleSearch = (e) => {
    const targetValue = e.currentTarget.value;
    setSearchContent(targetValue);
  };
  const handleModalOpen = () => {
    document.body.style.overflow = "hidden";
    setIsModalOpen(true);
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
          <WritePostButton onClick={() => handleModalOpen()}>
            <WriteIcon fill="white" />
          </WritePostButton>
        </PageHeader>
        <PostListOutlay>
          <PostList>
            {searchedPosts.map((post) => (
              <PostCard key={post} post={post} />
            ))}
          </PostList>
        </PostListOutlay>
        {isModalOpen && (
          <WriteModal
            setIsModalOpen={setIsModalOpen}
            name="김수한무거북이"
            fileName={fileName}
          />
        )}
      </Wrapper>
      <Footer />
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
  :hover {
    opacity: 0.8;
    transition: 0.3s;
  }
`;

const PostListOutlay = styled.div`
  margin: auto;
  height: 750px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 6px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #8b8b8b;
    border-radius: 100px;
  }
  ::-webkit-scrollbar-track {
  }
`;

const PostList = styled.div`
  display: flex;
  flex-direction: column;
`;
