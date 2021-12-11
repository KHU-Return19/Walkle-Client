import React, { useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Carousel from "../components/Carousel/Carousel";

const ProfilePage = (props) => {
  const [gender, setGender] = useState("여");
  const [introduce, setIntroduce] = useState("");
  const [photo, setPhoto] = useState("");
  const [nickname, setNickname] = useState("");
  const [job, setJob] = useState("");
  const [age, setAge] = useState("");
  const [instagramUrl, setInstagramUrl] = useState("");
  const [isValidNickname, setIsValidNickname] = useState();
  const [isValidInstagramUrl, setIsValidInstagramUrl] = useState();

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
        isValidNickname={isValidNickname}
        isValidInstagramUrl={isValidInstagramUrl}
        setGender={setGender}
        setIntroduce={setIntroduce}
        setPhoto={setPhoto}
        setNickname={setNickname}
        setJob={setJob}
        setAge={setAge}
        setInstagramUrl={setInstagramUrl}
        setIsValidNickname={setIsValidNickname}
        setIsValidInstagramUrl={setIsValidInstagramUrl}
      />
    </>
  );
};

export default ProfilePage;
