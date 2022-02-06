import React from "react";
import styled from "styled-components";
import {
  selectedCreatorState,
  selectedObjectState,
  selectedProjectState,
} from "../../store/state";
import { useRecoilState, useSetRecoilState } from "recoil";
import { ReactComponent as CloseIcon } from "../../assets/close.svg";
import { ReactComponent as OpenInNewIcon } from "../../assets/open_in_new.svg";
import CreatorModalContent from "./CreatorModalContent";
import ProjectModalContent from "./ProjectModalContent";

const Modal = ({ searchCategory }) => {
  const [selectedCreator, setSelectedCreator] =
    useRecoilState(selectedCreatorState);
  const [selectedProject, setSelectedProject] =
    useRecoilState(selectedProjectState);
  const setSelectedObject = useSetRecoilState(selectedObjectState);

  const handleClick = () => {
    setSelectedCreator({});
    setSelectedProject({});
    setSelectedObject({});
  };
  return (
    <>
      <ModalContainer>
        <ImageContainer>
          <OpenInNewTabButton>
            <OpenInNewIcon />
          </OpenInNewTabButton>
          <ExitButton onClick={() => handleClick()}>
            <CloseIcon />
          </ExitButton>
        </ImageContainer>
        {searchCategory === "creator" ? (
          <CreatorModalContent creator={selectedCreator} />
        ) : (
          <ProjectModalContent project={selectedProject} />
        )}
      </ModalContainer>
    </>
  );
};

export default Modal;

const ModalContainer = styled.div`
  min-width: 500px;
  height: calc(100vh - 64px);
  display: flex;
  flex-direction: column;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  overflow-y: overlay;
  ::-webkit-scrollbar {
    width: 6px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #8b8b8b;
    border-radius: 100px;
  }
  ::-webkit-scrollbar-track {
    background-color: #f1f1f1;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  position: relative;
  width: 500px;
  min-height: 240px;
  background: #c4c4c4;
`;

const ExitButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 420px;
  top: 30px;
  width: 50px;
  height: 50px;
  border-radius: 100px;
  background: rgba(0, 0, 0, 0.5);
  font-size: 20px;
  color: #ffffff;
  cursor: pointer;
`;

const OpenInNewTabButton = styled(ExitButton)`
  left: 30px;
`;
