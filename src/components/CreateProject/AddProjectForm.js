import React from "react";
import styled from "styled-components";
import { LabelText } from "../InputRow";
import { ParticipantCard } from "./ModalCreatorCard";
import RecruitmentPeriodSelector, {
  DateInput,
  DateInputContainer,
} from "./RecruitmentPeriodSelector";

const AddProjectForm = ({
  projectTitle,
  handleInput,
  handleCheck,
  handleClick,
  isConstantRecruit,
  recruitStartDate,
  recruitEndDate,
  isModalOpen,
  setIsModalOpen,
  memberList,
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
        <AddMemberContainer>
          <AddProjectLabelText>참여 멤버</AddProjectLabelText>
          <AddMemberListContainer>
            {memberList &&
              memberList.map((creator) => (
                <ParticipantCard creator={creator} handleClick={handleClick} />
              ))}
            <AddMemberButton onClick={() => setIsModalOpen(true)}>
              + 멤버 추가
            </AddMemberButton>
          </AddMemberListContainer>
        </AddMemberContainer>
        <RecruitmentPeriodSelector
          isConstantRecruit={isConstantRecruit}
          handleCheck={handleCheck}
          handleInput={handleInput}
          recruitStartDate={recruitStartDate}
          recruitEndDate={recruitEndDate}
        />
        <SimpleIntroduceContainer>
          <AddProjectLabelText>한줄 소개</AddProjectLabelText>
          <SimpleIntroduceInputContainer>
            <SimpleIntroduceInput placeholder="프로젝트의 한줄 소개 내용을 입력해 주세요" />
          </SimpleIntroduceInputContainer>
        </SimpleIntroduceContainer>
        <DetailedIntroduceContainer>
          <AddProjectLabelText>세부 소개</AddProjectLabelText>
          <DetailedIntroduceInputContainer>
            <DetailedIntroduceInput
              type="textarea"
              placeholder="프로젝트의 세부 소개 내용을 입력해 주세요"
            />
          </DetailedIntroduceInputContainer>
        </DetailedIntroduceContainer>
        <SetTagContainer>
          <AddProjectLabelText>태그 설정</AddProjectLabelText>
          <SubLabelText>분야/검색 태그 (최대 3개)</SubLabelText>
          <SubText>
            해당 프로젝트와 관련한 태그를 선택해주세요.{"\n"}분야 태그는
            프로젝트의 메인 카드에 노출됩니다.
          </SubText>
          <SubLabelText>검색 태그 (최대 3개)</SubLabelText>
          <SubText>
            크리에이터님의 관련 해시태그로 노출되는 키워드입니다.
          </SubText>
          <HashtagInputContainer>
            <HashtagInput placeholder="#태그입력 후 Enter" />
          </HashtagInputContainer>
        </SetTagContainer>
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

const AddMemberContainer = styled.div``;

const AddMemberListContainer = styled.div`
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

export const AddProjectLabelText = styled(LabelText)`
  margin-bottom: 30px;
  color: #7054ff;
  font-weight: 700;
`;

export const SubLabelText = styled(LabelText)`
  margin-bottom: 20px;
`;

const SimpleIntroduceContainer = styled.div``;

const SimpleIntroduceInputContainer = styled(DateInputContainer)`
  width: 960px;
`;

const SimpleIntroduceInput = styled(DateInput)`
  width: 940px;
`;

const DetailedIntroduceContainer = styled.div``;

const DetailedIntroduceInputContainer = styled(SimpleIntroduceInputContainer)``;

const DetailedIntroduceInput = styled(SimpleIntroduceInput)``;

const SetTagContainer = styled.div``;

const SubText = styled(SubLabelText)``;

const HashtagInputContainer = styled.div``;

const HashtagInput = styled.input``;
