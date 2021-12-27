import React from "react";
import styled from "styled-components";
import { LabelText } from "../InputRow";
import IntroduceInput from "./IntroduceInput";
import MemberSelector from "./MemberSelector";
import ProjectTagSelector from "./ProjectTagSelector";
import RecruitmentPeriodSelector from "./RecruitmentPeriodSelector";

const AddProjectForm = ({
  projectTitle,
  handleInput,
  handleCheck,
  handleClick,
  handleTagClick,
  onCheckEnter,
  isConstantRecruit,
  recruitStartDate,
  recruitEndDate,
  isModalOpen,
  setIsModalOpen,
  memberList,
  simpleIntro,
  myFieldTagList,
  hashtag,
  hashtagList,
}) => {
  return (
    <>
      <AddProjectFormContainer>
        <ProjectTitleContainer>
          <ProjectTitleInput
            placeholder="프로젝트명을 입력하세요"
            value={projectTitle}
            onChange={handleInput("title")}
          />
        </ProjectTitleContainer>
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
        <IntroduceInput simpleIntro={simpleIntro} handleInput={handleInput} />
        <ProjectTagSelector
          myFieldTagList={myFieldTagList}
          hashtag={hashtag}
          hashtagList={hashtagList}
          handleInput={handleInput}
          handleTagClick={handleTagClick}
          onCheckEnter={onCheckEnter}
        />
      </AddProjectFormContainer>
    </>
  );
};

export default AddProjectForm;

const AddProjectFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 960px;
  margin: auto;
`;

const ProjectTitleContainer = styled.div`
  display: table-cell;
  vertical-align: middle;
  margin: 0.4rem auto;
  margin-bottom: 0;
  padding-left: 1.5rem;
  border: none;
  border-radius: 100px;
  width: 400px;
  height: 50px;
  font-size: 1rem;
  color: #313338;
  background: #fafafa;
  .invisible {
    display: none;
  }
`;

const ProjectTitleInput = styled.input`
  border: none;
  width: 380px;
  height: 50px;
  font-family: Pretendard;
  font-size: 38px;
  font-weight: 700;
  color: #313338;
  background: #fafafa;
  :focus {
    outline: none;
  }
  ::placeholder {
    color: #d2d2d2;
    font-weight: 700;
  }
`;

export const AddProjectLabelText = styled(LabelText)`
  margin-bottom: 30px;
  color: #7054ff;
  font-weight: 700;
`;

export const SubLabelText = styled(LabelText)`
  margin-bottom: 20px;
`;

export const SubText = styled(SubLabelText)``;
