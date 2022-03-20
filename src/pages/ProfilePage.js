import React, { useState } from "react";
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
require("dotenv").config();

const SERVER_ADDRESS = process.env.REACT_APP_SERVER_ADDRESS;

const ProfilePage = (props) => {
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

  const postProfile = async () => {
    try{
      await axios
      .post(`http://${SERVER_ADDRESS}/api/profile/`, {
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

      })
      console.log("done");
    } catch (error){
      console.log(error);
      alert(error);
    }
  };

  return (
    <>
      <Header />
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

      <Footer />
    </>
  );
};

export default ProfilePage;
