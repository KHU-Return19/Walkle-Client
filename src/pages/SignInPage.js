import React, { useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import SignInForm from "../components/SignInForm";
import { useRecoilState } from "recoil";
import { userProfileState, userIDState } from "../store/state";

const SignInPage = (props) => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [userProfile, setUserProfile] = useRecoilState(userProfileState);
  const [userID, setUserID] = useRecoilState(userIDState);

  const handleInput = (type) => (event) => {
    const targetVal = event.currentTarget.value;
    type === "id" ? setId(targetVal) : setPassword(targetVal);
  };

  const getProfile = () => {
    axios
      .get(`server/api/profile/`, userID)
      .then((res) => {
        res.status >= 200 && res.status < 300
          ? setUserProfile(res.data)
          : alert(res.data.msg);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const login = async (event) => {
    event.preventDefault();
    let body = {
      loginId: id,
      password: password,
    };
    try {
      const { data } = await axios.post(`server/api/users/login`, body);
      setUserID(data);
      alert("로그인이 완료되었습니다.");
      //getProfile();
      props.history.push("/");
    } catch (error) {
      alert(error);
      console.log(error);
    }
  };

  return (
    <>
      <Header />
      <SignInForm
        id={id}
        password={password}
        handleInput={handleInput}
        onSubmitHandler={login}
      />
    </>
  );
};

export default SignInPage;
