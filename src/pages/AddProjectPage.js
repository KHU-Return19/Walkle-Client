import React, { useState } from "react";
import styled from "styled-components";
import AddProjectForm from "../components/CreateProject/AddProjectForm";
import Header from "../components/Header";
const AddProjectPage = () => {
  const [projectTitle, setProjectTitle] = useState();
  const [memberList, setMemberList] = useState();
  const handleInput = (type) => async (event) => {
    const targetValue = event.currentTarget.value;
    switch (type) {
      default:
        break;
      case "title":
        setProjectTitle(targetValue);
        break;
    }
  };
  return (
    <>
      <Header />
      <CoverImageContainer />
      <AddProjectFormContainer>
        <AddProjectForm
          projectTitle={projectTitle}
          memberList={memberList}
          handleInput={handleInput}
        />
      </AddProjectFormContainer>
    </>
  );
};

export default AddProjectPage;

const CoverImageContainer = styled.div`
  width: 100vw;
  height: 360px;
  background: #f1f1f1;
`;

const AddProjectFormContainer = styled.div``;
