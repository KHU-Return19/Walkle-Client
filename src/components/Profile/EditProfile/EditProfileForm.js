import React, { useState } from "react";
import styled from "styled-components";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  locationListState,
  profileFieldTagListState,
  profileHashtagListState,
} from "../../../store/state";
import SetNameJobArea from "./SetNameJobArea";
import IntroduceMeArea from "./IntroduceMeArea";

const EditProfileForm = () => {
  const [introduce, setIntroduce] = useState("");
  const [photo, setPhoto] = useState("");
  const [nickname, setNickname] = useState("");
  const [job, setJob] = useState("");
  const [instagramUrl, setInstagramUrl] = useState("");
  const [hashtag, setHashtag] = useState("");
  const fieldtagList = useRecoilValue(profileFieldTagListState);
  const hashtagList = useRecoilValue(profileHashtagListState);
  const [isValidNickname, setIsValidNickname] = useState();
  const [isValidInstagramUrl, setIsValidInstagramUrl] = useState();
  const [location, setLocation] = useRecoilState(locationListState);

  const handleInput = (type) => async (event) => {
    const targetVal = event.currentTarget.value;
    const regExpNickname = /(?=.*\d{1,50})(?=.*[a-zA-Z]{1,50}).{3,50}$/;
    const regExpUrl =
      /(http(s)?:\/\/www.instagram.com\/)([a-z0-9~`!@#$%^&*()-+=_]{1,100})/gi;
    switch (type) {
      default:
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
  return (
    <>
      <FormContainer>
        <HeadTextContainer>
          <HeadText>프로필 수정</HeadText>
        </HeadTextContainer>
        <SetNameJobArea
          nickname={nickname}
          job={job}
          handleInput={handleInput}
          isValid={isValidNickname}
          failComment={"영어(대/소문자), 숫자를 포함해 주세요"}
        />
        <IntroduceMeArea
          introduce={introduce}
          instagramUrl={instagramUrl}
          isValid={isValidInstagramUrl}
          failComment="잘못된 주소입니다"
          handleInput={handleInput}
        />
      </FormContainer>
    </>
  );
};

export default EditProfileForm;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
`;

const HeadTextContainer = styled.div`
  justify-items: center;
  text-align: center;
  margin-bottom: 40px;
`;

const HeadText = styled.span`
  font-family: Pretendard;
  font-size: 26px;
  font-weight: 700;
  line-height: 36px;
  white-space: pre-wrap;
  text-align: center;
`;
