import React from "react";
import styled from "styled-components";

const ProjectTitleInput = ({ projectTitle, handleInput }) => {
  return (
    <>
      <Wrapper>
        <TitleContainer>
          <TitleInput
            placeholder="프로젝트명을 입력하세요"
            value={projectTitle}
            onChange={handleInput("title")}
          />
        </TitleContainer>
      </Wrapper>
    </>
  );
};

export default ProjectTitleInput;

const Wrapper = styled.div`
  padding-top: 100px;
`;

const TitleContainer = styled.div`
  display: table-cell;
  vertical-align: middle;
  margin: 0.4rem auto;
  margin-bottom: 0;
  border-bottom: 1px solid #d2d2d2;
  padding-bottom: 10px;
  width: 400px;
  height: 50px;
  font-size: 1rem;
  color: #313338;
`;

const TitleInput = styled.input`
  border: none;
  width: 380px;
  height: 50px;
  font-family: Pretendard;
  font-size: 38px;
  font-weight: 700;
  color: #313338;
  :focus {
    outline: none;
  }
  ::placeholder {
    color: #d2d2d2;
    font-weight: 700;
  }
`;
