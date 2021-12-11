import React from "react";
import styled from "styled-components";
import ProfileRegisterSlide from "./ProfileRegisterSlide";
import IntroduceMeSlide from "./IntroduceMeSlide";
import SetNameJobSlide from "./SetNameJobSlide";

const Carousel = ({
  gender,
  photo,
  introduce,
  nickname,
  job,
  age,
  instagramUrl,
  isValidNickname,
  isValidInstagramUrl,
  setNickname,
  setJob,
  setAge,
  setIntroduce,
  setGender,
  setPhoto,
  setInstagramUrl,
  setIsValidNickname,
  setIsValidInstagramUrl,
}) => {
  const handleInput = (type) => async (event) => {
    const targetVal = event.currentTarget.value;
    const regExpNickname =
      /(?=.*\d{1,50})(?=.*[~`!@#$%\^&*()-+=]{1,50})(?=.*[a-zA-Z]{1,50}).{3,50}$/;
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
    }
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
