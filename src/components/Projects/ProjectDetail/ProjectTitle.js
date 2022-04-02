import React from "react";
import styled from "styled-components";

const ProjectTitle = ({ title, isManager, setIsManager }) => {
  return (
    <>
      <Wrapper>
        <TitleContainer>
          <Title>{title}</Title>
          <DevTransToManageButton
            className={!isManager && "manager"}
            onClick={() => setIsManager(!isManager)}
          >
            {!isManager ? "사용자 모드" : "관리자 모드"}
          </DevTransToManageButton>
        </TitleContainer>
      </Wrapper>
    </>
  );
};

export default ProjectTitle;

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

  .manager {
    background: #313338;
  }
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

const DevTransToManageButton = styled.div`
  width: 60px;
  height: 20px;
  font-family: Pretendard;
  font-size: 12px;
  line-height: 12px;
  background: #7054ff;
  color: #ffffff;
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3px;
  cursor: pointer;
`;
