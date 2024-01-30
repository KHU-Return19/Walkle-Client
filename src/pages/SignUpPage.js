import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRecoilState } from "recoil";
import Header from "../components/Header";
import SignUpForm from "../components/SignUpForm";
import { userProfileState } from "../store/state";
import Footer from "../components/Footer";

const SignUpPage = (props) => {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [authNum, setAuthNum] = useState("");
  const [messageId, setMessageId] = useState(false);
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

  const signUp = (event) => {
    event.preventDefault();
    let body = {
      loginId: id,
      name: name,
      email: email,
      password: password,
      messageId: messageId,
      number: Number(authNum),
    };
    axios
      .post(`server/api/users/register`, body)
      .then((res) => {
        if (res.data._id) {
          alert("회원가입이 완료되었습니다");
          props.history.push("/profile");
        } else alert(res.data.msg);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const sendAuthMail = async () => {
    try {
      const res = await axios.post(`server/api/mail`, {
        email: email,
      });
      setMessageId(res.data.messageId);
    } catch (err) {
      console.log(err);
      alert("유효하지 않은 이메일 주소입니다.");
    }
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
        messageId={messageId}
        handleInput={handleInput}
        onSubmitHandler={signUp}
        sendAuthMail={sendAuthMail}
        isValidPasswordCheck={isValidPasswordCheck}
      />
      <Footer />
    </>
  );
};

export default SignUpPage;
