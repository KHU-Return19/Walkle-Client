import React from "react";
import styled from "styled-components";
import { selectedCreatorState, selectedProjectState } from "../../store/state";
import { useRecoilState } from "recoil";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CreatorModalContent from "./CreatorModalContent";
import ProjectModalContent from "./ProjectModalContent";

const Modal = ({ searchCategory }) => {
  const [selectedCreator, setSelectedCreator] =
    useRecoilState(selectedCreatorState);
  const [selectedProject, setSelectedProject] =
    useRecoilState(selectedProjectState);
  const handleClick = () => {
    setSelectedCreator({});
    setSelectedProject({});
  };
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
  width: 500px;
  height: 240px;
  background: #c4c4c4;
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
