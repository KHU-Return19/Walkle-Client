import React from "react";
import styled from "styled-components";

const ProjectIntroduce = ({simple, detailed}) => {
  return (
    <>
      <SimpleIntroduceContainer>
        <ProjectLabelText>한줄 소개</ProjectLabelText>
        <SimpleIntroduceInputContainer>
          {simple}
        </SimpleIntroduceInputContainer>
      </SimpleIntroduceContainer>
      <DetailedIntroduceContainer>
        <ProjectLabelText>세부 소개</ProjectLabelText>
        {detailed}
      </DetailedIntroduceContainer>
    </>
  );
};

export default ProjectIntroduce;

const ProjectLabelText = styled.div`
  font-family: Pretendard;
  font-size: 16px;
  margin-bottom: 30px;
  color: #313338;
  font-weight: 700;
`;
const SimpleIntroduceContainer = styled.div`
  padding-top: 100px;
`;

const SimpleIntroduceInputContainer = styled.div`
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

const DetailedIntroduceContainer = styled(SimpleIntroduceContainer)``;
