import React, { useState } from "react";
import styled from "styled-components";
import AddMemberModal from "../components/CreateProject/AddMemberModal";
import AddProjectForm from "../components/CreateProject/AddProjectForm";
import Header from "../components/Header";
const AddProjectPage = () => {
  const [projectTitle, setProjectTitle] = useState();
  const [memberList, setMemberList] = useState();
  const [isConstantRecruit, setIsConstantRecruit] = useState(false);
  const [recruitStartDate, setRecruitStartDate] = useState();
  const [recruitEndDate, setRecruitEndDate] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchContent, setSearchContent] = useState("");
  const [currentCreator, setCurrentCreator] = useState();
  const [participants, setParticipants] = useState([]);
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
  const handleSearch = (event) => {
    const targetVal = event.currentTarget.value;
    setSearchContent(targetVal);
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
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          participants={participants}
        />
      </AddProjectFormContainer>
      <AddMemberModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        searchContent={searchContent}
        handleSearch={handleSearch}
        currentCreator={currentCreator}
        setCurrentCreator={setCurrentCreator}
        participants={participants}
        setParticipants={setParticipants}
      />
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
