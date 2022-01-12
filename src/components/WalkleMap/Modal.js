import React from "react";
import styled from "styled-components";
import { selectedCreatorState, selectedProjectState } from "../../store/state";
import { useRecoilState } from "recoil";
import { TagText } from "../CreatorTag";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Modal = ({ searchCategory }) => {
  const [selectedCreator, setSelectedCreator] =
    useRecoilState(selectedCreatorState);
  const [selectedProject, setSelectedProject] =
    useRecoilState(selectedProjectState);
  const handleClick = () => {
    setSelectedCreator({});
    setSelectedProject({});
  };
  const TagList =
    searchCategory === "creator" ? selectedCreator.tag : selectedProject.tag;
  return (
    <>
      <ModalContainer
        className={
          selectedCreator.id || selectedProject.id ? "visible" : "invisible"
        }
      >
        <ImageContainer>
          <ExitButton>
            <FontAwesomeIcon
              className="Icon"
              icon={["fas", "times"]}
              onClick={() => handleClick()}
            />
          </ExitButton>
        </ImageContainer>
        <MainTextContainer>
          <MainText>
            {searchCategory === "creator"
              ? selectedCreator.name
              : selectedProject.name}
          </MainText>
        </MainTextContainer>
        <SubTextContainer>
          <SubText>
            {searchCategory === "creator"
              ? selectedCreator.job
              : "Director. " + selectedProject.director}
          </SubText>
        </SubTextContainer>
        <TagListContainer>
          {TagList &&
            TagList.map((subject) => (
              <ModalTagContainer>
                <TagText>{subject}</TagText>
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
  height: 88vh;

  display: flex;
  flex-direction: column;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
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
  padding-top: 10px;
  text-align: center;
`;

const SubText = styled(MainText)`
  font-weight: 500;
  font-size: 15px;
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

const ModalTagContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 12px;

  position: static;
  height: 27px;

  border: 1px solid #d2d2d2;
  box-sizing: border-box;
  border-radius: 100px;

  font-size: 11px;

  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 0px 4px 4px 4px;
`;

const ExitButton = styled.div`
  font-size: 1.5rem;
  color: #ffffff;
  position: relative;
  left: 447px;
  top: 30px;
  right: 30px;
  width: 24px;
  height: 24px;
  text-align: center;
  cursor: pointer;
`;
