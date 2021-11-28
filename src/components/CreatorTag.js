import React from "react";
import styled from "styled-components";

const CreatorTag = ({ tag }) => {
  return (
    <TagContainer>
      <TagText>{tag}</TagText>
    </TagContainer>
  );
};

export default CreatorTag;

export const TagContainer = styled.div`
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

  font-size: 5px;

  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 0px 8px 0px 0px;
`;

const TagText = styled.span`
  font-family: Pretendard;
  font-style: normal;
  font-weight: normal
  line-height: 11px;
  color: #8b8b8b;
  `;
