import React from "react";
import styled from "styled-components";
import RadioButton from "../RadioButton";
import { LabelText, InputContainer, Input } from "../InputRow";
import StyledButton from "../Button";

const ProfileRegisterSlide = ({
  gender,
  setGender,
  photo,
  nickname,
  job,
  age,
  handleInput,
}) => {
  const genderList = ["여", "남"];
  return (
    <>
      <ProfileRegisterForm>
        <HeadText>프로필 등록</HeadText>
        <ProfileInputRowBox>
          <ProfileInputRow>
            <LabelText>프로필 사진</LabelText>
            <div className={photo}></div>
          </ProfileInputRow>
          <ProfileInputRow>
            <LabelText>닉네임</LabelText>
            <InputContainer>
              <Input
                type="nickname"
                value={nickname}
                onChange={handleInput("nickname")}
                placeholder="닉네임을 입력하세요"
                required
              />
            </InputContainer>
          </ProfileInputRow>
          <ProfileInputRow>
            <LabelText>현재 직업</LabelText>
            <InputContainer>
              <Input
                type="job"
                value={job}
                onChange={handleInput("job")}
                placeholder="직업을 입력하세요"
                required
              />
            </InputContainer>
          </ProfileInputRow>
          <ProfileInputRow>
            <LabelText>나이</LabelText>
            <InputContainer>
              <Input
                type="age"
                value={age}
                onChange={handleInput("age")}
                placeholder="나이를 입력하세요"
                required
              />
            </InputContainer>
          </ProfileInputRow>
          <ProfileInputRow>
            <LabelText>성별</LabelText>
            {genderList.map((element, i) => (
              <RadioButton
                key={i}
                value={element}
                selectedValue={gender}
                handleCheck={setGender}
              />
            ))}
          </ProfileInputRow>
          <ButtonContainer>
            <NextSlideButton>다음</NextSlideButton>
          </ButtonContainer>
        </ProfileInputRowBox>
      </ProfileRegisterForm>
    </>
  );
};

export default ProfileRegisterSlide;

const ProfileRegisterForm = styled.form`
  width: 460px;
  height: 600px;
  border: 1px solid #f1f1f1;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto;
  margin-bottom: 0;
  a {
    text-decoration: none;
  }
`;

const HeadText = styled.span`
  font-size: 2.6rem;
  font-weight: 600;
`;

const ProfileInputRowBox = styled.div`
  margin: 1rem auto;
`;

const ProfileInputRow = styled.div`
  padding: 1rem;
`;

const ButtonContainer = styled.div`
  text-align: right;
`;

const NextSlideButton = styled(StyledButton)`
  margin: 1rem;
  width: 110px;
  height: 40px;
  border-radius: 25px;
`;
