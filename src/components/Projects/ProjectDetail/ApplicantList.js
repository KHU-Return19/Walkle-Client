import React from "react";
import styled from "styled-components";
import ApplicantCard from "./ApplicantCard";

const ApplicantList = ({ applicants, isManager }) => {
  return (
    <>
      <Wrapper>
        <Outlay className={!isManager && "invisible"}>
          <Header>
            <HeadText>프로젝트 지원자 명단</HeadText>
            <ApplicantCount>{applicants && applicants.length}</ApplicantCount>
          </Header>
          <Body>
            <Applicants className="scroll">
              {applicants.length === 0 ? (
                <NoApplicantText>프로젝트 지원자가 없어요!</NoApplicantText>
              ) : (
                applicants.map((applicant) => (
                  <ApplicantCard applicant={applicant} />
                ))
              )}
            </Applicants>
          </Body>
        </Outlay>
      </Wrapper>
    </>
  );
};

export default ApplicantList;

const Wrapper = styled.div`
  .invisible {
    display: none;
  }
`;

const Outlay = styled.div`
  position: absolute;
  left: 1521px;
  top: 524px;
  width: 339px;
  height: 550px;
  filter: drop-shadow(6px 6px 20px rgba(0, 0, 0, 0.1));
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px;

  position: static;
  width: 339px;
  height: 58px;

  background: #ffffff;

  box-shadow: inset 0px -1px 0px #f1f1f1;
  box-sizing: border-box;
  border-radius: 20px 20px 0px 0px;
`;

const HeadText = styled.div`
  width: 149px;
  font-family: Pretendard;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 18px;
`;

const ApplicantCount = styled.div`
  width: 19px;
  height: 18px;
  margin: 0px 6px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  background: #ff6814;
  border-radius: 100px;

  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 11px;
  line-height: 12px;
  text-align: center;
  color: #ffffff;
`;

const Body = styled.div`
  width: 339px;
  height: 492px;
  padding-top: 20px;
  background: #ffffff;
  border-radius: 0px 0px 20px 20px;
  .scroll {
    overflow-x: hidden;
    overflow-y: scroll;
  }
  .scroll::-webkit-scrollbar {
    width: 6px;
  }
  .scroll::-webkit-scrollbar-thumb {
    background-color: #8b8b8b;
    border-radius: 100px;
  }
  .scroll::-webkit-scrollbar-track {
    background-color: #f1f1f1;
  }
`;

const Applicants = styled.div`
  display: flex;
  height: 482px;
  flex-direction: column;
  align-items: center;
`;

const NoApplicantText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 339px;
  height: 492px;
  font-family: Pretendard;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 16px;
  color: #8b8b8b;
`;
