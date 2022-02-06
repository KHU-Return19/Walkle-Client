import React, { useState } from "react";
import styled from "styled-components";
import CreatorTag from "./CreatorTag";
import { ReactComponent as PlaneIcon } from "../assets/paper_plane.svg";
import { ReactComponent as FlagIcon } from "../assets/bookmark.svg";
import { useRecoilState, useSetRecoilState } from "recoil";
import { selectedCreatorState, selectedObjectState } from "../store/state";

export const MapCreatorCard = (creator) => {
  const [selectedCreator, setSelectedCreator] =
    useRecoilState(selectedCreatorState);
  const [isHover, setIsHover] = useState(false);
  const setSelectedObject = useSetRecoilState(selectedObjectState);
  const currentCreator = creator;
  const handleSelect = (creator) => {
    setSelectedCreator(creator);
    setSelectedObject(creator);
  };
  return (
    <>
      <CardSection
        className={
          selectedCreator.id === currentCreator.id && "selected-creator"
        }
        onMouseOver={() => setIsHover(true)}
        onMouseOut={() => setIsHover(false)}
        onClick={() => handleSelect(currentCreator)}
      >
        <CardContainer>
          <CardInnerContainer>
            <ImageContainer>
              {isHover && (
                <SeeMoreOutlay>
                  <MoreIcon>+</MoreIcon>
                  <MoreText>더보기</MoreText>
                </SeeMoreOutlay>
              )}
              <CreatorImg />
            </ImageContainer>
            <InfoContainer>
              <CardHeader>
                <CreatorName>{creator.name}</CreatorName>
              </CardHeader>
              <CreatorIntroText>{creator.intro}</CreatorIntroText>
              <TagListContainer>
                {creator.tag.map((subject, i) => (
                  <CreatorTag tag={subject} key={i} />
                ))}
              </TagListContainer>
            </InfoContainer>
          </CardInnerContainer>
          <IconContainer>
            <BookmarkIcon />
            <SendIcon />
          </IconContainer>
        </CardContainer>
      </CardSection>
    </>
  );
};

const CardSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 0px 20px;
  border-bottom: 1px solid #f1f1f1;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px 30px;
`;

const CardInnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;

const ImageContainer = styled.div`
  position: relative;
`;

const SeeMoreOutlay = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -10px;
  left: -10px;
  width: 120px;
  height: 120px;
  background: #d2d2d2;
  opacity: 0.7;
  color: #ffffff;
`;

const MoreIcon = styled.span`
  white-space: pre-wrap;
  text-align: center;
  font-size: 60px;
`;

const MoreText = styled.span`
  white-space: pre-wrap;
  text-align: center;
  font-family: Pretendard;
`;

const CreatorImg = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 6px;
  background: #f1f1f1;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  margin: 0px 0px 0px 18px;
`;
const CardHeader = styled.div``;
const CreatorName = styled.span`
  color: #313338;
  font-size: 18px;
  font-weight: bold;
`;

const CreatorIntroText = styled.span`
  color: #8b8b8b;
  font-size: 13px;
  line-height: 19px;
`;
export const TagListContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 8px 12px 8px 0px;
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  color: #8b8b8b;
`;

const BookmarkIcon = styled(FlagIcon)`
  margin: 0px 11px;
  path {
    fill: #8b8b8b;
  }
`;

const SendIcon = styled(PlaneIcon)`
  margin: 0px 11px;
  path {
    fill: #8b8b8b;
  }
`;
