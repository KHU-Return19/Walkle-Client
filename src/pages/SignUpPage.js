import React, { useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import SignUpForm from "../components/SignUpForm";

const SignUpPage = (props) => {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [authNum, setAuthNum] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [email, setEmail] = useState("");

  const handleInput = (type) => (event) => {
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
        setPassword(targetVal);
        break;
      case "passwordCheck":
        setPasswordCheck(targetVal);
        break;
    }
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    let body = {
      id: id,
      password: password,
    };
    axios
      .post("/apiURL", body)
      .then((res) => {
        res.data.success ? props.history.push("/profile") : alert(res.data.msg);
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
      />
    </>
  );
};

export default SignUpPage;
