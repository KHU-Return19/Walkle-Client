import React from "react";
import styled from "styled-components";

const Comment = ({ comment }) => {
  return (
    <>
      <Wrapper>
        <Header>
          <ProfileImg />
          <Name>{comment.name}</Name>
        </Header>
        <Body>
          <Content>{comment.content}</Content>
          <WriteButton>댓글작성</WriteButton>
        </Body>
      </Wrapper>
    </>
  );
};

export default Comment;

const Wrapper = styled.div`
  margin-top: 34px;
  width: 886px;
`;

const Header = styled.div`
  display: flex;
  height: 16px;
  align-items: center;
`;
const ProfileImg = styled.div`
  width: 18px;
  height: 18px;
  border-radius: 100px;
  background: #d2d2d2;
`;
const Name = styled.div`
  height: 16px;
  margin-left: 5px;
  font-family: Pretendard;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 16px;
  color: #313338;
`;
const Body = styled.div`
  margin: 5px 0px 0px 23px;
`;
const Content = styled.div`
  font-family: Pretendard;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 21px;
`;
const WriteButton = styled(Content)`
  color: #8b8b8b;
  cursor: pointer;
`;