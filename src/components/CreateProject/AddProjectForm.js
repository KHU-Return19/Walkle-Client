import React from "react";
import styled from "styled-components";
import { LabelText } from "../InputRow";
import ImageInput from "./ImageInput";
import IntroduceInput from "./IntroduceInput";
import MemberSelector from "./MemberSelector";
import ProjectTagSelector from "./ProjectTagSelector";
import ProjectTitleInput from "./ProjectTitleInput";
import RecruitmentPeriodSelector from "./RecruitmentPeriodSelector";
import RegisterButton from "./RegisterButton";

const AddProjectForm = ({
  imagePreview,
  projectTitle,
  handleInput,
  handleCheck,
  handleClick,
  handleTagClick,
  onCheckEnter,
  onChangeFile,
  isConstantRecruit,
  recruitStartDate,
  recruitEndDate,
  setIsModalOpen,
  memberList,
  simpleIntro,
  setDetailedIntro,
  myFieldTagList,
  hashtag,
  hashtagList,
}) => {
  return (
    <>
      <ImageInput imagePreview={imagePreview} onChangeFile={onChangeFile} />
      <CreateProjectFormContainer>
        <ProjectTitleInput
          projectTitle={projectTitle}
          handleInput={handleInput}
        />
        <MemberSelector
          memberList={memberList}
          handleClick={handleClick}
          setIsModalOpen={setIsModalOpen}
        />
        <RecruitmentPeriodSelector
          isConstantRecruit={isConstantRecruit}
          handleCheck={handleCheck}
          handleInput={handleInput}
          recruitStartDate={recruitStartDate}
          recruitEndDate={recruitEndDate}
        />
        <IntroduceInput
          simpleIntro={simpleIntro}
          setDetailedIntro={setDetailedIntro}
          handleInput={handleInput}
        />
        <ProjectTagSelector
          myFieldTagList={myFieldTagList}
          hashtag={hashtag}
          hashtagList={hashtagList}
          handleInput={handleInput}
          handleTagClick={handleTagClick}
          onCheckEnter={onCheckEnter}
        />
        <RegisterButton />
      </CreateProjectFormContainer>
    </>
  );
};

export default AddProjectForm;

const CreateProjectFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 960px;
  margin: auto;
`;

export const CreateProjectLabelText = styled(LabelText)`
  margin-bottom: 30px;
  color: #7054ff;
  font-weight: 700;
`;

export const SubLabelText = styled(LabelText)`
  margin-bottom: 20px;
`;

export const SubText = styled(SubLabelText)``;
