import React, { useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import SignInForm from "../components/SignInForm";

const SignInPage = (props) => {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");

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
            .post("/apiURL", body)
            .then((res) => {
                res.data.success
                    ? props.history.push("/")
                    : alert(res.data.msg);
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
