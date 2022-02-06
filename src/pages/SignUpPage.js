import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRecoilState } from "recoil";
import Header from "../components/Header";
import SignUpForm from "../components/SignUpForm";
import { userProfileState } from "../store/state";
import Footer from "../components/Footer";
require("dotenv").config();

const SERVER_ADDRESS = process.env.REACT_APP_SERVER_ADDRESS;

const SignUpPage = (props) => {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [authNum, setAuthNum] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [email, setEmail] = useState("");
  const [isValidPasswordCheck, setIsValidPasswordCheck] = useState(null);
  const [userProfile, setUserProfile] = useRecoilState(userProfileState);

  const handleValid = (password, passwordCheck) => {
    password === passwordCheck
      ? setIsValidPasswordCheck(true)
      : setIsValidPasswordCheck(false);
  };

  useEffect(() => {
    handleValid(password, passwordCheck);
  }, [password, passwordCheck]);

  const handleInput = (type) => async (event) => {
    const targetVal = event.currentTarget.value;
    switch (type) {
      case "name":
        setName(targetVal);
        break;
      case "id":
        setId(targetVal);
        break;
      case "email":
        setEmail(targetVal);
        break;
      case "authNum":
        setAuthNum(targetVal);
        break;
      case "password":
        await setPassword(targetVal);
        targetVal === "" && setIsValidPasswordCheck(null);
        break;
      case "passwordCheck":
        await setPasswordCheck(targetVal);
        targetVal === "" && setIsValidPasswordCheck(null);
        break;
    }
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    let body = {
      userId: id,
      email: email,
      password: password,
    };
    axios
      .post(`${SERVER_ADDRESS}/api/users/register`, body)
      .then((res) => {
        if (res.status >= 200 && res.status < 300) {
          console.log(res.data);
          props.history.push("/profile");
        } else alert(res.data.msg);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Header />
      <SignUpForm
        name={name}
        id={id}
        password={password}
        passwordCheck={passwordCheck}
        email={email}
        authNum={authNum}
        handleInput={handleInput}
        onSubmitHandler={onSubmitHandler}
        isValidPasswordCheck={isValidPasswordCheck}
      />
      <Footer />
    </>
  );
};

export default SignUpPage;
