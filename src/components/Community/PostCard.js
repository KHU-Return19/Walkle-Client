import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PostCard = ({ post }) => {
  const [isExtended, setIsExtended] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  return (
    <>
      <Wrapper extended={isExtended}>
        <PostHeader>
          <ProfileImg />
          <CreatorInfo>
            <Name>{post.writer.name}</Name>
            <Job>{post.writer.job}</Job>
          </CreatorInfo>
          <WrittenDate>{post.date}</WrittenDate>
        </PostHeader>
        <PostBody>
          <Content>{post.content}</Content>
          <PostInfo>
            <InfoElement>조회 {post.view}</InfoElement>
            <InfoElement>공감 {post.heart}</InfoElement>
            <InfoElement>댓글 1</InfoElement>
          </PostInfo>
        </PostBody>
        <PostFooter>
          <ButtonSector>
            <WriteButtonContainer onClick={() => setIsExtended(!isExtended)}>
              <FontAwesomeIcon
                className={isExtended ? "Icon Extended" : "Icon"}
                icon={["fas", "comment-alt"]}
              />
              <WriteCommentButton className={isExtended && "Extended"}>
                댓글작성
              </WriteCommentButton>
            </WriteButtonContainer>
            <LikeButtonContainer onClick={() => setIsLiked(!isLiked)}>
              <FontAwesomeIcon
                className={isLiked ? "Icon Liked" : "Icon"}
                icon={["fas", "heart"]}
              />
              <LikeButton className={isLiked && "Liked"}>공감하기</LikeButton>
            </LikeButtonContainer>
          </ButtonSector>
          <CommentList></CommentList>
          <CommentWriter>
            <CommentInput placeholder="댓글을 작성해주세요" />
            <FontAwesomeIcon className="Icon" icon={["fas", "paper-plane"]} />
          </CommentWriter>
        </PostFooter>
      </Wrapper>
    </>
  );
};

export default PostCard;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 1007px;
  max-height: ${(props) => (props.extended ? "1007px" : "363px")};
  transition: 0.5s;
  background: #ffffff;
  margin-bottom: 45px;
  padding: 37.76px;
  border: 1px solid #d2d2d2;
  box-sizing: border-box;
  border-radius: 16px;
  overflow: hidden;
`;
const PostHeader = styled.div`
  display: flex;
  height: 46px;
  padding-left: 4.76px;
  margin-bottom: 34px;
`;
const ProfileImg = styled.div`
  width: 46px;
  height: 46px;
  border-radius: 100px;
  background: #dbdbdb;
`;
const CreatorInfo = styled.div`
  margin: 6px 0px 0px 12px;
`;
const Name = styled.div`
  font-family: Pretendard;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 15px;
  color: #313338;
`;
const Job = styled(Name)`
  font-weight: 500;
  font-size: 11px;
  line-height: 11px;
  color: #8b8b8b;
  margin-top: 8px;
`;
const WrittenDate = styled(Job)`
  margin: 9px 0px 0px 15.41px;
`;
const PostBody = styled.div``;

const Content = styled(Name)`
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  margin-bottom: 35px;
`;
const PostInfo = styled.div`
  display: flex;
`;
const InfoElement = styled(Name)`
  font-weight: 500;
  font-size: 12px;
  line-height: 12px;
  color: #8b8b8b;
  padding-right: 10px;
  margin-bottom: 20px;
`;
const PostFooter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const ButtonSector = styled(PostFooter)`
  flex-direction: row;
  align-items: center;
  width: 937.47px;
  border-top: 1px solid #f1f1f1;
`;
const WriteButtonContainer = styled(PostFooter)`
  flex-direction: row;
  align-items: center;
  width: 468.735px;
  height: 44px;
  margin-top: 9px;
  cursor: pointer;
  .Icon {
    font-size: 15px;
    color: #8b8b8b;
  }
  .Extended {
    color: #7054ff;
  }
`;
const WriteCommentButton = styled(Name)`
  font-weight: 500;
  font-size: 15px;
  line-height: 15px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #8b8b8b;
  padding-left: 8px;
`;
const LikeButtonContainer = styled(WriteButtonContainer)`
  border-left: 1px solid #f1f1f1;
  .Liked {
    color: #7054ff;
  }
`;
const LikeButton = styled(WriteCommentButton)``;
const CommentList = styled.div``;

const CommentWriter = styled.div`
  display: flex;
  align-items: center;
  width: 888px;
  height: 64px;
  background: #ffffff;
  border: 1px solid #d2d2d2;
  box-sizing: border-box;
  border-radius: 30px;
  margin-top: 30px;
  .Icon {
    font-size: 24px;
    color: #d2d2d2;
    padding-left: 10px;
  }
`;

const CommentInput = styled.input`
  padding: 0px 0px 0px 12px;

  width: 800px;
  height: 24px;

  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
  margin: auto 0px;
  padding-left: 19px;
  background: none;
  border: none;
  :focus {
    outline: none;
  }
  font-family: Pretendard;
  font-size: 13px;
  line-height: 21px;
  :placeholder {
    color: #8b8b8b;
  }
`;
