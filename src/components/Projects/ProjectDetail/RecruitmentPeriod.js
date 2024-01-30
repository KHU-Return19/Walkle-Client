import React from "react";
import styled from "styled-components";

const RecruitmentPeriod = ({ start, end }) => {
  return (
    <>
      <RecruitmentPeriodContainer>
        <LabelTextContainer>
          <ProjectLabelText>모집 기간</ProjectLabelText>
        </LabelTextContainer>
        <StartEndContainer>
          <StartEndBox>
            <SubLabelText>모집 시작</SubLabelText>
            <DateContainer>
              {new Date(start).toLocaleDateString()}
            </DateContainer>
          </StartEndBox>
          <StartEndBox>
            <SubLabelText>모집 종료</SubLabelText>
            <DateContainer>{new Date(end).toLocaleDateString()}</DateContainer>
          </StartEndBox>
        </StartEndContainer>
      </RecruitmentPeriodContainer>
    </>
  );
};

export default RecruitmentPeriod;

const ProjectLabelText = styled.div`
  font-family: Pretendard;
  font-size: 16px;
  margin-bottom: 30px;
  color: #313338;
  font-weight: 700;
`;

const RecruitmentPeriodContainer = styled.div`
  padding-top: 100px;
`;

const LabelTextContainer = styled.div`
  display: flex;
`;

const StartEndContainer = styled.div`
  display: flex;
`;

const StartEndBox = styled.div`
  padding-right: 40px;
`;

export const DateContainer = styled.div`
  display: table-cell;
  vertical-align: middle;
  margin: 0.4rem auto;
  margin-bottom: 0;
  border: none;
  width: 200px;
  height: 50px;
  font-family: Pretendard;
  font-size: 18px;
  font-weight: 400;
  color: #313338;
`;

const SubLabelText = styled.div`
  margin-bottom: 20px;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 500;
  color: #8b8b8b;
`;
