import React, { useRef } from "react";
import styled from "styled-components";
import { CreateProjectLabelText, SubLabelText } from "./AddProjectForm";

const RecruitmentPeriodSelector = ({
  isConstantRecruit,
  handleInput,
  handleCheck,
  recruitStartDate,
  recruitEndDate,
}) => {
  console.log(recruitStartDate);
  const startRef = useRef();
  const endRef = useRef();
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
                ref={startRef}
                onFocus={() => (startRef.current.type = "date")}
                onBlur={() => (startRef.current.type = "text")}
                type="text"
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
                ref={endRef}
                onFocus={() => (endRef.current.type = "date")}
                onBlur={() => (endRef.current.type = "text")}
                type="text"
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

const ConstantRecruitLabelText = styled.div`
  margin: 0;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 400;
  color: #8b8b8b;
  line-height: 16px;
  padding-left: 8px;
`;

const StartEndContainer = styled.div`
  display: flex;
`;

const StartEndBox = styled.div`
  padding-right: 40px;
`;

export const DateInputContainer = styled.label`
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
  :focus {
    outline: none;
    border: 1px solid #7054ff;
  }
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
  border-radius: 100px;
  :focus {
    outline: none;
  }
`;
