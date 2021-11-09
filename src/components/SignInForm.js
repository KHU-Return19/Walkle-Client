import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import StyledButton from "./Button";

const SignInForm = ({ id, password, handleInput, onSubmitHandler }) => {
    return (
        <>
            <SignInContainer>
                <MainText>Walkle</MainText>
                <SignInFormBox onSubmit={onSubmitHandler}>
                    <InputContainer>
                        <IdInput
                            type="id"
                            value={id}
                            onChange={handleInput("id")}
                            placeholder="아이디"
                            required
                        />
                    </InputContainer>
                    <InputContainer>
                        <PasswordInput
                            type="password"
                            value={password}
                            onChange={handleInput("password")}
                            placeholder="비밀번호"
                            required
                        />
                    </InputContainer>
                    <SignInBtn type="submit">로그인</SignInBtn>
                    <FindIdLink>
                        <Link to="/findid">아이디/비밀번호 찾기</Link>
                    </FindIdLink>
                </SignInFormBox>
                <SocialSignInFormBox>
                    <SubText>신규 회원이신가요?</SubText>
                    <EmailSignUpBtn>이메일로 가입하기</EmailSignUpBtn>
                    <KaKaoSignUpBtn>카카오로 가입하기</KaKaoSignUpBtn>
                </SocialSignInFormBox>
            </SignInContainer>
        </>
    );
};

export default SignInForm;

const SignInContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 460px;
    min-width: 400px;
    max-height: 700px;
    margin: 100px auto;
`;

const MainText = styled.span`
    font-size: 3rem;
    font-weight: 600;
    color: #7054ff;
`;

const SignInFormBox = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 3rem auto;
    padding: 2rem;
    border: 1px solid #f1f1f1;
    border-radius: 10px;
`;

const InputContainer = styled.div`
    display: table-cell;
    vertical-align: middle;
    margin: 0.4rem auto;
    padding-left: 1.5rem;
    border: none;
    border-radius: 100px;
    width: 376px;
    max-width: 400px;
    height: 50px;
    font-size: 1rem;
    color: #313338;
    background: #fafafa;
`;

const IdInput = styled.input`
    border: none;
    border-radius: 100px;
    width: 350px;
    height: 50px;
    font-size: 1rem;
    color: #313338;
    background: #fafafa;
    :focus {
        outline: none;
    }
`;

const PasswordInput = styled(IdInput)``;

const SignInBtn = styled(StyledButton)`
    width: 400px;
    height: 50px;
    margin: 2rem auto;
    color: #ffffff;
    font-size: 1rem;
`;

const FindIdLink = styled.div`
    a {
        text-decoration: none;
        color: #8b8b8b;
        font-size: 1rem;
    }
`;

const SocialSignInFormBox = styled(SignInFormBox)`
    margin: 0;
    padding-top: 0;
    border: none;
`;

const SubText = styled.span`
    margin-bottom: 0.5rem;
    color: #8b8b8b;
    font-size: 1rem;
`;

const EmailSignUpBtn = styled(StyledButton)`
    width: 400px;
    height: 50px;
    margin: 0.2rem;
    background: #313338;
    color: #ffffff;
    font-size: 1rem;
`;

const KaKaoSignUpBtn = styled(EmailSignUpBtn)`
    background: #fee500;
    color: #313338;
`;
