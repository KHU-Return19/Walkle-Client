import React, { useState } from "react";
import Header from "../components/Header";
import Carousel from "../components/Carousel/Carousel";
import { useRecoilState } from "recoil";
import { locationListState } from "../store/state";
import Footer from "../components/Footer";

const ProfilePage = (props) => {
  const [gender, setGender] = useState("여");
  const [introduce, setIntroduce] = useState("");
  const [photo, setPhoto] = useState("");
  const [nickname, setNickname] = useState("");
  const [job, setJob] = useState("");
  const [age, setAge] = useState("");
  const [instagramUrl, setInstagramUrl] = useState("");
  const [hashtag, setHashtag] = useState("");
  const [isValidNickname, setIsValidNickname] = useState();
  const [isValidInstagramUrl, setIsValidInstagramUrl] = useState();
  const [location, setLocation] = useRecoilState(locationListState);

  return (
    <>
      <Header userId={""} />
      <Carousel
        gender={gender}
        introduce={introduce}
        photo={photo}
        nickname={nickname}
        job={job}
        age={age}
        instagramUrl={instagramUrl}
        hashtag={hashtag}
        isValidNickname={isValidNickname}
        isValidInstagramUrl={isValidInstagramUrl}
        location={location}
        setGender={setGender}
        setIntroduce={setIntroduce}
        setPhoto={setPhoto}
        setNickname={setNickname}
        setJob={setJob}
        setAge={setAge}
        setInstagramUrl={setInstagramUrl}
        setHashtag={setHashtag}
        setIsValidNickname={setIsValidNickname}
        setIsValidInstagramUrl={setIsValidInstagramUrl}
        setLocation={setLocation}
      />
      <Footer />
    </>
  );
};

export default ProfilePage;
