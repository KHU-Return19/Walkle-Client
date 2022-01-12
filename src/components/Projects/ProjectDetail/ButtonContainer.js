import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ButtonContainer = ({ history, isManager, id }) => {
  return (
    <>
      <ParticipateButtonContainer>
        <ParticipateButton
          className={isManager && "invisible"}
          onClick={() => history.goBack()}
        >
          프로젝트 참여 신청하기
        </ParticipateButton>
        <Link to={`/project_edit/${id}`}>
          <GoToEditButton className={!isManager && "invisible"}>
            프로젝트 프로필 수정하기
          </GoToEditButton>
        </Link>
      </ParticipateButtonContainer>
    </>
  );
};

export default ButtonContainer;

const ParticipateButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 100px 0px;
  .invisible {
    display: none;
  }
  a {
    text-decoration: none;
  }
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

const GoToEditButton = styled(ParticipateButton)``;
