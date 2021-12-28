import React from "react";
import styled from "styled-components";
import { LabelText } from "../InputRow";
import { CreateProjectLabelText, SubLabelText } from "./AddProjectForm";

const RecruitmentPeriodSelector = ({
  isConstantRecruit,
  handleInput,
  handleCheck,
  recruitStartDate,
  recruitEndDate,
}) => {
  return (
    <>
      <RecruitmentPeriodContainer>
        <LabelTextContainer>
          <CreateProjectLabelText>모집 기간</CreateProjectLabelText>
          <ConstantRecruitCheckBoxContainer>
            <ConstantRecruitCheckBox
              type="checkbox"
              checked={isConstantRecruit}
              onChange={() => handleCheck()}
            />
            <ConstantRecruitLabelText>상시 모집</ConstantRecruitLabelText>
          </ConstantRecruitCheckBoxContainer>
        </LabelTextContainer>
        <StartEndContainer>
          <StartEndBox>
            <SubLabelText>모집 시작</SubLabelText>
            <DateInputContainer>
              <DateInput
                type={isConstantRecruit ? "text" : "date"}
                placeholder="날짜 입력"
                disabled={isConstantRecruit ? "disabled" : ""}
                value={recruitStartDate}
                onChange={handleInput("startDate")}
              />
            </DateInputContainer>
          </StartEndBox>
          <StartEndBox>
            <SubLabelText>모집 종료</SubLabelText>
            <DateInputContainer>
              <DateInput
                type={isConstantRecruit ? "text" : "date"}
                placeholder="날짜 입력"
                disabled={isConstantRecruit ? "disabled" : ""}
                value={recruitEndDate}
                onChange={handleInput("endDate")}
              />
            </DateInputContainer>
          </StartEndBox>
        </StartEndContainer>
      </RecruitmentPeriodContainer>
    </>
  );
};

export default RecruitmentPeriodSelector;

const RecruitmentPeriodContainer = styled.div`
  padding-top: 100px;
`;

const LabelTextContainer = styled.div`
  display: flex;
`;

const ConstantRecruitCheckBoxContainer = styled.div`
  display: flex;
  align-items: center;
  width: 86px;
  height: 20px;
  margin: 0px 20px;
`;

const ConstantRecruitCheckBox = styled.input``;

const ConstantRecruitLabelText = styled(LabelText)`
  line-height: 16px;
  font-size: 16px;
  font-weight: 400;
  margin: 0;
  padding-left: 8px;
`;

const StartEndContainer = styled.div`
  display: flex;
`;

const StartEndBox = styled.div`
  padding-right: 40px;
`;

export const DateInputContainer = styled.div`
  display: table-cell;
  vertical-align: middle;
  margin: 0.4rem auto;
  margin-bottom: 0;
  padding-left: 20px;
  border: none;
  border-radius: 100px;
  width: 200px;
  height: 50px;
  font-size: 18px;
  color: #313338;
  background: #fafafa;
`;

export const DateInput = styled.input`
  border: none;
  width: 180px;
  height: 50px;
  font-family: Pretendard;
  font-size: 18px;
  font-weight: 400;
  color: #313338;
  background: #fafafa;
  :focus {
    outline: #7054ff;
  }
`;
