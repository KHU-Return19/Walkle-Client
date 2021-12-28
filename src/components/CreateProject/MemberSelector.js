import React from "react";
import styled from "styled-components";
import { CreateProjectLabelText } from "./AddProjectForm";
import { ParticipantCard } from "./ModalCreatorCard";

const MemberSelector = ({ memberList, handleClick, setIsModalOpen }) => {
  return (
    <>
      <Wrapper>
        <CreateProjectLabelText>참여 멤버</CreateProjectLabelText>
        <MemberListContainer>
          {memberList &&
            memberList.map((creator) => (
              <ParticipantCard creator={creator} handleClick={handleClick} />
            ))}
          <AddMemberButton onClick={() => setIsModalOpen(true)}>
            + 멤버 추가
          </AddMemberButton>
        </MemberListContainer>
      </Wrapper>
    </>
  );
};

export default MemberSelector;

const Wrapper = styled.div`
  padding-top: 100px;
`;

const MemberListContainer = styled.div`
  display: flex;
`;

const AddMemberButton = styled.div`
  display: flex;
  flex-directoin: row;
  justify-content: center;
  align-items: center;
  width: 225px;
  height: 80px;
  border-radius: 8px;
  background: #f5f3ff;
  color: #7054ff;
  cursor: pointer;
`;
