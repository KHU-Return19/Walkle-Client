import React from "react";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  FieldTag,
  FieldTagContainer,
  FieldTagListContainer,
  HashtagContainer,
  HashtagContentContainer,
  HashtagInputContainer,
  HashtagListContainer,
  HashtagText,
  IconContainer,
} from "../Carousel/TagSlide";
import { Input } from "../InputRow";
import { AddProjectLabelText, SubLabelText, SubText } from "./AddProjectForm";
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
        <AddProjectLabelText>태그 설정</AddProjectLabelText>
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
        <ProjectHashtagInputContainer>
          <Input
            type="hashtag"
            value={hashtag}
            onChange={handleInput("hashtag")}
            onKeyPress={onCheckEnter}
            placeholder="#태그 입력 후 Enter"
            required
          />
        </ProjectHashtagInputContainer>
        <HashtagListContainer>
          {hashtagList &&
            hashtagList.map((tag) => (
              <>
                <ProjectHashtagContainer>
                  <HashtagContentContainer>
                    <HashtagText>{tag}</HashtagText>
                    <IconContainer onClick={handleTagClick("hashtag")} id={tag}>
                      <FontAwesomeIcon
                        className="Icon"
                        icon={["fas", "times"]}
                      />
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

const ProjectFieldTagListContainer = styled(FieldTagListContainer)`
  padding-bottom: 50px;
`;

const ProjectFieldTagContainer = styled(FieldTagContainer)`
  width: 225px;
  height: 80px;
  box-sizing: border-box;
  border-radius: 8px;
  margin: 0px 20px 20px 0px;
`;

const ProjectHashtagInputContainer = styled(HashtagInputContainer)``;

const ProjectHashtagContainer = styled(HashtagContainer)`
  border: 1px solid #7054ff;
  span,
  .Icon {
    color: #7054ff;
  }
`;
