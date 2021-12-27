import React, { useState } from "react";
import styled from "styled-components";
import AddMemberModal from "../components/CreateProject/AddMemberModal";
import AddProjectForm from "../components/CreateProject/AddProjectForm";
import Header from "../components/Header";
const AddProjectPage = () => {
  const [projectTitle, setProjectTitle] = useState();
  const [memberList, setMemberList] = useState([]);
  const [isConstantRecruit, setIsConstantRecruit] = useState(false);
  const [recruitStartDate, setRecruitStartDate] = useState();
  const [recruitEndDate, setRecruitEndDate] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchContent, setSearchContent] = useState("");
  const [currentCreator, setCurrentCreator] = useState();
  const [simpleIntro, setSimpleIntro] = useState("");
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
      case "simpleIntro":
        setSimpleIntro(targetValue);
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
  const handleClick = (creator) => {
    const newList = memberList.filter((member) => member.id !== creator.id);
    setMemberList(newList);
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
          handleClick={handleClick}
          isConstantRecruit={isConstantRecruit}
          recruitStartDate={recruitStartDate}
          recruitEndDate={recruitEndDate}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          simpleIntro={simpleIntro}
        />
      </AddProjectFormContainer>
      <AddMemberModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        searchContent={searchContent}
        handleSearch={handleSearch}
        currentCreator={currentCreator}
        setCurrentCreator={setCurrentCreator}
        memberList={memberList}
        setMemberList={setMemberList}
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
