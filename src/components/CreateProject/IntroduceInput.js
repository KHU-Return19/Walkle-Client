import React from "react";
import styled from "styled-components";
import { AddProjectLabelText } from "./AddProjectForm";
import { DateInput, DateInputContainer } from "./RecruitmentPeriodSelector";

const IntroduceInput = ({ simpleIntro, handleInput }) => {
  return (
    <>
      <SimpleIntroduceContainer>
        <AddProjectLabelText>한줄 소개</AddProjectLabelText>
        <SimpleIntroduceInputContainer>
          <SimpleIntroduceInput
            placeholder="프로젝트의 한줄 소개 내용을 입력해 주세요"
            value={simpleIntro}
            onChange={handleInput("simpleIntro")}
          />
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
    </>
  );
};

export default IntroduceInput;

const SimpleIntroduceContainer = styled.div`
  padding-top: 100px;
`;

const SimpleIntroduceInputContainer = styled(DateInputContainer)`
  width: 960px;
`;

const SimpleIntroduceInput = styled(DateInput)`
  width: 900px;
`;

const DetailedIntroduceContainer = styled(SimpleIntroduceContainer)``;

const DetailedIntroduceInputContainer = styled(SimpleIntroduceInputContainer)``;

const DetailedIntroduceInput = styled(SimpleIntroduceInput)``;
