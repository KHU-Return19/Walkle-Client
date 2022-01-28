import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { profileHashtagListState } from "../../store/state";
import IntroduceMeSlide from "./IntroduceMeSlide";
import SetNameJobSlide from "./SetNameJobSlide";
import TagSlide from "./TagSlide";
import SetLocationSlide from "./SetLocationSlide";
import PageIndicator from "./PageIndicator";
import CompleteSlide from "./CompleteSlide";

const TOTAL_SLIDES = 3;

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
  location,
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
  setLocation,
}) => {
  const [hashtagList, setHashtagList] = useRecoilState(profileHashtagListState);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const slideRef = useRef(null);
  const handleInput = (type) => async (event) => {
    const targetVal = event.currentTarget.value;
    const regExpNickname =
      /(?=.*\d{1,50})(?=.*[~`!@#$%^&*()-+=]{1,50})(?=.*[a-zA-Z]{1,50}).{3,50}$/;
    const regExpUrl =
      /(http(s)?:\/\/www.instagram.com\/)([a-z0-9~`!@#$%^&*()-+=_]{1,100})/gi;
    switch (type) {
      default:
        break;
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
    if (targetVal !== "") {
      const newTag = targetVal.substring(1);
      regExpTag.test(targetVal) &&
        (newTagList = await hashtagList.concat(newTag));
    }
    setHashtagList(newTagList);
  };
  const toggleSlide = (type) => (e) => {
    if (type === "prev") {
      if (currentSlide === 0) {
        return;
      } else {
        setCurrentSlide(currentSlide - 1);
      }
    }
    if (type === "next") {
      if (currentSlide >= TOTAL_SLIDES) {
        return;
      } else {
        setCurrentSlide(currentSlide + 1);
      }
    }
  };
  useEffect(() => {
    slideRef.current.style.transition = "all 0.5s ease-in-out";
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`;
  }, [currentSlide]);
  return (
    <>
      <CarouselContainer>
        <PageIndicator currentSlide={currentSlide} />
        {!isComplete && (
          <SlideContainer ref={slideRef}>
            <SetNameJobSlide
              nickname={nickname}
              setNickname={setNickname}
              job={job}
              setJob={setJob}
              handleInput={handleInput}
              isValid={isValidNickname}
              failComment="영어(대/소문자), 숫자, 특수문자를 포함해 주세요"
              toggleSlide={toggleSlide}
            />
            <IntroduceMeSlide
              introduce={introduce}
              setIntroduce={setIntroduce}
              instagramUrl={instagramUrl}
              isValid={isValidInstagramUrl}
              failComment="잘못된 주소입니다"
              handleInput={handleInput}
              toggleSlide={toggleSlide}
            />
            <TagSlide
              hashtag={hashtag}
              setHashtag={setHashtag}
              hashtagList={hashtagList}
              handleSubmitTag={handleSubmitTag}
              handleInput={handleInput}
              toggleSlide={toggleSlide}
            />
            <SetLocationSlide
              toggleSlide={toggleSlide}
              location={location}
              setLocation={setLocation}
              setIsComplete={setIsComplete}
            />
          </SlideContainer>
        )}
        {isComplete && <CompleteSlide />}
      </CarouselContainer>
    </>
  );
};

export default Carousel;

const CarouselContainer = styled.div`
  margin: auto;
  width: 462px;
  overflow: hidden;
`;

const SlideContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: top;
  width: 100%;
  max-height: 1000px;
  margin: 50px auto;
  margin-bottom: 0;
  a {
    text-decoration: none;
  }
`;
//
