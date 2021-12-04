import React from "react";
import styled from "styled-components";
import { selectedCreatorState } from "../../store/state";
import { useRecoilState } from "recoil";
import { TagContainer, TagText } from "../CreatorTag";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Modal = () => {
  const [selectedObj, setSelectedObj] = useRecoilState(selectedCreatorState);
  const TagList = selectedObj.tag;
  return (
    <>
      <ModalContainer className={selectedObj.id ? "visible" : "invisible"}>
        <ImageContainer>
          <ExitButton>
            <FontAwesomeIcon
              className="Icon"
              icon={["far", "times-circle"]}
              onClick={() => setSelectedObj({})}
            />
          </ExitButton>
        </ImageContainer>
        <MainTextContainer>
          <MainText>{selectedObj.name}</MainText>
        </MainTextContainer>
        <SubTextContainer>
          <SubText>{selectedObj.job}</SubText>
        </SubTextContainer>
        <TagListContainer>
          {TagList &&
            TagList.map((subject) => (
              <ModalTagContainer>
                <ModalTagText>{subject}</ModalTagText>
              </ModalTagContainer>
            ))}
        </TagListContainer>
      </ModalContainer>
    </>
  );
};

export default Modal;

const ModalContainer = styled.div`
  min-width: 500px;
  height: 100vh;

  display: flex;
  flex-direction: column;
`;

const ImageContainer = styled.div`
  width: 500px;
  height: 240px;
  background: #c4c4c4;
`;

const MainTextContainer = styled.div`
  padding-top: 30px;
  text-align: center;
`;
const MainText = styled.span`
  font-family: Pretendard;
  font-weight: 700;
  font-size: 26px;
  color: #313338;
`;

const SubTextContainer = styled.div`
  padding-top: 36px;
  text-align: center;
`;

const SubText = styled(MainText)`
  font-weight: 500;
  font-size: 13px;
  color: #8b8b8b;
`;

const TagListContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px 12px 8px 0px;
`;

const ModalTagContainer = styled(TagContainer)`
  margin: 0px 4px 4px 4px;
`;

const ModalTagText = styled(TagText)``;

const ExitButton = styled.div`
  font-size: 1.5rem;
  color: #ffffff;
  position: relative;
  left: 447px;
  top: 30px;
  right; 30px;
  width: 24px;
  height: 24px;
  text-align: center;
  cursor: pointer;
`;
