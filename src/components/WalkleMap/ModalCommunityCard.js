import React from "react";
import styled from "styled-components";
import moment from "moment";
import { ReactComponent as CommentIcon } from "../../assets/comment.svg";
import { ReactComponent as LikeIcon } from "../../assets/heart.svg";
import { ReactComponent as PinIcon } from "../../assets/pin.svg";

const ModalCommunityCard = ({ post, width }) => {
  return (
    <>
      <CardOutlay width={width}>
        <Date>{moment(post.date, "YYYY-MM-DD").format("YYYY. MM. DD")}</Date>
        <Content>{post.content}</Content>
        <Footer>
          <InfoContainer>
            <Comment>
              <CommentIcon fill="#8b8b8b" />
              <Text>{post.comments && post.comments.length}</Text>
            </Comment>
            <Like>
              <LikeIcon fill="#8b8b8b" />
              <Text>{post.heart}</Text>
            </Like>
          </InfoContainer>
          <GeoInfoContainer>
            <PinIcon className="Icon" />
            <Text>{post.location}</Text>
          </GeoInfoContainer>
        </Footer>
      </CardOutlay>
    </>
  );
};

export default ModalCommunityCard;

const CardOutlay = styled.div`
  display: flex;
  flex-direction: column;
  width: ${(props) => props.width};
  height: 220px;
  border: 1px solid #d2d2d2;
  box-sizing: border-box;
  border-radius: 12px;
  margin: 0px 14px 28px 14px;
  padding: 26px 26px 20px 26px;
`;

const Date = styled.div`
  font-family: Pretendard;
  font-style: normal;
  font-weight: bold;
  font-size: 21px;
  line-height: 21px;
  padding-bottom: 15px;
`;

const Content = styled(Date)`
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  margin-bottom: 39px;
  width: 265px;
  font-weight: normal;
  font-size: 16px;
  line-height: 28px;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const InfoContainer = styled.div`
  display: flex;
`;

const Text = styled.div`
  font-family: Pretendard;
  font-style: normal;
  font-weight: normal;
  line-height: 15px;
  color: #8b8b8b;
  margin-left: 5px;
`;

const Comment = styled.div`
  display: flex;
  margin-right: 15px;
  font-size: 15px;
  color: #8b8b8b;
`;

const Like = styled(Comment)``;

const GeoInfoContainer = styled(Comment)`
  font-size: 11px;
  line-height: 11px;
  .Icon {
    line-height: 11px;
    width: 8px;
    height: 11.6px;
    fill: #8b8b8b;
  }
`;
