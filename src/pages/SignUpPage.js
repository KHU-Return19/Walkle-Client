import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRecoilState } from "recoil";
import Header from "../components/Header";
import SignUpForm from "../components/SignUpForm";
import { userProfileState } from "../store/state";

const SignUpPage = (props) => {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [authNum, setAuthNum] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [email, setEmail] = useState("");
  const [isValidPasswordCheck, setIsValidPasswordCheck] = useState(null);
  const [userProfile, setUserProfile] = useRecoilState(userProfileState);

  useEffect(() => {
    axios.get("/api/profile/:nickname").then((res) => {
      const response = res.data.profile;
      if (res.data.success) {
        console.log(response.data);
      }
    });
  });

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
      userid: id,
      email: email,
      password: password,
      token: "",
    };
    axios
      .post("/api/user/register", body)
      .then((res) => {
        if (res.data.success) {
          axios.get("/api/profile/:nickname", body).then((res) => {
            res.data.success
              ? setUserProfile(res.data.user_data)
              : alert(res.data.msg);
          });
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
    </>
  );
};

export default SignUpPage;
