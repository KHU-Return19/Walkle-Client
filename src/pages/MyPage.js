import React, { useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Carousel from "../components/Carousel/Carousel";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  locationListState,
  profileFieldTagListState,
  profileHashtagListState,
} from "../store/state";
import Footer from "../components/Footer";
import axios from "axios";
import Profile from "../components/Profile/Profile";

const MyPage = ({match}) => {
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
  const [devIsProfile, setDevIsProfile] = useState(true);

  const postProfile = async () => {
    console.log({
      field: fieldtagList,
      tags: hashtagList,
      location: location,
      nickname: nickname,
      job: job,
      sns_link: instagramUrl,
      intro: introduce,
      picture: photo,
      gender: "",
      age: "",
      career: "",
    });
    try {
      await axios.post(`server/api/profile/`, {
        fields: fieldtagList,
        tags: hashtagList,
        location: location,
        nickname: nickname,
        job: job,
        snsLink: instagramUrl,
        intro: introduce,
        picture: photo,
        gender: "",
        age: "",
      });
      alert("프로필 등록이 완료되었습니다.");
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };

  return (
    <>
      <Header />
      <PageBackground>
        {!devIsProfile && (
          <Carousel
            introduce={introduce}
            photo={photo}
            nickname={nickname}
            job={job}
            instagramUrl={instagramUrl}
            hashtag={hashtag}
            isValidNickname={isValidNickname}
            isValidInstagramUrl={isValidInstagramUrl}
            location={location}
            setIntroduce={setIntroduce}
            setPhoto={setPhoto}
            setNickname={setNickname}
            setJob={setJob}
            setInstagramUrl={setInstagramUrl}
            setHashtag={setHashtag}
            setIsValidNickname={setIsValidNickname}
            setIsValidInstagramUrl={setIsValidInstagramUrl}
            setLocation={setLocation}
            postProfile={postProfile}
          />
        )}
        {devIsProfile && <Profile match={match}/>}
      </PageBackground>
      <Footer />
    </>
  );
};

export default MyPage;

const PageBackground = styled.div`
  width: 100vw;
  height: 1700px;
  background: #fafafa;
`;
