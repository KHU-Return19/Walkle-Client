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
  InputRowContainer,
} from "./SetNameJobSlide";
import { Input } from "../InputRow";

const TagSlide = ({
  hashtag,
  setHashtag,
  handleSubmitTag,
  handleInput,
  toggleSlide,
}) => {
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
          <PrevSlideButton onClick={toggleSlide("prev")}>
            이전으로
          </PrevSlideButton>
          <NextSlideButton onClick={toggleSlide("next")}>
            다음으로
          </NextSlideButton>
        </ButtonContainer>
      </SlideContainer>
    </>
  );
};

export default TagSlide;

const TagLabelText = styled.div`
  margin-bottom: 10px;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 500;
  color: #8b8b8b;
`;

const TagLabelSubText = styled.div`
  margin-bottom: 1rem;
  font-family: Pretendard;
  font-size: 13px;
  line-height: 21px;
  white-space: pre-wrap;
  font-weight: 500;
  color: #8b8b8b;
`;

const TagInputRow = styled.div``;

export const FieldTagListContainer = styled.div`
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

export const FieldTagContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 20px;

  position: static;
  height: 50px;

  border: 1px solid #d2d2d2;
  box-sizing: border-box;
  border-radius: 100px;

  font-size: 11px;
  line-height: 18px;
  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 0px 10px 16px 0px;
`;

export const FieldTag = styled.span`
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 11px;
  color: #8b8b8b;
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
  padding: 10px 16px;

  position: static;
  height: 36px;

  border: 1px solid #d2d2d2;
  box-sizing: border-box;
  border-radius: 100px;

  font-size: 16px;
  line-height: 16px;
  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 16px 10px 0px 0px;
`;

export const HashtagContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const HashtagInputContainer = styled.div`
  display: table-cell;
  vertical-align: middle;
  margin: 0.4rem auto;
  margin-top: 16px;
  padding-left: 1.5rem;
  border: none;
  border-radius: 100px;
  width: 400px;
  height: 50px;
  font-size: 1rem;
  color: #313338;
  background: #fafafa;
  .invisible {
    display: none;
  }
`;

export const HashtagText = styled.span`
  font-family: Pretendard;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  color: #8b8b8b;
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
