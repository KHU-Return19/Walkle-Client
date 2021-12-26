import React, { useState } from "react";
import styled from "styled-components";
import AddProjectForm from "../components/CreateProject/AddProjectForm";
import Header from "../components/Header";
const AddProjectPage = () => {
  const [projectTitle, setProjectTitle] = useState();
  const [memberList, setMemberList] = useState();
  const [isConstantRecruit, setIsConstantRecruit] = useState(false);
  const [recruitStartDate, setRecruitStartDate] = useState();
  const [recruitEndDate, setRecruitEndDate] = useState();
  const handleInput = (type) => async (event) => {
    const targetValue = event.currentTarget.value;
    switch (type) {
      default:
        break;
      case "title":
        setProjectTitle(targetValue);
        break;
      case "startDate":
        setRecruitStartDate(targetValue);
        break;
      case "endDate":
        setRecruitEndDate(targetValue);
        break;
    }
  };
  const handleCheck = () => {
    setIsConstantRecruit(!isConstantRecruit);
    setRecruitStartDate("");
    setRecruitEndDate("");
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
          handleCheck={handleCheck}
          isConstantRecruit={isConstantRecruit}
          recruitStartDate={recruitStartDate}
          recruitEndDate={recruitEndDate}
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
