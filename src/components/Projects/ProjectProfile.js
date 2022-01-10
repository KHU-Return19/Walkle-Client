import React from "react";
import styled from "styled-components";
import { Projects } from "../../store/fakeCreators";
import Header from "../Header";
import ProjectMemberCard, { ProjectDirectorCard } from "./ProjectMemberCard";

const ProjectProfile = ({ match, history }) => {
  const project = Projects.find(
    (project) => String(project.id) === match.params.id
  );
  return (
    <>
      <Header />
      <CoverImageContainer>
        {project.image && <CoverImage />}
      </CoverImageContainer>
      <ProjectProfileContainer>
        <Wrapper>
          <TitleContainer>
            <Title>{project.name}</Title>
          </TitleContainer>
        </Wrapper>
        <HashtagListContainer>
          {project.tag &&
            project.tag.map((tag) => (
              <>
                <ProjectHashtagContainer>
                  <HashtagContentContainer>
                    <HashtagText>{tag}</HashtagText>
                    <IconContainer id={tag}></IconContainer>
                  </HashtagContentContainer>
                </ProjectHashtagContainer>
              </>
            ))}
        </HashtagListContainer>
        <MemberWrapper>
          <ProjectLabelText>참여 멤버</ProjectLabelText>
          <MemberListContainer>
            <ProjectDirectorCard />
            {project.member &&
              project.member.map((creator) => (
                <ProjectMemberCard creator={creator} />
              ))}
          </MemberListContainer>
        </MemberWrapper>
        <RecruitmentPeriodContainer>
          <LabelTextContainer>
            <ProjectLabelText>모집 기간</ProjectLabelText>
          </LabelTextContainer>
          <StartEndContainer>
            <StartEndBox>
              <SubLabelText>모집 시작</SubLabelText>
              <DateContainer>{project.initialDate}</DateContainer>
            </StartEndBox>
            <StartEndBox>
              <SubLabelText>모집 종료</SubLabelText>
              <DateContainer>{project.dDay}</DateContainer>
            </StartEndBox>
          </StartEndContainer>
        </RecruitmentPeriodContainer>
        <SimpleIntroduceContainer>
          <ProjectLabelText>한줄 소개</ProjectLabelText>
          <SimpleIntroduceInputContainer>
            프로젝트의 한줄 소개 내용을 입력해 주세요
          </SimpleIntroduceInputContainer>
        </SimpleIntroduceContainer>
        <DetailedIntroduceContainer>
          <ProjectLabelText>세부 소개</ProjectLabelText>
          프로젝트의 세부 소개 내용을 입력해 주세요
        </DetailedIntroduceContainer>
        <ParticipateButtonContainer>
          <ParticipateButton onClick={() => history.goBack()}>
            프로젝트 참여 신청하기
          </ParticipateButton>
        </ParticipateButtonContainer>
      </ProjectProfileContainer>
    </>
  );
};

export default ProjectProfile;

const ProjectProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 931px;
  margin: auto;
`;

const CoverImageContainer = styled.div`
  width: 100vw;
  height: 360px;
  background: #f1f1f1;
`;

const CoverImage = styled.img`
  width: 100vw;
  height: 300px;
  object-fit: contain;
  border: none;
`;

const Wrapper = styled.div`
  padding-top: 100px;
`;

const TitleContainer = styled.div`
  display: table-cell;
  vertical-align: middle;
  margin: 0.4rem auto;
  margin-bottom: 0;
  padding-bottom: 10px;
  width: 400px;
  height: 50px;
  font-size: 1rem;
  color: #313338;
`;

const Title = styled.div`
  border: none;
  width: 380px;
  height: 50px;
  font-family: Pretendard;
  font-size: 38px;
  font-weight: 700;
  color: #313338;
`;

export const HashtagListContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: left;
  max-width: 460px;
  padding: 0;
`;

export const HashtagContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  position: static;

  border: 1px solid #d2d2d2;
  box-sizing: border-box;
  border-radius: 100px;

  flex: none;
  order: 1;
  flex-grow: 0;

  height: 36px;
  font-size: 16px;
  line-height: 16px;
  padding: 10px 16px;
  margin: 16px 10px 0px 0px;
`;

const ProjectHashtagContainer = styled(HashtagContainer)`
  height: 36px;
  font-size: 16px;
  line-height: 16px;
  padding: 10px 16px;
  margin: 16px 10px 0px 0px;
  border: 1px solid #8b8b8b;
`;

export const HashtagContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const HashtagText = styled.span`
  font-family: Pretendard;
  font-style: normal;
  color: #8b8b8b;

  font-weight: 500;
  line-height: 16px;
`;

export const IconContainer = styled.div`
  background: none;
  line-height: 9px;
  .Icon {
    font-size: 12px;
    color: #8b8b8b;
    margin-left: 10px;
    cursor: pointer;
  }
`;

const MemberWrapper = styled.div`
  padding-top: 100px;
`;

const ProjectLabelText = styled.div`
  font-family: Pretendard;
  font-size: 16px;
  margin-bottom: 30px;
  color: #313338;
  font-weight: 700;
`;

const MemberListContainer = styled.div`
  display: flex;
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

const SimpleIntroduceContainer = styled.div`
  padding-top: 100px;
`;

const SimpleIntroduceInputContainer = styled(DateContainer)`
  width: 960px;
`;

const DetailedIntroduceContainer = styled(SimpleIntroduceContainer)``;

const ParticipateButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 100px 0px;
`;

const ParticipateButton = styled.div`
  width: 272px;
  height: 61px;
  border: none;
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #7054ff;
  color: #ffffff;
  font-family: Pretendard;
  font-size: 21px;
  font-weight: 700;
  line-height: 21px;
  text-align: center;
`;
