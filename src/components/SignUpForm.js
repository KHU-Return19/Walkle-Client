import React, { Link } from "react";
import styled from "styled-components";
import StyledButton from "./Button";

const SignUpForm = ({
  name,
  id,
  password,
  email,
  passwordCheck,
  authNum,
  handleInput,
  onSubmitHandler,
}) => {
  return (
    <>
      <SignUpContainer>
        <HeadText>계정 정보를 입력해 주세요</HeadText>
        <SignUpFormBox onSubmit={onSubmitHandler}>
          <SignUpRow>
            <LabelText>이름</LabelText>
            <InputContainer>
              <NameInput
                type="name"
                value={name}
                onChange={handleInput("name")}
                placeholder="이름을 입력해주세요"
                required
              />
            </InputContainer>
          </SignUpRow>
          <SignUpRow>
            <LabelText>이메일</LabelText>
            <InputContainer>
              <NameInput
                type="email"
                value={email}
                onChange={handleInput("email")}
                placeholder="이메일을 입력해주세요"
                required
              />
            </InputContainer>
          </SignUpRow>
          <SignUpRow>
            <LabelText>인증번호</LabelText>
            <InputContainer>
              <NameInput
                type="authNum"
                value={authNum}
                onChange={handleInput("authNum")}
                placeholder="인증번호를 입력해주세요"
                required
              />
            </InputContainer>
          </SignUpRow>
          <SignUpRow>
            <LabelText>아이디</LabelText>
            <InputContainer>
              <NameInput
                type="id"
                value={id}
                onChange={handleInput("id")}
                placeholder="아이디를 입력해주세요"
                required
              />
            </InputContainer>
          </SignUpRow>
          <SignUpRow>
            <LabelText>비밀번호</LabelText>
            <InputContainer>
              <NameInput
                type="password"
                value={password}
                onChange={handleInput("password")}
                placeholder="비밀번호를 입력해주세요"
                required
              />
            </InputContainer>
          </SignUpRow>
          <SignUpRow>
            <LabelText>비밀번호 확인</LabelText>
            <InputContainer>
              <NameInput
                type="passwordCheck"
                value={passwordCheck}
                onChange={handleInput("passwordCheck")}
                placeholder="다시 한번 비밀번호를 입력해주세요"
                required
              />
            </InputContainer>
          </SignUpRow>
          <ToProfilePageBtn type="submit">
            프로필 등록하러 가기
          </ToProfilePageBtn>
        </SignUpFormBox>
      </SignUpContainer>
      ;
    </>
  );
};

export default SignUpForm;

const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 460px;
  min-width: 400px;
  max-height: 1000px;
  margin: 50px auto;
  margin-bottom: 0;
`;
const HeadText = styled.span`
  padding-bottom: 2rem;
  font-size: 1.3rem;
  font-weight: 600;
`;
const SignUpFormBox = styled.form`
  display: flex;
  flex-direction: column;
`;
const SignUpRow = styled.div`
  display: flex;
  flex-direction: column;
  height: 107px;
`;
const LabelText = styled.span`
  font-size: 0.8rem;
  color: #8b8b8b;
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
const NameInput = styled.input`
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

const ToProfilePageBtn = styled(StyledButton)`
  width: 400px;
  height: 50px;
  margin: 0.2rem;
  color: #ffffff;
  font-size: 1rem;
`;
