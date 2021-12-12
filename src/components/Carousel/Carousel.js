import React from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { profileHashtagListState } from "../../store/state";
import IntroduceMeSlide from "./IntroduceMeSlide";
import SetNameJobSlide from "./SetNameJobSlide";
import TagSlide from "./TagSlide";

const Carousel = ({
  gender,
  photo,
  introduce,
  nickname,
  job,
  age,
  instagramUrl,
  hashtag,
  isValidNickname,
  isValidInstagramUrl,
  setNickname,
  setJob,
  setAge,
  setIntroduce,
  setGender,
  setPhoto,
  setInstagramUrl,
  setHashtag,
  setIsValidNickname,
  setIsValidInstagramUrl,
}) => {
  const [hashtagList, setHashtagList] = useRecoilState(profileHashtagListState);
  const handleInput = (type) => async (event) => {
    const targetVal = event.currentTarget.value;
    const regExpNickname =
      /(?=.*\d{1,50})(?=.*[~`!@#$%^&*()-+=]{1,50})(?=.*[a-zA-Z]{1,50}).{3,50}$/;
    const regExpUrl =
      /(http(s)?:\/\/www.instagram.com\/)([a-z0-9~`!@#$%^&*()-+=_]{1,100})/gi;

    switch (type) {
      case "gender":
        setGender(targetVal);
        break;
      case "photo":
        setPhoto(targetVal);
        break;
      case "nickname":
        await setNickname(targetVal);
        if (targetVal === "") {
          setIsValidNickname(null);
          break;
        }
        regExpNickname.test(targetVal)
          ? setIsValidNickname(true)
          : setIsValidNickname(false);
        break;
      case "job":
        setJob(targetVal);
        break;
      case "age":
        setAge(targetVal);
        break;
      case "introduce":
        setIntroduce(targetVal);
        break;
      case "instagramUrl":
        await setInstagramUrl(targetVal);
        if (targetVal === "") {
          setIsValidInstagramUrl(null);
          break;
        }
        regExpUrl.test(targetVal)
          ? setIsValidInstagramUrl(true)
          : setIsValidInstagramUrl(false);
        break;
      case "hashtag":
        setHashtag(targetVal);
        break;
    }
  };
  const handleSubmitTag = async (val) => {
    const regExpTag = /^#([\w|ㄱ-ㅎ|ㅏ-ㅣ|가-힣|]{1,15})/g;
    const targetVal = val.replace(/\s/gi, "");
    let newTagList = hashtagList;
    console.log(hashtagList);
    if (targetVal !== "") {
      const newTag = targetVal.substring(1);
      regExpTag.test(targetVal) &&
        (newTagList = await hashtagList.concat(newTag));
    }
    setHashtagList(newTagList);
  };
  return (
    <CarouselContainer>
      <SetNameJobSlide
        nickname={nickname}
        setNickname={setNickname}
        job={job}
        setJob={setJob}
        handleInput={handleInput}
        isValid={isValidNickname}
        failComment="영어(대/소문자), 숫자, 특수문자를 포함해 주세요"
      />
      <IntroduceMeSlide
        introduce={introduce}
        setIntroduce={setIntroduce}
        instagramUrl={instagramUrl}
        isValid={isValidInstagramUrl}
        failComment="잘못된 주소입니다"
        handleInput={handleInput}
      />
      <TagSlide
        hashtag={hashtag}
        setHashtag={setHashtag}
        hashtagList={hashtagList}
        handleSubmitTag={handleSubmitTag}
        handleInput={handleInput}
      />
    </CarouselContainer>
  );
};

export default Carousel;

const CarouselContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 460px;
  min-width: 400px;
  max-height: 1000px;
  margin: 50px auto;
  margin-bottom: 0;
  a {
    text-decoration: none;
  }
`;
