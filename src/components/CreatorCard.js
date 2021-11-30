import React from "react";
import styled from "styled-components";
import CreatorTag from "./CreatorTag";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRecoilState } from "recoil";
import { selectedCreatorState } from "../store/state";

export const MapCreatorCard = (creator) => {
  const [selectedCreator, setSelectedCreator] =
    useRecoilState(selectedCreatorState);
  const currentCreator = creator;
  return (
    <>
      <CardSection
        className={selectedCreator === creator && "selected-creator"}
        onClick={() => setSelectedCreator(currentCreator)}
      >
        <CardContainer>
          <CardInnerContainer>
            <ImageContainer>
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
            <FontAwesomeIcon className="Icon" icon={["far", "bookmark"]} />
            <FontAwesomeIcon className="Icon" icon="paper-plane" />
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

const ImageContainer = styled.div``;

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
  font-size: 11px;
`;
const TagListContainer = styled.div`
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

  .Icon {
    flex: none;
    order: 1;
    flex-grow: 0;
    margin: 0px 8px;
  }
`;
