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

  const handleInput = (type) => (event) => {
    const targetVal = event.currentTarget.value;
    switch (type) {
      case "gender":
        setGender(targetVal);
        break;
      case "photo":
        setPhoto(targetVal);
        break;
      case "nickname":
        setNickname(targetVal);
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
    }
  };
  return (
    <>
      <Header userId={""} />
      <Carousel
        gender={gender}
        introduce={introduce}
        setIntroduce={setIntroduce}
        setGender={setGender}
        handleInput={handleInput}
      />
    </>
  );
};

export default ProfilePage;
