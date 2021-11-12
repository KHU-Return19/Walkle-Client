import React from "react";
import styled from "styled-components";
import StyledButton from "./Button";
import InputRow from "./InputRow";

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
          <InputRow
            labelText="이름"
            type="name"
            value={name}
            onChange={handleInput("name")}
            placeholder="이름을 입력해주세요"
            successComment="사용 가능한 이름입니다"
          />
          <InputRow
            labelText="이메일"
            type="email"
            value={email}
            onChange={handleInput("email")}
            placeholder="이메일을 입력해주세요"
            successComment="이메일로 인증번호가 발송되었습니다"
          />
          <InputRow
            labelText="인증번호"
            type="authNum"
            value={authNum}
            onChange={handleInput("authNum")}
            placeholder="인증번호를 입력해주세요"
            successComment="인증에 성공하였습니다"
          />
          <InputRow
            labelText="아이디"
            type="id"
            value={id}
            onChange={handleInput("id")}
            placeholder="아이디를 입력해주세요"
            successComment="사용 가능한 아이디입니다"
          />
          <InputRow
            labelText="비밀번호"
            type="password"
            value={password}
            onChange={handleInput("password")}
            placeholder="비밀번호를 입력해주세요"
            successComment="사용 가능한 비밀번호입니다"
          />
          <InputRow
            labelText="비밀번호 확인"
            type="passwordCheck"
            value={passwordCheck}
            onChange={handleInput("passwordCheck")}
            placeholder="다시 한번 비밀번호를 입력해주세요"
            successComment="비밀번호가 확인되었습니다"
          />
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

const ToProfilePageBtn = styled(StyledButton)`
  width: 400px;
  height: 50px;
  margin-top: 1.5rem;
  color: #ffffff;
  font-size: 1rem;
  font-weight: 600;
`;
