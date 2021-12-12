import React from "react";
import styled from "styled-components";
import { useRecoilValue, useRecoilState } from "recoil";
import {
  fieldTagListState,
  profileFieldTagListState,
  profileHashtagListState,
} from "../../store/state";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  SlideContainer,
  HeadTextContainer,
  HeadText,
  InputForm,
  CommentContainer,
  ButtonContainer,
  PrevSlideButton,
  NextSlideButton,
  SuccessText,
  FailComment,
  InputRowContainer,
} from "./SetNameJobSlide";
import { LabelText, InputContainer, Input } from "../InputRow";
import { TagContainer, TagText } from "../CreatorTag";
import { TagListContainer } from "../CreatorCard";

const TagSlide = ({ hashtag, setHashtag, handleSubmitTag, handleInput }) => {
  const [hashtagList, setHashtagList] = useRecoilState(profileHashtagListState);
  const fieldTagList = useRecoilValue(fieldTagListState);
  const [myFieldTagList, setMyFieldTagList] = useRecoilState(
    profileFieldTagListState
  );
  const onCheckEnter = async (e) => {
    const targetVal = e.currentTarget.value;
    if (e.key === "Enter" && hashtagList.length < 3) {
      e.preventDefault();
      handleSubmitTag(targetVal);
      setHashtag("");
    }
  };
  const handleClick = (type) => async (e) => {
    const targetVal = e.currentTarget.id;
    if (type === "hashtag") {
      const newTagList = hashtagList.filter((tag) => tag !== targetVal);
      setHashtagList(newTagList);
    }
    if (type === "fieldtag") {
      if (myFieldTagList.length === 3) {
        const newTagList = myFieldTagList.filter(
          (element) => element !== targetVal
        );
        setMyFieldTagList(newTagList);
      } else if (
        myFieldTagList.findIndex((element) => element === targetVal) !== -1
      ) {
        const newTagList = myFieldTagList.filter(
          (element) => element !== targetVal
        );
        setMyFieldTagList(newTagList);
      } else {
        const newTagList = myFieldTagList.concat(targetVal);
        setMyFieldTagList(newTagList);
      }
    }
  };
  return (
    <>
      <SlideContainer>
        <HeadTextContainer>
          <HeadText>대표 태그를 {"\n"} 설정해 보세요</HeadText>
        </HeadTextContainer>
        <InputForm>
          <InputRowContainer>
            <TagInputRow>
              <TagLabelText>분야 태그 (최대 3개)</TagLabelText>
              <TagLabelSubText>
                본인의 직업/분야와 관련한 태그를 선택해주세요. {"\n"}
                크리에이터님의 프로필 메인에 노출되는 키워드입니다.
              </TagLabelSubText>
            </TagInputRow>
            <TagInputRow>
              <FieldTagListContainer>
                {fieldTagList &&
                  fieldTagList.map((tag) => (
                    <FieldTagContainer
                      className={
                        myFieldTagList.findIndex(
                          (element) => element === tag
                        ) !== -1 && "selected"
                      }
                      onClick={handleClick("fieldtag")}
                      id={tag}
                    >
                      <FieldTag>{tag}</FieldTag>
                    </FieldTagContainer>
                  ))}
              </FieldTagListContainer>
            </TagInputRow>
            <TagInputRow>
              <TagLabelText>검색 태그 (최대 3개)</TagLabelText>
              <TagLabelSubText>
                크리에이터님의 관련 해시태그로 사용되는 키워드입니다.
              </TagLabelSubText>
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
              <CommentContainer></CommentContainer>
              <HashtagListContainer>
                {hashtagList &&
                  hashtagList.map((tag) => (
                    <>
                      <HashtagContainer>
                        <HashtagContentContainer>
                          <HashtagText>{tag}</HashtagText>
                          <IconContainer
                            onClick={handleClick("hashtag")}
                            id={tag}
                          >
                            <FontAwesomeIcon
                              className="Icon"
                              icon={["fas", "times"]}
                            />
                          </IconContainer>
                        </HashtagContentContainer>
                      </HashtagContainer>
                    </>
                  ))}
              </HashtagListContainer>
            </TagInputRow>
          </InputRowContainer>
        </InputForm>
        <ButtonContainer>
          <PrevSlideButton>이전으로</PrevSlideButton>
          <NextSlideButton>다음으로</NextSlideButton>
        </ButtonContainer>
      </SlideContainer>
    </>
  );
};

export default TagSlide;

const TagLabelText = styled(LabelText)`
  margin-bottom: 10px;
`;

const TagLabelSubText = styled(LabelText)`
  font-size: 13px;
  line-height: 21px;
  white-space: pre-wrap;
`;

const TagInputRow = styled.div``;

const FieldTagListContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: left;
  padding-bottom: 24px;
  .selected,
  .selected > span {
    background: #7054ff;
    color: #ffffff;
  }
`;

const FieldTagContainer = styled(TagContainer)`
  height: 50px;
  padding: 16px 20px;
  line-height: 18px;
  margin: 0px 10px 16px 0px;
`;

const FieldTag = styled(TagText)`
  font-size: 18px;
  font-weight: 500;
`;

const HashtagListContainer = styled(TagListContainer)`
  display: flex;
  flex-flow: row wrap;
  justify-content: left;
  max-width: 460px;
  padding: 0;
`;

const HashtagContainer = styled(TagContainer)`
  height: 36px;
  font-size: 16px;
  line-height: 16px;
  padding: 10px 16px;
  margin: 16px 10px 0px 0px;
`;

const HashtagContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const HashtagInputContainer = styled(InputContainer)`
  margin-top: 16px;
`;

const HashtagText = styled(TagText)`
  font-weight: 500;
  line-height: 16px;
`;

const IconContainer = styled.div`
  background: none;
  .Icon {
    font-size: 16px;
    color: #8b8b8b;
    margin-left: 10px;
    cursor: pointer;
  }
`;
