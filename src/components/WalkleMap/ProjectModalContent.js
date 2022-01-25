import React from "react";
import styled from "styled-components";
import moment from "moment";
import { TagText } from "../CreatorTag";
import ProjectMemberCard from "../Projects/ProjectMemberCard";

const ProjectModalContent = ({ project }) => {
  return (
    <>
      <MainTextContainer>
        <MainText>{project.name}</MainText>
      </MainTextContainer>
      <SubTextContainer>
        <SubText>Director. {project.director}</SubText>
      </SubTextContainer>
      <TagListContainer>
        {project.tag &&
          project.tag.map((subject) => (
            <ModalTagContainer>
              <TagText>{subject}</TagText>
            </ModalTagContainer>
          ))}
      </TagListContainer>
      <MemberListContainer>
        <LabelText>참여 멤버</LabelText>
        <MemberList>
          {project.member &&
            project.member.map((creator) => (
              <ProjectMemberCard creator={creator} />
            ))}
        </MemberList>
      </MemberListContainer>
      <RecruitmentPeriodContainer>
        <LabelText>모집 기간</LabelText>
        <StartEndContainer>
          <StartEndBox>
            <SubLabelText>모집 시작</SubLabelText>
            <DateContainer>
              {moment(project.initialDate, "YYYY-MM-DD").format("YYYY.MM.DD")}
            </DateContainer>
          </StartEndBox>
          <StartEndBox>
            <SubLabelText>모집 종료</SubLabelText>
            <DateContainer>
              {moment(project.dDay, "YYYY-MM-DD").format("YYYY.MM.DD")}
            </DateContainer>
          </StartEndBox>
        </StartEndContainer>
      </RecruitmentPeriodContainer>
      <SimpleIntroduceContainer>
        <LabelText>한줄 소개</LabelText>
        <SimpleIntro>프로젝트의 한줄 소개 내용을 입력해 주세요</SimpleIntro>
      </SimpleIntroduceContainer>
      <DetailedIntroduceContainer>
        <LabelText>세부 소개</LabelText>
        <DetailedIntro>프로젝트의 세부 소개 내용을 입력해 주세요</DetailedIntro>
      </DetailedIntroduceContainer>
    </>
  );
};

export default ProjectModalContent;

const MainTextContainer = styled.div`
  position: relative;
  padding-top: 55px;
  text-align: center;
`;
const MainText = styled.span`
  font-family: Pretendard;
  font-weight: 700;
  font-size: 26px;
  color: #313338;
`;

const SubTextContainer = styled.div`
  padding-top: 10px;
  text-align: center;
`;

const SubText = styled(MainText)`
  font-weight: 500;
  font-size: 15px;
  color: #8b8b8b;
`;

const TagListContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px 12px 8px 0px;
`;

const ModalTagContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 12px;

  position: static;
  height: 27px;

  border: 1px solid #d2d2d2;
  box-sizing: border-box;
  border-radius: 100px;

  font-size: 11px;

  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 0px 4px 4px 4px;
`;

const MemberListContainer = styled.div`
  margin: 40px 30px 0px 30px;
  width: 440px;
`;

const LabelText = styled.div`
  margin-bottom: 30px;
  font-family: Pretendard;
  font-size: 18px;
  font-weight: 700;
  color: #7054ff;
`;

const MemberList = styled.div`
  display: flex;
  width: 440px;
  overflow-x: overlay;
  padding-bottom: 20px;
  ::-webkit-scrollbar {
    height: 6px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #8b8b8b;
    border-radius: 100px;
  }
  ::-webkit-scrollbar-track {
    background-color: #f1f1f1;
  }
`;

const RecruitmentPeriodContainer = styled(MemberListContainer)``;

const StartEndContainer = styled.div`
  display: flex;
`;

const StartEndBox = styled.div`
  padding-right: 40px;
`;

const DateContainer = styled.div`
  display: table-cell;
  vertical-align: middle;
  margin: 0.4rem auto;
  margin-bottom: 0;
  border: none;
  width: 84px;
  height: 18px;
  font-family: Pretendard;
  font-size: 18px;
  font-weight: 400;
  color: #313338;
`;

const SubLabelText = styled.div`
  margin-bottom: 20px;
  font-family: Pretendard;
  font-size: 18px;
  font-weight: 500;
  color: #8b8b8b;
`;

const SimpleIntroduceContainer = styled(MemberListContainer)``;

const SimpleIntro = styled.div`
  display: table-cell;
  vertical-align: middle;
  margin: 0.4rem auto;
  margin-bottom: 0;
  border: none;
  width: 960px;
  height: 50px;
  font-family: Pretendard;
  font-size: 18px;
  font-weight: 400;
  color: #313338;
`;

const DetailedIntroduceContainer = styled(MemberListContainer)``;

const DetailedIntro = styled(SimpleIntro)``;
