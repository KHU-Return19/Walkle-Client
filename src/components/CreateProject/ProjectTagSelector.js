import React from "react";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { ReactComponent as DeleteIcon } from "../../assets/delete.svg";
import {
  FieldTag,
  HashtagContainer,
  HashtagContentContainer,
  HashtagInputContainer,
  HashtagListContainer,
  HashtagText,
  IconContainer,
} from "../Carousel/TagSlide";
import { Input } from "../InputRow";
import {
  CreateProjectLabelText,
  SubLabelText,
  SubText,
} from "./AddProjectForm";
import { fieldTagListState } from "../../store/state";

const ProjectTagSelector = ({
  hashtag,
  hashtagList,
  handleInput,
  handleTagClick,
  onCheckEnter,
  myFieldTagList,
}) => {
  const fieldTagList = useRecoilValue(fieldTagListState);
  return (
    <>
      <SetTagContainer>
        <CreateProjectLabelText>태그 설정</CreateProjectLabelText>
        <SubLabelText>분야/검색 태그 (최대 3개)</SubLabelText>
        <SubText>
          해당 프로젝트와 관련한 태그를 선택해주세요.{"\n"}분야 태그는
          프로젝트의 메인 카드에 노출됩니다.
        </SubText>
        <ProjectFieldTagListContainer>
          {fieldTagList &&
            fieldTagList.map((tag) => (
              <ProjectFieldTagContainer
                className={
                  myFieldTagList &&
                  myFieldTagList.findIndex((element) => element === tag) !==
                    -1 &&
                  "selected"
                }
                onClick={handleTagClick("fieldtag")}
                id={tag}
              >
                <FieldTag>{tag}</FieldTag>
              </ProjectFieldTagContainer>
            ))}
        </ProjectFieldTagListContainer>
        <SubLabelText>검색 태그 (최대 3개)</SubLabelText>
        <SubText>크리에이터님의 관련 해시태그로 노출되는 키워드입니다.</SubText>
        <HashtagInputContainer>
          <Input
            type="hashtag"
            value={hashtag}
            onChange={handleInput("hashtag")}
            onKeyPress={onCheckEnter}
            placeholder="#태그 입력 후 Enter"
            required
          />
        </HashtagInputContainer>
        <HashtagListContainer>
          {hashtagList &&
            hashtagList.map(({tag}) => (
              <>
                <ProjectHashtagContainer>
                  <HashtagContentContainer>
                    <HashtagText>{tag}</HashtagText>
                    <IconContainer onClick={handleTagClick("hashtag")} id={tag}>
                      <DeleteIcon className="Icon" />
                    </IconContainer>
                  </HashtagContentContainer>
                </ProjectHashtagContainer>
              </>
            ))}
        </HashtagListContainer>
      </SetTagContainer>
    </>
  );
};

export default ProjectTagSelector;

const SetTagContainer = styled.div`
  width: 980px;
  padding-top: 100px;
`;

const ProjectFieldTagListContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: left;
  padding-bottom: 50px;
  .selected,
  .selected > span {
    background: #7054ff;
    color: #ffffff;
  }
`;

const ProjectFieldTagContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 20px;

  position: static;
  width: 225px;
  height: 80px;

  border: 1px solid #d2d2d2;
  box-sizing: border-box;
  border-radius: 8px;

  font-size: 11px;
  line-height: 18px;
  margin: 0px 20px 20px 0px;
`;

const ProjectHashtagContainer = styled(HashtagContainer)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 16px;

  position: static;
  height: 36px;

  border: 1px solid #7054ff;
  box-sizing: border-box;
  border-radius: 100px;

  font-size: 16px;
  line-height: 16px;
  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 16px 10px 0px 0px;
  span,
  .Icon {
    color: #7054ff;
    fill: #7054ff;
    stroke: #7054ff;
  }
`;
