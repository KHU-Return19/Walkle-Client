import React from "react";
import styled from "styled-components";
import RadioButton from "../RadioButton";

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
      <HeadText>프로필 등록</HeadText>
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
    </>
  );
};

export default ProfileRegisterSlide;

const HeadText = styled.span``;

const ProfileInputRow = styled.div``;

const LabelText = styled(HeadText)``;

const InputContainer = styled.div``;

const Input = styled.input``;
