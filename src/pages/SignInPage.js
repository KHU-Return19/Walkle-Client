import React, { useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import SignInForm from "../components/SignInForm";
import { useRecoilState } from "recoil";
import { userProfileState } from "../store/state";

const SignInPage = (props) => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [userProfile, setUserProfile] = useRecoilState(userProfileState);

  const handleInput = (type) => (event) => {
    const targetVal = event.currentTarget.value;
    type === "id" ? setId(targetVal) : setPassword(targetVal);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    let body = {
      id: id,
      password: password,
    };
    axios
      .post("/api/user/login", body)
      .then((res) => {
        if (res.data.success) {
          axios.get("/api/profile/:nickname", body).then((res) => {
            res.data.success
              ? setUserProfile(res.data.user_data)
              : alert(res.data.msg);
          });
          props.history.push("/");
        } else {
          alert(res.data.msg);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Header userId="" />
      <SignInForm
        id={id}
        password={password}
        handleInput={handleInput}
        onSubmitHandler={onSubmitHandler}
      />
    </>
  );
};

export default SignInPage;
